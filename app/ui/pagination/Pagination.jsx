"use client";

import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ count }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const params = new URLSearchParams(searchParams);
  const page = params.get("page") || 1;

  const USER_PER_PAGE = 2;

  const hasPrev = USER_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = USER_PER_PAGE * (parseInt(page) - 1) + USER_PER_PAGE < count;

  const handleClick = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);

    replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleClick("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleClick("next")}
      >
        Next
      </button>
    </div>
  );
}
