"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

// User add

export const addUser = async (formData) => {
  const { username, email, password, img, isAdmin, isActive, phone, address } =
    Object.fromEntries(formData);

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await connectToDb();
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
      isActive,
      phone,
      address,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed Add a User");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Product add

export const addProduct = async (formData) => {
  const { title, desc, price, stock, img, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const product = await new Product({
      title,
      desc,
      price,
      stock,
      img,
      color,
      size,
    });

    await product.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failled Add a Product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// User delete

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failled Delete a User");
  }

  revalidatePath("/dashboard/products");
};

// Product delete
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Delete a product");
  }
  revalidatePath('/dashboard/products')
};

// User update
export const updateUser = async (formData) => {
  const {
    id,
    username,
    email,
    password,
    img,
    isAdmin,
    isActive,
    phone,
    address,
  } = Object.fromEntries(formData);

  try {
    connectToDb();

    const updateFields = {
      username,
      email,
      password,
      img,
      isAdmin,
      isActive,
      phone,
      address,
    };

    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || undefined) {
        delete updateFields[key];
      }
    });

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed Add a User");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Product update
export const updateProduct = async(formData) => {
  const {id, title, img,  price, stock, color, size, cat, desc} = Object.fromEntries(formData)
  
  try{
    connectToDb()
    const productFields = {
      title,
      img,
      price,
      stock,
      color,
      size,
      cat,
      desc
    }

    Object.keys(productFields).forEach((key) => {
      if(productFields[key] === '' || undefined) {
        delete productFields[key]
      }
    })

    await Product.findByIdAndUpdate(id, productFields)

  }catch(error) {
    console.log(error)
    throw new Error ("Failed to Update Product")
  }
  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}
