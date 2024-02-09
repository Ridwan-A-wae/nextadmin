import { Product, User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (q, page) => {

  const regex = new RegExp(q, 'i')

  const ITEM_PER_PAGE = 2

  try {
    await connectToDb();
    const count = await User.find({username:{$regex: regex}}).count()
    const users = await User.find({username:{$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (parseInt(page) - 1))
    return {count, users};
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchProducts = async() => {

  try {
    await connectToDb();
    const products = await Product.find()
    return products;
  }catch(error) {
    throw new Error('Failed to fetch products!')
  }
}