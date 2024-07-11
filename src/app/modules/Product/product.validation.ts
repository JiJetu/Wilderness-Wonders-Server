import { z } from "zod";

const productValidationSchema = z.object({
  name: z.string(),
  price: z.number().positive(),
  stockQuantity: z.number().int().nonnegative(),
  description: z.string(),
  category: z.string(),
  ratings: z.number().min(0).max(5),
  images: z.array(z.string().url()),
});

export default productValidationSchema;
