import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { getProductById, updateProduct } from "../api/products";

function AdminUpdateProduct() {
    const navigate = useNavigate();
    const { id } = useParams(); // Capturamos el ID de la URL

    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "",
        price: 0,
        imageSrc: ""
    });

    // 1. Cargar datos del producto al iniciar
    useEffect(() => {
        const loadProduct = async () => {
            try {
                const data = await getProductById(id);
                setForm(data);
            } catch (error) {
                console.error("Error al cargar producto", error);
                alert("No se pudo encontrar el producto");
                navigate("/admin/products");
            }
        };
        loadProduct();
    }, [id, navigate]);

    // 2. Manejar cambios
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 3. Enviar actualización
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateProduct(id, form);
            alert("Producto actualizado correctamente!");
            navigate("/adminProduct"); // Volver a la lista de productos
        } catch (error) {
            console.error("Error al actualizar", error);
            alert("Error al actualizar el producto.");
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-black-transparent text-white">
            
            <div className="sticky-top" style={{ zIndex: 1020 }}>
                <Navbar />
            </div>

            <div className="container-fluid flex-grow-1 p-0">
                <div className="row flex-nowrap h-100 g-0">
                    
                    <Sidebar />

                    <div className="col py-4 container">

                        <h1 className="h2 orbitron text-verde mb-4 pb-2 border-bottom border-secondary">
                            EDITAR PRODUCTO
                        </h1>

                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card-2 bg-dark border-secondary shadow-lg">
                                    <div className="card-header bg-secondary bg-opacity-25 text-white text-center orbitron small py-3">
                                        Producto
                                    </div>
                                    <div className="card-body p-4">

                                        <form onSubmit={handleSubmit}>
                                            
                                            {/* TITULO */}
                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">NOMBRE DEL PRODUCTO</label>
                                                <input 
                                                    type="text" name="title" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    value={form.title} onChange={handleChange} required 
                                                />
                                            </div>

                                            {/* DESCRIPCION */}
                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">DESCRIPCIÓN</label>
                                                <input 
                                                    type="text" name="description" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    value={form.description} onChange={handleChange} required 
                                                />
                                            </div>

                                            {/* CATEGORIA */}
                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">CATEGORÍA</label>
                                                <input 
                                                    type="text" name="category" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    value={form.category} onChange={handleChange} required 
                                                />
                                            </div>

                                            {/* PRECIO */}
                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">PRECIO</label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-secondary border-secondary text-white">$</span>
                                                    <input 
                                                        type="number" name="price" 
                                                        className="form-control bg-black text-white border-secondary p-2" 
                                                        value={form.price} onChange={handleChange} required 
                                                    />
                                                </div>
                                            </div>

                                            {/* IMAGEN URL */}
                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">URL IMAGEN</label>
                                                <input 
                                                    type="text" name="imageSrc" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    value={form.imageSrc} onChange={handleChange} 
                                                />
                                                {/* Previsualización pequeña */}
                                                {form.imageSrc && (
                                                    <div className="mt-2 text-center">
                                                        <img src={form.imageSrc} alt="Vista previa" style={{height: '100px', objectFit: 'contain'}} 
                                                             onError={(e) => e.currentTarget.style.display = 'none'} />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="d-grid gap-2 col-md-6 mx-auto mt-5">
                                                <button type="submit" className="btn btn-outline-primary text-info border-info orbitron fw-bold py-2 fs-5 text-shadow">
                                                    GUARDAR CAMBIOS
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
}

export default AdminUpdateProduct;