import mongoose from "mongoose";
export const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"],
    },
    price: {
        type: Number,
        required: [true, "Please enter price"],
    },
    description: {
        type: String,
        required: [true, "Please enter description"],
    },
    category: {
        type: String,
        required: [true, "Please enter category"],
    },
    stock: {
        type: Number,
        required: [true, "Please enter stock"],
    },
    thumbnail: {
        type: String,
        required: true
    },
});
export const Product = mongoose.model("Product", schema);
