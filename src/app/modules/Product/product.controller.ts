import { Request, Response } from "express";
import { ProductService } from "./product.service";
import productValidationSchema from "./product.validation";

// creating product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    productData.price = Number(productData.price);
    productData.ratting = Number(productData.ratting);
    productData.stockQuantity = Number(productData.stockQuantity);

    // data validation using zod
    const zodProductParsedData = productValidationSchema.parse(productData);

    const result =
      await ProductService.createProductIntoDB(zodProductParsedData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to create product successfully",
      error,
    });
  }
};

// getting all product at a time
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const results = await ProductService.getAllProductFromDB(req.query);

    // sending success message for getting all product
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to find all product",
      error,
    });
  }
};

// getting a single product by id
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to find a single product",
      error,
    });
  }
};

// updating product by id and update info
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const result = await ProductService.updateProductIntoDB(
      productId,
      updateData,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to updating product",
      error,
    });
  }
};

// delete a product by id
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductService.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to deleting product",
      error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
