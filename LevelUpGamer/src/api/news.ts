
import type { News } from "../interfaces/News";
import { api } from "./client";

export const getNews = async (): Promise<News[]> => {
  const res = await api.get<News[]>("/noticias");
  return res.data;
};

export const deleteNews = async (id: number): Promise<void> => {
  await api.delete(`/noticias/${id}`);
};

export const addNews = async (noticia: News): Promise<News> => {
  const res = await api.post<News>("/noticias", noticia); 
  return res.data;
};

export const getNewsById = async (id: string | undefined): Promise<any> => {
  if (!id) throw new Error("ID no válido");
  const res = await api.get(`/noticias/${id}`); // Ajusta la ruta si tu backend es distinto
  return res.data;
};


export const updateNews = async (id: string | undefined, noticia: any): Promise<News> => {
  const res = await api.put(`/noticias/${id}`,noticia);
  return res.data;
};