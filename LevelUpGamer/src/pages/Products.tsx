import { Link } from "react-router-dom"
import { products } from "../data/products"


export const Products = () => {
  return (
    <>
<section className="bg-azul py-5 ">
    <div className="container">
      <h2 className="text-center text-verde orbitron text-shadow mb-5">🕹️ Nuestros Productos</h2>

      {/* <h3 className="text-center text-info orbitron mb-4">🎮 Consolas</h3>
      <div className="row g-4 justify-content-center mb-5">
        <div className="col-md-4">
            <div className="card p-4 text-center">
                <img src="..\public\img\ps5.png" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
                <h3 className="text-verde my-4">PlayStation</h3>
                <p className="text-secondary">Consola de última generación con SSD ultrarrápido.</p>
                <button className="btn btn-success mt-auto">Ver detalle</button>
              </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\Xbox Series X.jpg" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">Xbox Series X</h3>
            <p className="text-secondary">La consola más potente de Microsoft con 1 TB SSD y 4K nativo.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\Nintendo Switch OLED.jpg" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">Nintendo Switch OLED</h3>
            <p className="text-secondary">Versión con pantalla OLED vibrante y dock mejorado.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
      </div>

      <h3 className="text-center text-info orbitron mb-4">💻 PC Gamer</h3>
      <div className="row g-4 justify-content-center mb-5">
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\PC_Gamer_ASUS_ROG_Strix.png" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">PC Gamer ASUS ROG Strix</h3>
            <p className="text-secondary">Potencia extrema para gaming competitivo y multitarea.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\MSI Trident X.png" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">MSI Trident X</h3>
            <p className="text-secondary">Compacta pero poderosa, con RTX 4070 Ti y refrigeración líquida.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\HP Omen Obelisk.png" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">HP Omen Obelisk</h3>
            <p className="text-secondary">Diseño sobrio y rendimiento de alta gama para eSports.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
      </div>

      <h3 className="text-center text-info orbitron mb-4">🖱️ Periféricos</h3>
      <div className="row g-4 justify-content-center mb-5">
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\mouse gamer logitech.webp" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">Mouse Logitech G502 HERO</h3>
            <p className="text-secondary">Sensor óptico HERO 25K con precisión y ajuste de peso.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\Auriculares HyperX Cloud II.png" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">Auriculares HyperX Cloud II</h3>
            <p className="text-secondary">Audio envolvente 7.1 con micrófono desmontable.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\Controlador Xbox Series X.png" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">Controlador Xbox Series X</h3>
            <p className="text-secondary">Diseño ergonómico con respuesta háptica mejorada.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
      </div>

      <h3 className="text-center text-info orbitron mb-4">⚡ Accesorios</h3>
      <div className="row g-4 justify-content-center mb-5">
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\Mousepad Razer Goliathus Extended.jpg" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">Mousepad Razer Goliathus Extended</h3>
            <p className="text-secondary">Superficie RGB con iluminación personalizable.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\Silla Gamer Secretlab Titan.png" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">Silla Gamer Secretlab Titan</h3>
            <p className="text-secondary">Comodidad premium con soporte lumbar ajustable.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <img src="..\public\img\PoleraLevelUpGamer.png" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <h3 className="text-verde">Polera Gamer "Level-Up"</h3>
            <p className="text-secondary">Personalízala con tu gamer tag o diseño favorito.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
      </div>

      <h3 className="text-center text-info orbitron mb-4">🎲 Juegos de Mesa</h3>
      <div className="row g-4 justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <h3 className="text-verde">Catan</h3>
            <img src="..\public\img\catan.avif" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <p className="text-secondary">Estrategia y comercio para dominar la isla.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 h-100 text-center">
            <h3 className="text-verde">Carcassonne</h3>
            <img src="..\public\img\carcassonne juego de mesa.jpg" className="card-img-top rounded mx-auto d-block" alt="ps5"/>
            <p className="text-secondary">Construye ciudades y caminos medievales con tus amigos.</p>
            <button className="btn btn-success mt-auto">Ver Detalle</button>
          </div>
        </div>
      </div> */}
      <section className="row g-4">
          {products.map((p) => (
            <>
              <div className="col-lg-4 col-md-6 col-12">
                <article
                  key={p.id}
                  className="card h-100 bg-dark text-light border-secondary-subtle"
                >
                  <div className="ratio ratio-16x9">
                    <img
                      src={p.imageSrc}
                      className="card-img-top w-100 h-100 object-fit-contain"
                      alt="Producto"
                    />
                  </div>
                  <div className="card-body">
                    <span className="badge rounded-pill text-bg-secondary mb-2">
                      {p.category}
                    </span>
                    <h3 className="h6 card-title">{p.title}</h3>
                    <p className="card-text small">{p.description}</p>
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <span className="fw-bold">${p.price}</span>
                    <Link
                      className="btn btn-outline-light btn-sm"
                      to={`/products/${p.id}`}
                    >
                      Ver detalle
                    </Link>
                  </div>
                </article>
              </div>
            </>
          ))}
        </section>
    </div>
  </section>
    </>
  )
}
