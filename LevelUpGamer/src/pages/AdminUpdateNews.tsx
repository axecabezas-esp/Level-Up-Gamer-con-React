import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { getNewsById, updateNews } from "../api/News";

export const AdminUpdateNews = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [form, setForm] = useState({ titulo: "", descripcion: "", imagen: ""});

    useEffect(() => {
        getNewsById(id).then((data: any) => setForm(data)).catch(() => navigate("/adminNews"));
    }, [id, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await updateNews(id, form);
        navigate("/adminNews");
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-black-transparent text-white">
            <div className="sticky-top" style={{ zIndex: 1020 }}><Navbar /></div>
            <div className="container-fluid flex-grow-1 p-0 d-flex flex-column">
                <div className="row flex-nowrap flex-grow-1 g-0">
                    <Sidebar />
                    <div className="col py-4 container">
                        <h1 className="h2 orbitron text-verde mb-4 border-bottom border-secondary pb-2">EDITAR NOTICIA</h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card-2 bg-dark border-secondary shadow-lg p-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="text-info orbitron small">TÍTULO</label>
                                            <input type="text" name="titulo" value={form.titulo} className="form-control bg-black text-white border-secondary" onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-info orbitron small">CONTENIDO</label>
                                            <textarea name="descripcion" value={form.descripcion} rows={5} className="form-control bg-black text-white border-secondary" onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-info orbitron small">URL IMAGEN</label>
                                            <input type="text" name="imagenUrl" value={form.imagen} className="form-control bg-black text-white border-secondary" onChange={handleChange} />
                                        </div>
                                        <button type="submit" className="btn btn-outline-primary text-info border-info w-100 orbitron fw-bold">GUARDAR CAMBIOS</button>
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