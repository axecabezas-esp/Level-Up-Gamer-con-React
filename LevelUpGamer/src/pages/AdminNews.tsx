import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { deleteNews, getNews } from "../api/News";
import type { News } from "../interfaces/News";

export const AdminNews = () => {
  const [noticias, setNoticias] = useState<News[]>([]);

  useEffect(() => {
    getNews().then(setNoticias).catch(console.error);
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("¿Borrar esta noticia permanentemente?")) {
      try {
        await deleteNews(id);
        setNoticias(noticias.filter(n => n.id !== id));
      } catch (error) {
        alert("Error al eliminar");
      }
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-black-transparent text-white">
      <div className="sticky-top" style={{ zIndex: 1020 }}><Navbar /></div>
      
      <div className="container-fluid flex-grow-1 p-0 d-flex flex-column">
        <div className="row flex-nowrap flex-grow-1 g-0">
          <Sidebar />
          <div className="col py-4 container">
            
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom border-secondary pb-2">
                <h1 className="h2 orbitron text-verde">Gestión de Noticias</h1>
                <Link to="/adminAddNews" className="btn btn-sm btn-outline-success text-verde border-verde fw-bold">
                    + NUEVA NOTICIA
                </Link>
            </div>

            <div className="card-2 bg-dark border-secondary shadow">
                <div className="card-body p-0">
                    <div className="table-responsive rounded">
                        <table className="table table-dark table-striped table-hover mb-0 align-middle">
                            <thead className="bg-secondary bg-opacity-25 text-verde orbitron small">
                                <tr>
                                    <th className="ps-4 py-3">Imagen</th>
                                    <th className="py-3 text-secondary">Título</th>
                                    <th className="py-3 text-info">Descripcion</th>
                                    <th className="text-center py-3">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {noticias.map((noticia) => (
                                    <tr key={noticia.id}>
                                        <td className="ps-4">
                                            <img src={noticia.imagen} alt="miniatura" style={{width: '60px', height:'40px', objectFit:'cover'}} className="rounded"/>
                                        </td>
                                        <td className="fw-bold text-secondary">{noticia.titulo}</td>
                                        <td className="text-info">{noticia.descripcion || "N/A"}</td>
                                        <td className="text-center">
                                            <Link to={`/adminUpdateNews/${noticia.id}`} className="btn btn-sm btn-outline-primary border-0">✏️</Link>
                                            <button onClick={() => handleDelete(noticia.id)} className="btn btn-sm btn-outline-danger border-0 ms-2">🗑️</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};