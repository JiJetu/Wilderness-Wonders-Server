import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  ratting: { type: Number, required: true },
  images: { type: String, required: true },
});

export const Product = model<TProduct>("Product", productSchema);
