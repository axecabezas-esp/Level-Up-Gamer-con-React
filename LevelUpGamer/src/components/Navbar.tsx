export const Navbar = () => {
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
            <li className="nav-item"><a className="nav-link" href="#carusel">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#productos">Productos</a></li>
            <li className="nav-item"><a className="nav-link" href="#blog">Noticias</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            <li className="nav-item"><a className="nav-link" href="login.html">Iniciar Sesion</a></li>
            <li className="nav-item" >
              <a className="nav-link" href="" title="Carrito de compras">🛒</a>
            </li>
        </ul>
        </div>
        </div>
    </nav>

    </>
  )
}
