import { Link, NavLink, useNavigate } from "react-router-dom"
import { useCar } from "../contexts/CartContext";
import { getUserRole } from "../util/Auth";

export const Navbar = () => {
  const navigate = useNavigate();
  const role = getUserRole();
  const {items} = useCar();
  const totalItems = items.reduce(
    (acumulador, producto) => acumulador + producto.qty, 0
  );
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");
  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    navigate("/Login"); // Redirige al login al salir
  };

  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top shadow">
            <div className="container-fluid px-4">
            <a className="navbar-brand fw-bold orbitron text-verde" href="#inicio">LEVEL-UP GAMER</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">
            <li>
            <NavLink to="/" className="nav-link">
                  Inicio
                </NavLink>
            </li>
            {usuario ? (
                // SI EL USUARIO ESTÁ LOGUEADO:
                <>
                  <li className="nav-item">
                    <span className="nav-link text-warning">
                      Hola, {usuario.usuario.nombre}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button 
                        className="nav-link btn btn-link" 
                        onClick={cerrarSesion}
                        style={{ textDecoration: 'none' }}
                    >
                      Cerrar Sesión
                    </button>
                  </li>
                </>
              ) : (
                // SI NO HAY USUARIO (Muestra Login y Registro):
                <>
                  <li>
                    <Link to="/Login" className="nav-link">
                      Iniciar sesión
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="nav-link">
                      Registrarse
                    </Link>
                  </li>
                </>
              )}
            <li><NavLink to="/products" className="nav-link">
                  Productos
                </NavLink></li>
            <li className="nav-item " >
            <Link
                className="text-light fs-4 position-relative"
                to="/carrito"
                aria-label="Ver Carrito de Compras"
              >
                <i className="bi bi-cart-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary cart-badge-sm">
                  {totalItems}
                  <span className="visually-hidden">
                    Productos en el carrito
                  </span>
                </span>
              </Link>
            </li>
            {role === "Admin" ? (<li>
                    <Link to="/adminUser" className="nav-link">
                      Panel de Administracion
                    </Link>
                  </li>) : (null)}
        </ul>
        </div>
        </div>
    </nav>

    </>
  )
}
