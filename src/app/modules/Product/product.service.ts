import { QueryOptions } from "mongoose";
import { Product } from "./prodeuct.model";
import { TProduct } from "./product.interface";

// creating product data into database
const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);

  return result;
};

// getting product all data and search data from database
const getAllProductFromDB = async (
  search: string,
  category: string,
  minPrice: string,
  maxPrice: string,
  sortOrder: "asc" | "desc"
) => {
  const query: Record<string, unknown> = {};
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      // { description: { $regex: search, $options: "i" } },
    ];
  }
  if (category) {
    query.category = category;
  }
  if (minPrice) {
    query.price = { ...(query.price || {}), $gte: Number(minPrice) };
  }
  if (maxPrice) {
    query.price = { ...(query.price || {}), $lte: Number(maxPrice) };
  }

  const sort: any = sortOrder === "desc" ? { price: -1 } : { price: 1 };

  const result = await Product.find(query).sort(sort);

  return result;
};

// get a single product data from database
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });

  return result;
};

// updating product data into database
const updateProductIntoDB = async (
  id: string,
  payload: TProduct,
  condition: QueryOptions
) => {
  const result = await Product.findOneAndUpdate(
    { _id: id },
    payload,
    condition
  );

  return result;
};

// deleting product a data from database
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findOneAndDelete({ _id: id });

  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
