import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { api } from "../api/client";

function Registro(){
    const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    fechaNacimiento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/usuarios", form);
      alert("Registro exitoso!");
      navigate("/"); // redirige al home
    } catch (error) {
      alert("Error al registrar usuario");
    }
  };

    return (
      <>
                <section className="container my-5">
            <div className="card-2 bg-dark text-light shadow-lg rounded-4 p-4 mx-auto" style={{ maxWidth: "600px" }}>
                <h2 className="text-center mb-4" style={{color: "#39FF14;"}}>Crear una cuenta</h2>
                <h6 className="text-center mb-5 text-light"> ¡Advertencia, necesitas ser mayor de 18 años para registrarte!</h6>
                <form id="loginForm" className="needs-validation" onSubmit={handleSubmit}>
                <div id="regAlert" className="alert d-none" role="alert"></div>
                    <form id="formRegistro" noValidate />

                <div className="mb-3">
                    <label htmlFor="nomcomlog" className="form-label">Nombre </label>
                    <input type="text" name="nombre" id="nomcomlog" className="form-control" required onChange={handleChange}/>
                    <div className="invalid-feedback">Sólo letras y espacios, máximo 50 caracteres.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="apellilog" className="form-label">Apellido </label>
                    <input type="text" name="apellido" id="apellilog" className="form-control" required onChange={handleChange}/>
                    <div className="invalid-feedback">Sólo letras y espacios, máximo 50 caracteres.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="correolog" className="form-label">Correo</label>
                    <input type="email" name="correo" id="correolog" className="form-control" required onChange={handleChange}/>
                    <div className="invalid-feedback">Debe ser un correo válido @duocuc.cl y no estar registrado.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordlog" className="form-label">Contraseña</label>
                    <input type="password" name="password" id="passwordlog" className="form-control" minLength={6} required onChange={handleChange}/>
                    <div className="form-text text-info">Mín. 8 y Max. 10 carácteres, con mayúscula, minúscula, número y símbolo.</div>
                    <div className="invalid-feedback">La contraseña no cumple los requisitos.</div>
                </div>


                <div className="mb-3">
                    <label htmlFor="fecha" className="form-label">Fecha de nacimiento</label>
                    <input type="date" name="fechaNacimiento" id="fecha" className="form-control" required onChange={handleChange}/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-success fw-bold rounded-pill px-4">Crear cuenta</button>
                </div>
                <div className="mt-3"> <p>¿Ya tienes una cuenta? <NavLink to="/Login" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sesión inicial</NavLink></p></div>
                
                </form>
            </div>
            </section>
      </>
    )
  }
  
  export default Registro;