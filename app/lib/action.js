import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  "use server";

  const { username, email, password, img, isAdmin, isActive, phone, address } =
    Object.fromEntries(formData);

  try {
    await connectToDb();
    const newUser = new User({
      username,
      email,
      password,
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

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users')
};
