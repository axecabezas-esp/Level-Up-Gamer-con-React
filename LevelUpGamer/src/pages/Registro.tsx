import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { api } from "../api/client";

const comunas: { [key: string]: string } = {
    "PA": "Puente Alto",
    "LF": "La Florida",
    "LP": "La Pintana",
    "ST": "Santiago"
};
const soloLetrasEspacios = (nombre: string) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre);
const isDuocEmail = (correo: string) => /^[A-Za-z0-9-_.]+@duocuc.cl$/.test(correo);
const isProfesorduocEmail = (correo: string) => /^[A-Za-z0-9-_.]+@profesor.duoc.cl$/.test(correo);
const isUserEmail = (correo: string) => /^[A-Za-z0-9-_.]+@gmail.com$/.test(correo);
const strongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,10}$/.test(pwd);
const soloNuumerosSinVerificador = (str: string) => /^[0-9].{7}$/.test(str);

function Registro(){
  const navigate = useNavigate();
  const [nombreValido, setNombreValido] = useState<boolean | null>(null);
  const [apellidoValido, setApellidoValido] = useState<boolean | null>(null);
  const [correoValido, setCorreoValido] = useState<boolean | null>(null);
  const [passwordValido, setPasswordValido] = useState<boolean | null>(null);
  const [fechaValida, setFechaValida] = useState<boolean | null>(null);
  const [rutValido, setRutValido] = useState<boolean | null>(null); 

  const hoy = new Date();
  const maxYear = hoy.getFullYear() - 18;
  const month = String(hoy.getMonth() + 1).padStart(2, '0');
  const day = String(hoy.getDate()).padStart(2, '0');
  const fechaMaxima = `${maxYear}-${month}-${day}`;

  const [form, setForm] = useState({
    rut: "", 
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    comuna: "", 
    fechaNacimiento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, id } = e.target;
    
    setForm({ ...form, [name]: value });

    if (id === "rut") {
        if (soloNuumerosSinVerificador(value.trim())) {
            setRutValido(true); // is-valid
        } else {
            setRutValido(false); // is-invalid
        }
        if (value.trim().length === 0) setRutValido(null);
    }

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
      if ((isUserEmail(value.trim()) || isDuocEmail(value.trim()) || isProfesorduocEmail(value.trim())) && value.trim().length <= 50) {
          setCorreoValido(true);
      } else {
          setCorreoValido(false);
      }
      if (value.trim().length === 0) setCorreoValido(null);
    }

    if (id === "passwordlog") {
      if (strongPassword(value.trim())) {
          setPasswordValido(true);
      } else {
          setPasswordValido(false);
      }
      if (value.trim().length === 0) setPasswordValido(null);
    }

    if (id === "fecha") {
        if (!value) {
            setFechaValida(null);
            return;
        }
        if (value <= fechaMaxima) {
            setFechaValida(true);
        } else {
            setFechaValida(false);
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
            
            <div className="mb-3">
                <label htmlFor="rut" className="form-label">Rut (Sin dígito verificador)</label>
                <input 
                    type="text"
                    name="rut"
                    id="rut"
                    className={`form-control bg-black text-white border-secondary p-2 
                        ${rutValido === true ? 'is-valid' : ''}
                        ${rutValido === false ? 'is-invalid' : ''}`
                    } 
                    onChange={handleChange}
                    required 
                    placeholder="Ej: 12345678"
                />
                {rutValido === false && (
                    <div className="invalid-feedback d-block">
                        El RUT debe tener 8 dígitos numéricos (sin puntos,sin guion ni DV).
                    </div>
                )}
            </div>

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
            </div>

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
                        Mín. 8 caracteres, mayúscula, minúscula, número y símbolo.
                    </div>
                )}
            </div>

            <div className="mb-3">
                <label htmlFor="comuna" className="form-label">Comuna</label>
                
                <select 
                    name="comuna"
                    id="comuna"
                    className="form-select bg-black text-white border-secondary p-2"
                    value={form.comuna}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione una comuna...</option>
                    {Object.entries(comunas).map(([codigo, nombre]) => (
                        <option key={codigo} value={codigo}>
                            {nombre}
                        </option>
                    ))}
                </select>
            </div>

            {/* === FECHA === */}
            <div className="mb-3">
              <label htmlFor="fecha" className="form-label">Fecha de nacimiento</label>
              <input 
                    type="date" 
                    name="fechaNacimiento" 
                    id="fecha" 
                    max={fechaMaxima} 
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