import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark border-end border-secondary">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
                    <div className="mt-3">👥 Usuarios</div>
                        <li className="nav-item w-100">
                        <NavLink to="/adminUser" className="nav-link text-white">
                            Ver Lista
                        </NavLink>
                        </li>
                        <li className="nav-item w-100">
                        <NavLink to="/adminAddUser" className="nav-link text-white">
                            Añadir Nuevo
                        </NavLink>
                        </li>
                        <div className="mt-3">🛍️ Productos</div>
                        <li className="nav-item w-100">
                        <NavLink to="/adminProduct" className="nav-link text-white">
                            Inventario
                        </NavLink>
                        </li>
                        <li className="nav-item w-100">
                        <NavLink to="/adminAddProduct" className="nav-link text-white">
                            Crear Producto
                        </NavLink>
                        </li>
                        <div className="mt-3">📰 Contenido</div>
                        <li className="nav-item w-100">
                        <NavLink to="/adminNews" className="nav-link text-white">
                            Lista de Noticias
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
