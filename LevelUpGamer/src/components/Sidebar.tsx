import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark border-end border-secondary">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
                        <li className="nav-item w-100">
                        <NavLink to="/adminUser" className="nav-link text-white">
                            Usuarios
                        </NavLink>
                        </li>
                        <li className="nav-item w-100">
                        <NavLink to="/adminAddUser" className="nav-link text-white">
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
                        <li className="nav-item w-100">
                        <NavLink to="/adminNews" className="nav-link text-white">
                            Noticias
                        </NavLink>
                        </li>
                        <li className="nav-item w-100">
                        <NavLink to="/adminAddNews" className="nav-link text-white">
                            Añadir Noticia
                        </NavLink>
                        </li>

                </ul>
            </div>
        </div>
    </>
  )
}
