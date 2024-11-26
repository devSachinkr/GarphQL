import { Product } from "../models/product";

export const createProduct = async () => {
  try {
    await Product.create({
      name: "Laptop",
      price: 10000,
      description: "latest laptop",
      stock: 10,
      category: "Electronics",
    });
    await Product.create({
      name: "Mobile",
      price: 80000,
      description: "latest Mobile",
      stock: 100,
      category: "Electronics",
    });
    await Product.create({
      name: "Car",
      price: 500000,
      description: "latest Car",
      stock: 1,
      category: "Automobile",
    });
    await Product.create({
      name: "Bag",
      price: 1000,
      description: "latest laptop",
      stock: 80,
      category: "Leather",
    });
    await Product.create({
      name: "Perfume",
      price: 5000,
      description: "latest Perfume",
      stock: 1085,
      category: "Beauty",
    });
    await Product.create({
      name: "Doll",
      price: 80000,
      description: "latest Toy",
      stock: 10,
      category: "Toy",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllProduct = async () => {
  const res= await Product.find();
  console.log(res)
  return res;

};


export const getProductById=async(parent:any,{id}:{id:string})=>{
  return await Product.findById(id)
}