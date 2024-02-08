import { User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (q) => {

  // search every single letter
  const regex = new RegExp(q, 'i')

  try {
    await connectToDb();

    const users = await User.find({username:{$regex: regex}});
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
