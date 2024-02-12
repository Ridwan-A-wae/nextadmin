import { Product, User } from "./models";
import { connectToDb } from "./utils";

// fetch Users

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    await connectToDb();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (parseInt(page) - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

//fetch Products

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    await connectToDb();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (parseInt(page) - 1));
    return { products, count };
  } catch (error) {
    throw new Error("Failed to fetch products!");
  }
};

// fetch User

export const fetchUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch a User");
  }
};

// fetch Product
export const fetchProduct = async (id) => {
  try {
    connectToDb();
    const prodcut = await Product.findById(id);
    return prodcut;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch a Product");
  }
};
