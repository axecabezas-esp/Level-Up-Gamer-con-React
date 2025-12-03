import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { addNews } from "../api/News";

export const AdminAddNews = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ id:0, titulo: "", descripcion: "", imagen: "" });

    const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await addNews(form);
            navigate("/adminNews");
        } catch (error) { alert("Error al crear noticia"); }
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-black-transparent text-white">
            <div className="sticky-top" style={{ zIndex: 1020 }}><Navbar /></div>
            <div className="container-fluid flex-grow-1 p-0 d-flex flex-column">
                <div className="row flex-nowrap flex-grow-1 g-0">
                    <Sidebar />
                    <div className="col py-4 container">
                        <h1 className="h2 orbitron text-verde mb-4 border-bottom border-secondary pb-2">PUBLICAR NOTICIA</h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card-2 bg-dark border-secondary shadow-lg p-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="text-info orbitron small">TÍTULO</label>
                                            <input type="text" name="titulo" className="form-control bg-black text-white border-secondary" onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-info orbitron small">CONTENIDO / CUERPO</label>
                                            <textarea name="descripcion" rows={5} className="form-control bg-black text-white border-secondary" onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-info orbitron small">URL IMAGEN</label>
                                            <input type="text" name="imagen" className="form-control bg-black text-white border-secondary" onChange={handleChange} />
                                        </div>
                                        <button type="submit" className="btn btn-outline-success text-verde border-verde w-100 orbitron fw-bold">PUBLICAR</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};