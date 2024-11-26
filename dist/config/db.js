import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
    if (!process.env.DB_URI) {
        throw new Error("DB_URI is not defined");
    }
    try {
        const res = await mongoose.connect(process.env.DB_URI, {
            dbName: "EcommarceApp",
        });
        console.log("Connected to MongoDB " + res.connection.name);
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
