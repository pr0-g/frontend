"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./write.module.css";
import "react-quill/dist/quill.snow.css";
import { putPost } from "./_lib/putPost";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Post {
  id: number | null;
  title: string;
  content: string;
  interestId: number;
  thumbnailUrl: string;
}

export default function Editor() {
  const [post, setPost] = useState<Post>({
    id: null,
    title: "",
    content: "",
    interestId: 1,
    thumbnailUrl: "",
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleContentChange = (content: string) => {
    setPost((prev) => ({ ...prev, content }));
  };

  const handleInterestIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPost((prev) => ({ ...prev, interestId: Number(e.target.value) }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await putPost(post);
      console.log("Post updated successfully:", result);
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>PROG</div>
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
              <option value={1}>관심사 1</option>
              <option value={2}>관심사 2</option>
              <option value={3}>관심사 3</option>
            </select>
          </div>
          <div className={styles.quillWrapper}>
            <ReactQuill theme="snow" value={post.content} />
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
