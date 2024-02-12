import React from "react";
import styles from "./id.module.css";
import Image from "next/image";
import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/action";

export default  async function page({params}) {

  const {id} = params

  const user = await fetchUser(id)
  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user?.img ? user.img : "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <label>Username</label>
          <input type="text" placeholder={user.username} name="username" />
          <label>Email</label>
          <input type="text" placeholder={user?.email}  name="email"/>
          <label>Image</label>
          <input type="text" placeholder={user.img}  name="img"/>
          <label>Password</label>
          <input type="password" name="password"/>
          <label>Phone</label>
          <input type="text" placeholder={user?.phone} name="phone" />
          <label>Address</label>
          <input type="text" placeholder={user.address}  name="address"/>
          <label>Is Admin?</label>
          <select name="isadmin" id="isadmin">
            <option value={true} selected={user.isAdmin}>Yes</option>
            <option value={false} selected={!user.isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>Yes</option>
            <option value={false} selected={!user.isActive} >No</option>
          </select>
          <input type="hidden" value={user.id} name="id" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
