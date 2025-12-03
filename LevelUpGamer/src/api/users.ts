import type { User } from "../interfaces/User";
import { api } from "./client";

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>("/usuarios");
  return res.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await api.delete(`/usuarios/${id}`);
};

export const addUser = async (usuario: User): Promise<User> => {
  const res = await api.post<User>("/usuarios", usuario); 
  return res.data;
};

export const getUserById = async (id: string | undefined): Promise<any> => {
  if (!id) throw new Error("ID no válido");
  const res = await api.get(`/usuarios/${id}`); // Ajusta la ruta si tu backend es distinto
  return res.data;
};

export const updateUser = async (id: string | undefined, usuario: any): Promise<User> => {
  const res = await api.put(`/usuarios/${id}`,usuario);
  return res.data;
};