import { QueryOptions } from "mongoose";
import { Product } from "./prodeuct.model";
import { TProduct, TQueryParams } from "./product.interface";

// creating product data into database
const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);

  return result;
};

// getting product all data and search data from database
const getAllProductFromDB = async (query: TQueryParams) => {
  const search = query.search || "";
  const category = query.category || "";
  const minPrice = parseFloat(query.minPrice || "0");
  const maxPrice = parseFloat(query.maxPrice || "2000");
  const sortOrder = query.sortOrder || "asc";

  const filter: Record<string, unknown> = {};
  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }
  if (category) {
    filter.category = category;
  }
  filter.price = { $gte: minPrice, $lte: maxPrice };

  const result = await Product.find(filter).sort({
    price: sortOrder === "asc" ? 1 : -1,
  });

  return result;
};

// get a single product data from database
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);

  return result;
};

// updating product data into database
const updateProductIntoDB = async (
  id: string,
  payload: TProduct,
  condition: QueryOptions
) => {
  const result = await Product.findByIdAndUpdate(id, payload, condition);

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
