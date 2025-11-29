import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { api } from "../api/client";

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    correo: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/usuarios/login", form);

      localStorage.setItem("token", response.data.token);

      const usuario = response.data;
      localStorage.setItem("usuario", JSON.stringify(usuario));

      navigate("/");
    } catch (error) {
      alert("Credenciales incorrectas. contacte al soporte.");
    }
    
  };
  return (
    <>
    <section className="container my-5" >
    <div className="card-2 bg-dark text-light shadow-lg rounded-4 p-4 mx-auto" style={{maxWidth: '600px'}}>
      <h2 className="text-center mb-4" style={{color: '#39FF14'}}>Inicio de Sesion</h2>
      <form id="loginForm" className="needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="correoreg" className="form-label">Correo</label>
          <input type="email" name="correo" id="correolog" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordreg" className="form-label">Contraseña</label>
          <input type="password" name="password" id="passwordlog" className="form-control" minLength={6} required onChange={handleChange} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success fw-bold rounded-pill px-4">Iniciar Sesion</button>
        </div>
        <div className="mt-3"> <p>¿No tienes una cuenta? <NavLink to="/register" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Crea una cuenta</NavLink></p></div>
      </form>
    </div>
  </section>
    </>
  )
}
