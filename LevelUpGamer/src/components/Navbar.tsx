import { Link, NavLink } from "react-router-dom"
import { useCar } from "../contexts/CartContext";

export const Navbar = () => {

  const {items} = useCar();
  console.log('Items en Navbar:', items);
  const totalItems = items.reduce(
    (acumulador, producto) => acumulador + producto.qty, 0
  );


  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top shadow">
            <div className="container">
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
            <li className="nav-item"><a className="nav-link" href="#blog">Noticias</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            <li><NavLink to="/products" className="nav-link">
                  Productos
                </NavLink></li>
            <li>
            <NavLink to="/Login" className="nav-link">
                  Iniciar sesión
                </NavLink>
            </li>
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
        </ul>
        </div>
        </div>
    </nav>

    </>
  )
}
