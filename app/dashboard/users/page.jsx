import React from "react";
import styles from "./user.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/pagination/Pagination";
import { fetchUsers } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/action";

export default async function page({searchParams}) {
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1

  const {count, users} = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for a user . . ."} />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img ? user.img : "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td> {user.email} </td>
              <td> {user.createdAt ? user.createdAt.toString().slice(4,16) :'Feb 01 2022'} </td>
              <td> {user.isAdmin ? "Admin" : "Client"} </td>
              <td> {user.isActive ? "active" : "passive" } </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                 <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                 <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                 </form>
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
