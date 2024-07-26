"use client";

import React from "react";
import { googleSignIn } from "@/app/actions/auth";
import Image from "next/image";
import styles from "./google.module.css";

export function GoogleSignIn() {
  return (
    <form action={googleSignIn}>
      <button type="submit">
        <Image
          src="/web_neutral_sq_SU.svg"
          alt="Sign in with Google"
          width={233}
          height={52}
        />
      </button>
    </form>
  );
}
