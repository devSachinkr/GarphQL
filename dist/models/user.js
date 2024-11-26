import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
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
}, { timestamps: true });
export const User = mongoose.model("User", userSchema);
