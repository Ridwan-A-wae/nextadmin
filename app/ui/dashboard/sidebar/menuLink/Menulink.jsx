'use client'

import React from 'react'
import styles from './menulink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menulink({item}) {
  const pathName = usePathname()
  return (
    <Link className={`${styles.container} ${pathName === item.path && styles.active}`} href={item.path}>
        {item.icon}
        {item.title}
    </Link>
  )
}
