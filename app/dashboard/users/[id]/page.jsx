import React from "react";
import styles from "./id.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" placeholder="John Doe" />
          <label>Email</label>
          <input type="text" placeholder="johndoe@gmail.com" />
          <label>Password</label>
          <input type="password"/>
          <label>Phone</label>
          <input type="text" placeholder="+1234567" />
          <label>Address</label>
          <input type="text" placeholder="Bangkok" />
          <label>Is Admin?</label>
          <select name="isadmin" id="isadmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isadmin" id="isadmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
