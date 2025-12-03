import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // useParams sirve para leer el ID de la URL
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { getUserById, updateUser } from "../api/users"; // Importa tus funciones

function AdminUpdateUser() {
    const navigate = useNavigate();
    const { id } = useParams(); // Capturamos el ID de la URL (ej: /admin/update/5)

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        password: "", // Ojo: Normalmente no se actualiza la password aquí a menos que el usuario escriba una nueva
        fechaNacimiento: "",
        tipoUsuario: ""
    });

    // 1. Al cargar la página, traemos los datos del usuario
    useEffect(() => {
        const loadUser = async () => {
            try {
                const data = await getUserById(id);
                setForm(data); // Rellenamos el formulario con lo que viene de la BD
            } catch (error) {
                console.error("Error al cargar usuario", error);
                alert("No se pudo encontrar el usuario");
                navigate("/adminUser");
            }
        };
        loadUser();
    }, [id, navigate]);

    // 2. Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 3. Enviar actualización
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateUser(id, form);
            alert("Usuario actualizado correctamente!");
            navigate("/adminUser"); // Volver a la lista
        } catch (error) {
            console.error("Error al actualizar", error);
            alert("Error al actualizar el usuario.");
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-black-transparent text-white">
            
            {/* Navbar Arriba */}
            <div className="sticky-top" style={{ zIndex: 1020 }}>
                <Navbar />
            </div>

            <div className="container-fluid flex-grow-1 p-0">
                <div className="row flex-nowrap h-100 g-0">
                    
                    {/* Sidebar Izquierda */}
                    <Sidebar />

                    {/* Contenido Principal */}
                    <div className="col py-4 container">

                        <h1 className="h2 orbitron text-verde mb-4 pb-2 border-bottom border-secondary">
                            EDITAR USUARIO
                        </h1>

                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card-2 bg-dark border-secondary shadow-lg">
                                    <div className="card-header bg-secondary bg-opacity-25 text-white text-center orbitron small py-3">
                                        Actualizar datos del usuario #{id}
                                    </div>
                                    <div className="card-body p-4">

                                        <form onSubmit={handleSubmit}>
                                            
                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">NOMBRE</label>
                                                <input 
                                                    type="text" name="nombre" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    value={form.nombre} onChange={handleChange} required 
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">APELLIDO</label>
                                                <input 
                                                    type="text" name="apellido" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    value={form.apellido} onChange={handleChange} required 
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">CORREO</label>
                                                <input 
                                                    type="email" name="correo" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    value={form.correo} onChange={handleChange} required 
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">CONTRASEÑA</label>
                                                <input 
                                                    type="password" name="password" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    value={form.password} onChange={handleChange} required 
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">FECHA DE NACIMIENTO</label>
                                                <input 
                                                    type="date" name="fechaNacimiento" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    value={form.fechaNacimiento} onChange={handleChange} required 
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label text-info small orbitron">TIPO DE USUARIO</label>
                                                <input 
                                                    type="text" name="tipoUsuario" 
                                                    className="form-control bg-black text-white border-secondary p-2" 
                                                    value={form.tipoUsuario} onChange={handleChange} required 
                                                />
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

export default AdminUpdateUser;