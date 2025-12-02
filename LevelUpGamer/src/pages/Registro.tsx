import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { api } from "../api/client";

// Validaciones regex
const soloLetrasEspacios = (nombre: string) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre);
const isDuocEmail = (correo: string) => /^[A-Za-z0-9-_.]+@duocuc.cl$/.test(correo);
const isProfesorduocEmail = (correo: string) => /^[A-Za-z0-9-_.]+@profesor.duoc.cl$/.test(correo);
const isUserEmail = (correo: string) => /^[A-Za-z0-9-_.]+@gmail.com$/.test(correo);
const strongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,10}$/.test(pwd);


function Registro(){
  const navigate = useNavigate();
  const [nombreValido, setNombreValido] = useState<boolean | null>(null);
  const [apellidoValido, setApellidoValido] = useState<boolean | null>(null);
  const [correoValido, setCorreoValido] = useState<boolean | null>(null);
  const [passwordValido, setPasswordValido] = useState<boolean | null>(null);
  const [fechaValida, setFechaValida] = useState<boolean | null>(null);
  
  // 2. AQUÍ DEBES CALCULAR LA FECHA (Antes de las funciones)
  const hoy = new Date();
  const maxYear = hoy.getFullYear() - 18;
  const month = String(hoy.getMonth() + 1).padStart(2, '0');
  const day = String(hoy.getDate()).padStart(2, '0');
  
  // Esta es la variable que tu código no encuentra:
  const fechaMaxima = `${maxYear}-${month}-${day}`;

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    fechaNacimiento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, id } = e.target;
    
    // Actualizamos el estado general
    setForm({ ...form, [name]: value });

    // Validación específica para el campo nombre
    if (id === "nombre") {
      if (soloLetrasEspacios(value.trim()) && value.trim().length <= 50 && value.trim().length > 0) {
          setNombreValido(true);
      } else {
          setNombreValido(false);
      }
      if (value.trim().length === 0) setNombreValido(null);
    }

    if (id === "apellilog") {
      if (soloLetrasEspacios(value.trim()) && value.trim().length <= 50 && value.trim().length > 0) {
          setApellidoValido(true);
      } else {
          setApellidoValido(false);
      }
      if (value.trim().length === 0) setApellidoValido(null);
    }

    if (id === "correolog") {
      if (isUserEmail(value.trim()) && value.trim().length <= 50 && value.trim().length > 0 || isDuocEmail(value.trim())|| isProfesorduocEmail(value.trim())) {
          setCorreoValido(true);
      } else {
          setCorreoValido(false);
      }
      if (value.trim().length === 0) setCorreoValido(null);
    }

    if (id === "passwordlog") {
      if (strongPassword(value.trim()) && value.trim().length <= 10 && value.trim().length > 8) {
          setPasswordValido(true);
      } else {
          setPasswordValido(false);
      }
      if (value.trim().length === 0) setPasswordValido(null);
    }

    if (id === "fechaNacimiento") {
        if (!value) {
            setFechaValida(null);
            return;
        }
        
        // Comparamos strings (YYYY-MM-DD) directamente, funciona perfecto para fechas
        if (value <= fechaMaxima) {
            setFechaValida(true); // Es mayor de 18
        } else {
            setFechaValida(false); // Es menor de 18
        }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/usuarios", form);
      alert("Registro exitoso!");
      navigate("/");
    } catch (error) {
      alert("Error al registrar usuario");
      console.error(error);
    }
  };

  return (
      <section className="container my-5">
        <div className="card-2 bg-dark text-light shadow-lg rounded-4 p-4 mx-auto" style={{ maxWidth: "600px" }}>
            <h2 className="text-center mb-4" style={{color: "#39FF14"}}>Crear una cuenta</h2>
            <h6 className="text-center mb-5 text-light"> ¡Advertencia, necesitas ser mayor de 18 años para registrarte!</h6>
            
            <form id="loginForm" className="needs-validation" onSubmit={handleSubmit}>
            
            {/* === NOMBRE === */}
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                    type="text"
                    name="nombre"
                    id="nombre"
                    className={`form-control bg-black text-white border-secondary p-2 
                        ${nombreValido === true ? 'is-valid' : ''}
                        ${nombreValido === false ? 'is-invalid' : ''}`
                    } 
                    value={form.nombre}
                    onChange={handleChange}
                    required 
                />
                {nombreValido === false && (
                    <div className="invalid-feedback d-block">
                        Sólo se permiten letras y máximo 50 caracteres.
                    </div>
                )}
            </div>

            {/* === APELLIDO === */}
            <div className="mb-3">
                <label htmlFor="apellidolog" className="form-label">Apellido</label>
                <input 
                    type="text"
                    name="apellido"
                    id="apellilog" 
                    className={`form-control bg-black text-white border-secondary p-2 
                        ${apellidoValido === true ? 'is-valid' : ''} 
                        ${apellidoValido === false ? 'is-invalid' : ''}`
                    } 
                    value={form.apellido}
                    onChange={handleChange}
                    required 
                />
                {apellidoValido === false && (
                    <div className="invalid-feedback d-block">
                        Sólo se permiten letras y máximo 50 caracteres.
                    </div>
                )}
            </div>

            {/* === CORREO === */}
            <div className="mb-3">
                <label htmlFor="correolog" className="form-label">Correo</label>
                <input 
                    type="email"
                    name="correo"
                    id="correolog" 
                    className={`form-control bg-black text-white border-secondary p-2 
                        ${correoValido === true ? 'is-valid' : ''} 
                        ${correoValido === false ? 'is-invalid' : ''}`
                    } 
                    value={form.correo}
                    onChange={handleChange}
                    required 
                />
                {correoValido === false && (
                    <div className="invalid-feedback d-block">
                        Falta la terminación @gmail.com, @duocuc.cl, @profesor.duoc.cl
                    </div>
                )}
            </div>

            {/* === PASSWORD === */}
            <div className="mb-3">
                <label htmlFor="passwordlog" className="form-label">Constraseña</label>
                <input 
                    type="password"
                    name="password" 
                    id="passwordlog" 
                    className={`form-control bg-black text-white border-secondary p-2 
                        ${passwordValido === true ? 'is-valid' : ''} 
                        ${passwordValido === false ? 'is-invalid' : ''}`
                    } 
                    value={form.password}
                    onChange={handleChange}
                    required 
                />
                {passwordValido === false && (
                    <div className="invalid-feedback d-block">
                        Mín. 8 y Max. 10 carácteres, con mayúscula, minúscula, número y símbolo especial
                    </div>
                )}
            </div>

            {/* === FECHA === */}
            <div className="mb-3">
              <label htmlFor="fecha" className="form-label">Fecha de nacimiento</label>
              <input 
                    type="date" 
                    name="fechaNacimiento" 
                    id="fecha" 
                    // Usamos la variable calculada para bloquear el calendario
                    max={fechaMaxima} 
        
                     // Clases para borde verde/rojo
                    className={`form-control bg-black text-white border-secondary p-2 
                    ${fechaValida === true ? 'is-valid' : ''} 
                    ${fechaValida === false ? 'is-invalid' : ''}`
                    }
                    value={form.fechaNacimiento} 
                    required 
                    onChange={handleChange}
                    />
                      {fechaValida === false && (
                      <div className="invalid-feedback d-block">
                          Debes tener al menos 18 años para registrarte.
                      </div>
                  )}
              </div>

            <div className="text-center">
                <button type="submit" className="btn btn-success fw-bold rounded-pill px-4">Crear cuenta</button>
            </div>
            
            <div className="mt-3"> 
                <p>¿Ya tienes una cuenta? <NavLink to="/Login" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Inicio de sesión</NavLink></p>
            </div>
            
            </form>
        </div>
      </section>
  )
}
  
export default Registro;