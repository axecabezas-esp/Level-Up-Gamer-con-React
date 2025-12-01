import { NavLink } from "react-router-dom";

const sidebarLinks = [
    { icon: '📊', text: 'Dashboard', active: false },
    { icon: '🛒', text: 'Orders', active: true }, // Activo según la imagen
    { icon: '📦', text: 'Inventory', active: false },
    { icon: '📄', text: 'Reports', active: false },
    { icon: '🧑‍💼', text: 'Employees', active: false },
    { icon: '👥', text: 'Customers', active: false },
];

export const Sidebar = () => {
  return (
    <>
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark border-end border-secondary">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    {/* Usamos tu clase 'orbitron' y 'text-verde' para el logo */}
                    <span className="fs-4 d-none d-sm-inline orbitron text-verde">Company ⚡</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
                        <li className="nav-item w-100">
                        <NavLink to="/adminUser" className="nav-link text-white">
                            Usuarios
                        </NavLink>
                        </li>
                        <li className="nav-item w-100">
                        <NavLink to="/adminAdd" className="nav-link text-white">
                            Añadir Usuario
                        </NavLink>
                        </li>
                        <li className="nav-item w-100">
                        <NavLink to="/adminProduct" className="nav-link text-white">
                            Productos
                        </NavLink>
                        </li>
                        <li className="nav-item w-100">
                        <NavLink to="/adminAddProduct" className="nav-link text-white">
                            Añadir Producto
                        </NavLink>
                        </li>

                </ul>
            </div>
        </div>
    </>
  )
}
