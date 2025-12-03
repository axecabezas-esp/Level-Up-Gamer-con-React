import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { addUser } from "../api/users";
import { Navbar } from "../components/Navbar";

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


function AdminAddUser(){
    const navigate = useNavigate();

    const [rutValido, setRutValido] = useState<boolean | null>(null);
    const [nombreValido, setNombreValido] = useState<boolean | null>(null);
    const [apellidoValido, setApellidoValido] = useState<boolean | null>(null);
    const [correoValido, setCorreoValido] = useState<boolean | null>(null);
    const [passwordValido, setPasswordValido] = useState<boolean | null>(null);
    const [fechaValida, setFechaValida] = useState<boolean | null>(null);

    const hoy = new Date();
    const maxYear = hoy.getFullYear() - 18;
    const month = String(hoy.getMonth() + 1).padStart(2, '0');
    const day = String(hoy.getDate()).padStart(2, '0');
    const fechaMaxima = `${maxYear}-${month}-${day}`;

    const [form, setForm] = useState({
        id: 0,
        rut: 0,
        nombre: "",
        apellido: "",
        correo: "",
        password: "",
        comuna: "",
        fechaNacimiento: "",
        tipoUsuario: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        setForm({ ...form, [name]: value });

        if (name === "rut") {
            if (soloNuumerosSinVerificador(value.trim())) setRutValido(true);
            else setRutValido(false);
            if (value.trim().length === 0) setRutValido(null);
        }

        if (name === "nombre") {
            if (soloLetrasEspacios(value.trim()) && value.length <= 50) setNombreValido(true);
            else setNombreValido(false);
            if (value.trim().length === 0) setNombreValido(null);
        }

        if (name === "apellido") {
            if (soloLetrasEspacios(value.trim()) && value.length <= 50) setApellidoValido(true);
            else setApellidoValido(false);
            if (value.trim().length === 0) setApellidoValido(null);
        }

        if (name === "correo") {
            if (isUserEmail(value) || isDuocEmail(value) || isProfesorduocEmail(value)) setCorreoValido(true);
            else setCorreoValido(false);
            if (value.trim().length === 0) setCorreoValido(null);
        }

        if (name === "password") {
            if (strongPassword(value)) setPasswordValido(true);
            else setPasswordValido(false);
            if (value.trim().length === 0) setPasswordValido(null);
        }

        if (name === "fechaNacimiento") {
            if (!value) {
                setFechaValida(null);
            } else if (value <= fechaMaxima) {
                setFechaValida(true);
            } else {
                setFechaValida(false);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (rutValido === false || nombreValido === false || correoValido === false || passwordValido === false) {
            alert("Por favor corrija los errores en el formulario antes de enviar.");
            return;
        }

        try {
            await addUser(form);
            alert("Usuario registrado exitosamente!");
            navigate("/adminUser"); 
        } catch (error) {
            console.error(error);
            alert("Error al registrar. Verifique que el correo no esté repetido.");
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-black-transparent text-white">
            
            <div className="sticky-top" style={{ zIndex: 1020 }}>
                <Navbar />
            </div>

            <div className="container-fluid flex-grow-1">
                <div className="row flex-nowrap h-100">
                    
                    <Sidebar />
                    
                    <div className="col py-4 container">
                        
                        <h1 className="h2 orbitron text-verde mb-4 pb-2 border-bottom border-secondary">
                            NUEVO USUARIO
                        </h1>

                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card-2 bg-dark border-secondary shadow-lg">
                                    <div className="card-header bg-secondary bg-opacity-25 text-white text-center orbitron small py-3">
                                        Registro de usuario
                                    </div>
                                    <div className="card-body p-4">
                                        
                                        <form onSubmit={handleSubmit} className="needs-validation">
                                        
                                        <div className="mb-4">
                                            <label htmlFor="rut" className="form-label text-info small orbitron">RUT (Sin DV)</label>
                                            <input 
                                                type="text" name="rut" id="rut"
                                                className={`form-control bg-black text-white border-secondary p-2 ${rutValido === true ? 'is-valid' : ''} ${rutValido === false ? 'is-invalid' : ''}`}
                                                placeholder="Ej: 12345678" onChange={handleChange} required
                                            />
                                            {rutValido === false && <div className="invalid-feedback">Debe ser numérico, 8 dígitos (ej: 12345678).</div>}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="nombre" className="form-label text-info small orbitron">NOMBRE</label>
                                            <input 
                                                type="text" name="nombre" id="nombre"
                                                className={`form-control bg-black text-white border-secondary p-2 ${nombreValido === true ? 'is-valid' : ''} ${nombreValido === false ? 'is-invalid' : ''}`}
                                                placeholder="Ingrese nombre completo" onChange={handleChange} required
                                            />
                                            {nombreValido === false && <div className="invalid-feedback">Solo letras y espacios, maximo 50 caracteres.</div>}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="apellido" className="form-label text-info small orbitron">APELLIDO</label>
                                            <input 
                                                type="text" name="apellido" id="apellido"
                                                className={`form-control bg-black text-white border-secondary p-2 ${apellidoValido === true ? 'is-valid' : ''} ${apellidoValido === false ? 'is-invalid' : ''}`}
                                                placeholder="Ingrese apellidos" onChange={handleChange} required
                                            />
                                            {apellidoValido === false && <div className="invalid-feedback">Solo letras y espacios, maximo 50 caracteres.</div>}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="correo" className="form-label text-info small orbitron">CORREO ELECTRÓNICO</label>
                                            <input 
                                                type="email" name="correo" id="correo"
                                                className={`form-control bg-black text-white border-secondary p-2 ${correoValido === true ? 'is-valid' : ''} ${correoValido === false ? 'is-invalid' : ''}`}
                                                placeholder="nombre@duocuc.cl" onChange={handleChange} required
                                            />
                                            {correoValido === false && <div className="invalid-feedback">Debe ser @gmail.com, @duocuc.cl o @profesor.duoc.cl</div>}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="password" className="form-label text-info small orbitron">CONTRASEÑA</label>
                                            <input 
                                                type="password" name="password" id="password"
                                                className={`form-control bg-black text-white border-secondary p-2 ${passwordValido === true ? 'is-valid' : ''} ${passwordValido === false ? 'is-invalid' : ''}`}
                                                placeholder="********" onChange={handleChange} required
                                            />
                                            {passwordValido === false && <div className="invalid-feedback">8-10 caracteres, mayúscula, minúscula, número y símbolo.</div>}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="fechaNacimiento" className="form-label text-info small orbitron">FECHA NACIMIENTO</label>
                                            <input 
                                                type="date" name="fechaNacimiento" id="fechaNacimiento"
                                                max={fechaMaxima}
                                                className={`form-control bg-black text-white border-secondary p-2 ${fechaValida === true ? 'is-valid' : ''} ${fechaValida === false ? 'is-invalid' : ''}`}
                                                onChange={handleChange} required
                                            />
                                            {fechaValida === false && <div className="invalid-feedback">Debe ser mayor de 18 años.</div>}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="comuna" className="form-label text-info small orbitron">COMUNA</label>
                                            <select 
                                                name="comuna" id="comuna" 
                                                className="form-select bg-black text-white border-secondary p-2"
                                                onChange={handleChange} required
                                                value={form.comuna}
                                            >
                                                <option value="">Seleccione su comuna...</option>
                                                {Object.entries(comunas).map(([codigo, nombre]) => (
                                                    <option key={codigo} value={codigo}>
                                                        {nombre}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="tipoUsuario" className="form-label text-info small orbitron">Tipo de Usuario</label>
                                            <select name="tipoUsuario" id="tipoUsuario" className="form-select bg-black text-white border-secondary p-2" onChange={handleChange}>
                                                <option value="Usuario">Usuario</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        </div>

                                        <div className="d-grid gap-2 col-md-6 mx-auto">
                                            <button type="submit" className="btn btn-outline-success text-verde border-verde orbitron fw-bold py-2 fs-5 text-shadow">
                                                REGISTRAR
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

export default AdminAddUser;