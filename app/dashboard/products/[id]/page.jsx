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
          <label>Title</label>
          <input type="text" placeholder="John Doe" name="title" />
          <label>Price</label>
          <input type="number" placeholder="$999" />
          <label>Stock</label>
          <input type="text" placeholder="stock"/>
          <label>Color</label>
          <input type="text" placeholder="red" />
          <label>Size</label>
          <input type="text" placeholder="size" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Description"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
