import React from 'react'
import styles from './login.module.css'

export default function page() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" name='username' placeholder='username' />
        <input type="text" name='password' placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}
