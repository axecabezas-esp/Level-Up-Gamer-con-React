import type { Product } from "../interfaces/product";
import { api } from "./client";

export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get<Product[]>("/productos");
  return res.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/productos/${id}`);
};

export const addProduct = async (usuario: Product): Promise<Product> => {
  const res = await api.post<Product>("/productos", usuario); 
  return res.data;
};