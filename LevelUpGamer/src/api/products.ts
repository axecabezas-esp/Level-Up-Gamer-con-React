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

export const getProductById = async (id: string | undefined): Promise<any> => {
  if (!id) throw new Error("ID no válido");
  const res = await api.get(`/productos/${id}`); // Ajusta la ruta si tu backend es distinto
  return res.data;
};


export const updateProduct = async (id: string | undefined, product: any): Promise<Product> => {
  const res = await api.put(`/productos/${id}`,product);
  return res.data;
};