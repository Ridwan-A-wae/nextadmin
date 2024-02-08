import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  if (connection.isConnected) return;
  try {
    const db = await mongoose.connect(process.env.DATABASE);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
