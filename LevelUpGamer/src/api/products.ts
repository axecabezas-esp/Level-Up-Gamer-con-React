import type { Product } from "../interfaces/product";
import { api } from "./client";

export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get<Product[]>("/productos");
  return res.data;
};