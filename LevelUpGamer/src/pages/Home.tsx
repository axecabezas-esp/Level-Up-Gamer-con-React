import { useEffect, useState } from "react";
import type { News } from "../interfaces/News";
import { getNews } from "../api/News";

export const Home = () => {
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    getNews().then(setNews).catch(console.error);
  }, []);
  return (
    <>

  <header className="py-2 text-center bg-dark">
    <div className="container">
      <h1 className="display-4 text-verde orbitron">LEVEL-UP GAMER</h1>
      <p className="lead text-info">Bienvenido al Mundo Gamer 🎮</p>
    </div>
  </header>

  <section className="bg-black-transparent">
    <div id="carusel" className="container py-5">
      <div id="carouselProductos" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img src="img/ps5.png" className="d-block mx-auto img-fluid py-1" alt="PS5"/>
            <p className="mt-3 text-secondary">PlayStation 5 – ¡Gráficos de otra dimensión! ⚡</p>
          </div>
          <div className="carousel-item">
            <img src="img/PC_Gamer_ASUS_ROG_Strix.png" className="d-block mx-auto img-fluid py-1" alt="PC Gamer"/>
            <p className="mt-3 text-secondary">PC Gamer ASUS ROG Strix – Rendimiento extremo 🚀</p>
          </div>
          <div className="carousel-item">
            <img src="img/gamer.png" className="d-block mx-auto img-fluid py-1" alt="Auriculares"/>
            <p className="mt-3 text-secondary">Auriculares HyperX Cloud II – Audio envolvente 🎧</p>
          </div>
          <div className="carousel-item">
            <img src="img/Puente-alto.png" className="d-block mx-auto img-fluid py-1" alt="Auriculares"/>
            <p className="mt-3 text-secondary">Descuento 20% por tener correo instucional Duoc UC</p>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselProductos" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselProductos" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  </section>

  <h2 className="text-center text-verde my-4 text-shadow orbitron">NOTICIAS IMPORTANTES</h2>

  <section id="blog" className="container">
    <div className="row justify-content-center g-4">
      {news.map((n)=>(
        <div className="col-lg-10">
        <div className="d-flex flex-column flex-md-row align-items-center gap-4 bg-dark rounded p-4 shadow noticia-hover">
          <div className="flex-fill">
            <h3 className="text-verde orbitron">{n.titulo}</h3>
            <p className="text-light small">{n.descripcion}</p>
          
          </div>
          <img src={n.imagen} alt="Noticia 1" className="img-fluid w-25 rounded shadow-lg"/>
        </div>
      </div>
      ))}
    </div>
  </section>

  <section id="contacto" className="py-5 bg-dark-transparent text-white mt-5">
    <div className="container">
      <h2 className="text-center mb-4 text-verde">Formulario de Contacto</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card-2 p-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Nombre completo</label>
                <input type="text" id="nombre" name="nombre" className="form-control bg-dark text-white border-0" placeholder="Ingresa tu nombre" required/>
              </div>
              <div className="mb-3">
                <label className="form-label">Correo</label>
                <input type="email" id="correo" name="correo" className="form-control bg-dark text-white border-0" placeholder="ejemplo@correo.com" required/>
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea id="mensaje" name="mensaje" className="form-control bg-dark text-white border-0" placeholder="Escribe tu mensaje aquí..." required></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
