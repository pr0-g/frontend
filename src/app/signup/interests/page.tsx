"use client";

import React from "react";
import styles from "./interests.module.css";
import BackNav from "../../_component/BackNav";
import InterestContent from "./_component/InterestsSection";

const interests = [
  "Interest 1",
  "Interest 2",
  "Interest 3",
  "Interest 4",
  "Interest 5",
  "Interest 6",
  "Interest 7",
];

export default function Interest() {
  return (
    <>
      <BackNav navbarTitle="관심 분야" />
      <div className={styles.container}>
        <InterestContent
          interestsList={interests}
          nextLink="/signup/nickname"
        />
      </div>
    </>
  );
}
