import React from "react";
import styles from "./products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/pagination/Pagination";
import { fetchProducts } from "@/app/lib/data";

export default async function page({searchParams}) {
  
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  console.log(page)
  const {products, count} = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a product . . ."} />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>

              <td> {product.desc} </td>
              <td>${product.price} </td>
              <td>13.01.2023</td>
              <td> {product.stock} </td>

              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/test`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  );
}
