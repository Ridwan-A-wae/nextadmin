import React from "react";
import styles from "./id.module.css";
import Image from "next/image";
import { fetchProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/action";

export default async function page({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product?.img ? product.img : "/noproduct.jpg"}
            alt=""
            fill
          />
        </div>
        {product?.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <label>Title Hello world</label>
          <input type="text" placeholder={product.title} name="title" />
          <label>Image</label>
          <input type="text" placeholder={product.img} name="img" />
          <label>Price</label>
          <input type="number" placeholder={product.price} name="price" />
          <label>Stock</label>
          <input type="text" placeholder={product.stock} name="stock" />
          <label>Color</label>
          <input type="text" placeholder={product.color} name="color" />
          <label>Size</label>
          <input type="text" placeholder={product.size} name="size" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen" >Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            id="desc"
            cols="30"
            rows="10"
            placeholder={product.desc}
            name="desc"
          ></textarea>
          <input type="hidden" value={product.id} name="id" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
