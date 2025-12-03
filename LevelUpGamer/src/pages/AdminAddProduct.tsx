import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { addProduct } from "../api/products";
import { Navbar } from "../components/Navbar";

function AdminAddProduct(){
    const navigate = useNavigate();
    
    // Estado inicial limpio para un PRODUCTO
    const [form, setForm] = useState({
        id: 0, // Generalmente no se envía el ID al crear, lo genera el backend
        title: "",
        description: "",
        category: "",
        price: 0,
        imageSrc: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addProduct(form);
            alert("Producto registrado exitosamente!");
            navigate("/adminProduct"); // Redirige a la lista de productos (ajusta la ruta si es distinta)
        } catch (error) {
            console.error("Error al agregar producto:", error);
            alert("Error al registrar el producto.");
        }
    };

    return (
        // 1. ESTRUCTURA LAYOUT CORREGIDA (Igual que en AdminAddUser)
        <div className="d-flex flex-column min-vh-100 bg-black-transparent text-white">
            
            {/* Navbar Arriba */}
            <div className="sticky-top" style={{ zIndex: 1020 }}>
                <Navbar />
            </div>

            {/* Contenedor Flex para Sidebar y Contenido */}
            <div className="container-fluid flex-grow-1">
                <div className="row flex-nowrap h-100">
                    
                    {/* Sidebar Izquierda */}
                    <Sidebar />

                    {/* Contenido Principal Derecha */}
                    <div className="col py-4 container">

                        <h1 className="h2 orbitron text-verde mb-4 pb-2 border-bottom border-secondary">
                            NUEVO PRODUCTO
                        </h1>

                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card-2 bg-dark border-secondary shadow-lg">
                                    <div className="card-header bg-secondary bg-opacity-25 text-white text-center orbitron small py-3">
                                        Registro de Producto
                                    </div>
                                    <div className="card-body p-4">

                                        <form onSubmit={handleSubmit}>
                                            
                                            {/* TITULO */}
                                            <div className="mb-4">
                                                <label htmlFor="title" className="form-label text-info small orbitron">NOMBRE DEL PRODUCTO</label>
                                                <input 
                                                    type="text" 
                                                    name="title" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    id="title" 
                                                    placeholder="Ej: PlayStation 5" 
                                                    required
                                                    onChange={handleChange} 
                                                />
                                            </div>

                                            {/* DESCRIPCION */}
                                            <div className="mb-4">
                                                <label htmlFor="description" className="form-label text-info small orbitron">DESCRIPCIÓN</label>
                                                <input 
                                                    type="text" 
                                                    name="description" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    id="description" 
                                                    placeholder="Breve descripción del producto..." 
                                                    required
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {/* CATEGORIA */}
                                            <div className="mb-4">
                                                <label htmlFor="category" className="form-label text-info small orbitron">CATEGORÍA</label>
                                                <input 
                                                    type="text" 
                                                    name="category" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    id="category" 
                                                    placeholder="Ej: Consolas, Periféricos..." 
                                                    required
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {/* PRECIO (Type Number) */}
                                            <div className="mb-4">
                                                <label htmlFor="price" className="form-label text-info small orbitron">PRECIO</label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-secondary border-secondary text-white">$</span>
                                                    <input 
                                                        type="number" 
                                                        name="price" 
                                                        className="form-control bg-black text-white border-secondary p-2" 
                                                        id="price" 
                                                        placeholder="0" 
                                                        min="0"
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            {/* URL IMAGEN */}
                                            <div className="mb-4">
                                                <label htmlFor="imageSrc" className="form-label text-info small orbitron">URL DE IMAGEN <span className="text-secondary small">(Ej: /img/ps5.png)</span></label>
                                                <input 
                                                    type="text" 
                                                    name="imageSrc" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    id="imageSrc" 
                                                    placeholder="/img/nombre-imagen.png" 
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {/* Botón Registrar */}
                                            <div className="d-grid gap-2 col-md-6 mx-auto mt-5">
                                                <button type="submit" className="btn btn-outline-success text-verde border-verde orbitron fw-bold py-2 fs-5 text-shadow">
                                                    AGREGAR PRODUCTO
                                                </button>
                                            </div>

                                        </form>
                                    </div> 
                                </div> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddProduct;