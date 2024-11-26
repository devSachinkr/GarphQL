import mongoose, { Schema } from "mongoose";
interface IUser extends Document {
  _id: string;
  photo: string;
  role: "Admin" | "User";
  name: string;
  email?: boolean;
  gender: "Male" | "Female" | "Other";
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
  age: number;
}
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: [true, "Invalid input credentials"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    age: {
      type: Number,
      required: [true, "Please enter age"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
