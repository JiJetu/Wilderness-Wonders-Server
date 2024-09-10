export type TProduct = {
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: string;
  ratting: number;
  images: string;
};
export type TQueryParams = {
  search?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  sortOrder?: string;
};
