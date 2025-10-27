import { z } from "zod";

export const brands = ["BMW", "Mercedes-Benz", "Audi", "Lexus"];

export const luxuryCarSchema = z.object({
  brand: z.enum(brands, { message: "Please select a valid brand" }),
  model: z.string().min(1, "Model is required"),
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number({ invalid_type_error: "Price must be a number" }),
  image: z.string().min(1, "Image is required"),
});
