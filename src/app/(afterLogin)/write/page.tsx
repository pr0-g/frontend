"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./write.module.css";
import { putPost } from "./_lib/putPost";
import { getInterests } from "../_lib/getInterests";
import Header from "../_components/Header";
import { IInterest } from "@/model/interest";
import { IWrite } from "@/model/write";
import { useRouter } from "next/navigation";

interface ApiResponse {
  code: string;
  message: string;
  result: IInterest[];
}

export default function Editor() {
  const [post, setPost] = useState<IWrite>({
    id: null,
    title: "",
    content: "",
    interestId: 0,
    thumbnailUrl: "",
  });
  const [interests, setInterests] = useState<IInterest[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const data: ApiResponse = await getInterests();
        if (data.code === "SUCCESS") {
          setInterests(data.result);
        }
      } catch (error) {
        console.error("Failed to fetch interests:", error);
      }
    };

    fetchInterests();
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleInterestIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPost((prev) => ({ ...prev, interestId: Number(e.target.value) }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setPost((prev) => ({ ...prev, thumbnailUrl: file.name }));
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await putPost(post);
      console.log("Post updated successfully:", result);
      router.refresh();
      router.push("/posts");
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <form onSubmit={onSubmit} className={styles.editorBody}>
          <input
            type="text"
            value={post.title}
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
            className={styles.titleInput}
          />
          <div className={styles.interestWrapper}>
            <select
              value={post.interestId}
              onChange={handleInterestIdChange}
              className={styles.interestSelect}
            >
              <option value={0}>관심사를 선택하세요</option>
              {interests.map((interest) => (
                <option key={interest.id} value={interest.id}>
                  {interest.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.imageUploadWrapper}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={styles.imageInput}
            />
            {imagePreview && (
              <div className={styles.imagePreview}>
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={200}
                  height={200}
                  objectFit="cover"
                />
              </div>
            )}
          </div>
          <div className={styles.contentWrapper}>
            <textarea
              value={post.content}
              onChange={handleContentChange}
              placeholder="내용을 입력하세요"
              className={styles.contentTextarea}
              rows={15}
            />
          </div>
          <div className={styles.submitButtonWrapper}>
            <button type="submit" className={styles.submitButton}>
              게시글 작성
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
