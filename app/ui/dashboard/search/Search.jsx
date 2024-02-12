"use client";

import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {useDebouncedCallback} from 'use-debounce'

export default function Search({ placeholder }) {
  const searchParams = useSearchParams()
  const {replace} = useRouter()
  const pathNmae = usePathname()

  const handleChange = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams)
    if(e.target.value) {
      e.target.value.length > 2 && params.set('q', e.target.value)
      params.set('page', 1)
    }else {
      params.delete('q')
    }
    replace(`${pathNmae}?${params}`)
  },500)



  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} onChange={handleChange}/>
    </div>
  );
}
