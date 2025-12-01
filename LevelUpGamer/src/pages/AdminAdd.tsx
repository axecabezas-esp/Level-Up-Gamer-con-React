import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { addUser } from "../api/users";
import { api } from "../api/client";

function AdminAdd(){
    const navigate = useNavigate();
  const [form, setForm] = useState({
    id: 0,
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    fechaNacimiento: "",
    tipoUsuario: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        await addUser(form)
      alert("Registro exitoso!");
      navigate("/"); // redirige al home
    } catch (error) {
      alert("Error al registrar usuario");
      console.error("Error al agregar",error)
    }
  };

  return (
    // Contenedor principal con fondo oscuro transparente
    <>
    <div className="container-fluid bg-black-transparent min-vh-100 text-white">
      <div className="row flex-nowrap">

        <Sidebar />

        {/* === CONTENIDO PRINCIPAL DEL FORMULARIO === */}
        <div className="col py-4 container-md">

            {/* Título Principal */}
            <h1 className="h2 orbitron text-verde mb-4 pb-2 border-bottom border-secondary">
                NUEVO USUARIO
            </h1>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    {/* Tarjeta del Formulario */}
                    <div className="card-2 bg-dark border-secondary shadow-lg">
                        {/* Encabezado gris similar a la imagen de referencia */}
                        <div className="card-header bg-secondary bg-opacity-25 text-white orbitron small py-3">
                            Registro de usuario
                        </div>
                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>
                                {/* NOMBRE COMPLETO */}
                                <div className="mb-4">
                                    <label htmlFor="nombre" className="form-label text-info small orbitron">NOMBRE </label>
                                    <input type="text" name="nombre" className="form-control bg-black text-white border-secondary p-2" id="nombre" placeholder="Ingrese nombre completo" onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="nombre" className="form-label text-info small orbitron">APELLIDO</label>
                                    <input type="text" name="apellido" className="form-control bg-black text-white border-secondary p-2" id="apellido" placeholder="Ingrese nombre completo" onChange={handleChange}/>
                                </div>

                                {/* CORREO */}
                                <div className="mb-4">
                                    <label htmlFor="correo" className="form-label text-info small orbitron">CORREO ELECTRÓNICO</label>
                                    <input type="email" name="correo" className="form-control bg-black text-white border-secondary p-2" id="correo" placeholder="nombre@ejemplo.com" onChange={handleChange}/>
                                </div>

                                {/* CONTRASEÑA */}
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label text-info small orbitron">CONTRASEÑA</label>
                                    <input type="password" name="password" className="form-control bg-black text-white border-secondary p-2" id="password" placeholder="********" onChange={handleChange}/>
                                </div>

                                {/* TELÉFONO (Opcional) */}
                                <div className="mb-4">
                                    <label htmlFor="telefono" className="form-label text-info small orbitron" >TELÉFONO <span className="text-secondary">(opcional)</span></label>
                                    <input type="tel" className="form-control bg-black text-white border-secondary p-2" id="telefono" placeholder="+56 9..." onChange={handleChange}/>
                                </div>

                                {/* Selectores de Región y Comuna (lado a lado en pantallas medianas) */}
                                <div className="row mb-5">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                         <label htmlFor="region" className="form-label text-info small orbitron">REGIÓN</label>
                                         <select className="form-select bg-black text-white border-secondary p-2" id="region">
                                            <option selected>Seleccione su región...</option>
                                            <option value="1">Región Metropolitana</option>
                                            <option value="2">Región de Valparaíso</option>
                                            <option value="3">Región del Biobío</option>
                                         </select>
                                    </div>
                                    <div className="col-md-6">
                                         <label htmlFor="comuna" className="form-label text-info small orbitron">COMUNA</label>
                                         <select className="form-select bg-black text-white border-secondary p-2" id="comuna">
                                            <option selected>Seleccione su comuna...</option>
                                            <option value="1">Santiago</option>
                                            <option value="2">Puente Alto</option>
                                            <option value="3">Providencia</option>
                                         </select>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="nombre" className="form-label text-info small orbitron">Tipo de Usuario</label>
                                    <input type="text" name="tipoUsuario" className="form-control bg-black text-white border-secondary p-2" id="tipoUsuario" placeholder="Ingrese el tipo de usuario" onChange={handleChange}/>
                                </div>

                                {/* Botón de Registrar centrado */}
                                <div className="d-grid gap-2 col-md-6 mx-auto">
                                    {/* Botón con estilo neón verde */}
                                    <button type="submit" className="btn btn-outline-success text-verde border-verde orbitron fw-bold py-2 fs-5 text-shadow">
                                        REGISTRAR
                                    </button>
                                </div>

                            </form>
                        </div> {/* Fin Card Body */}
                    </div> {/* Fin Card */}
                </div>
            </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default AdminAdd;