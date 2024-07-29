"use client";

import { useState } from "react";
import FieldRankingSection from "./_components/FieldRankingSection";
import FieldTab from "./_components/FieldTab";
import styles from "./field.module.css";

interface Writings {
  title: string;
  imageUrl: string;
}

const writingsData: Writings[] = [
  {
    title: "The Great Gatsby",
    imageUrl: "",
  },
  {
    title: "To Kill a Mockingbird",
    imageUrl: "",
  },
  {
    title: "1984",
    imageUrl: "",
  },
  {
    title: "Pride and Prejudice",
    imageUrl: "",
  },
  {
    title: "The Catcher in the Rye",
    imageUrl: "",
  },
  {
    title: "Moby Dick",
    imageUrl: "",
  },
  {
    title: "War and Peace",
    imageUrl: "",
  },
  {
    title: "The Hobbit",
    imageUrl: "",
  },
  {
    title: "Brave New World",
    imageUrl: "",
  },
  {
    title: "The Great Gatsby",
    imageUrl: "",
  },
  {
    title: "To Kill a Mockingbird",
    imageUrl: "",
  },
  {
    title: "1984",
    imageUrl: "",
  },
  {
    title: "Pride and Prejudice",
    imageUrl: "",
  },
  {
    title: "The Catcher in the Rye",
    imageUrl: "",
  },
  {
    title: "Moby Dick",
    imageUrl: "",
  },
  {
    title: "War and Peace",
    imageUrl: "",
  },
  {
    title: "The Hobbit",
    imageUrl: "",
  },
  {
    title: "Brave New World",
    imageUrl: "",
  },
];

const fields = ["분야1", "분야2", "분야3", "분야4", "분야5"];

export default function Field() {
  const [selectedField, setSelectedField] = useState(fields[0]);

  return (
    <>
      <div className={styles.title}>분야별 랭킹</div>
      <FieldTab
        fields={fields}
        selectedField={selectedField}
        onSelectField={setSelectedField}
      />
      <FieldRankingSection fieldRankingList={writingsData} />
    </>
  );
}
