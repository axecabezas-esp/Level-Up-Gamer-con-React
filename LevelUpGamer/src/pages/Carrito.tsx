import { Link } from "react-router-dom";
import { useCar } from "../contexts/CartContext";

export const Carrito = () => {
  const { items, addToCar, removeOne, removeAllItem, clearCart, formatCLP } =
    useCar();

  const totalAmount = items.reduce(
    (acumulador, producto) => acumulador + producto.price * producto.qty,
    0
  );

  // --- 1. MODIFICACIÓN PARA "CARRITO VACÍO" ---
  if (items.length === 0) {
    return (
      <main className="container py-4">
        {/* Envolvemos el mensaje en una "card" oscura 
          para que sea consistente.
        */}
        <div className="card-2 p-3 bg-dark text-light border-secondary-subtle">
          <div className="card-body">
            <h1 className="h3">Carrito</h1>
            {/* Cambiado a text-muted, se ve mejor en fondo oscuro */}
            <p className="text-muted">Tu carrito está vacío.</p>
          </div>
        </div>
      </main>
    );
  }

  // --- 2. MODIFICACIÓN PARA "CARRITO LLENO" ---
  return (
    <>
      <main className="container py-4">
        {/* Aquí está el "cuadrado" principal (card) que
          envuelve TODO el contenido (título, lista y resumen).
        */}
        <div className="card-2 p-3 bg-dark text-light border-secondary-subtle">
          <div className="card-body"> {/* Padding general para la card */}
            
            {/* El header ahora está DENTRO de la card */}
            <header className="d-flex align-items-center justify-content-between mb-3">
              <h1 className="h3">Carrito</h1>
              <button className="btn btn-danger btn-md" onClick={clearCart}>
                Vaciar carrito
              </button>
            </header>

            {/* La sección (lista y resumen) también está DENTRO */}
            <section className="row g-3">
              <div className="col-12 col-lg-8">
                <ul className="list-group">
                  {items.map((it) => {
                    const subtotal = it.price * it.qty;
                    return (
                      <li
                        key={it.id}
                        // La lista ya tenía el estilo oscuro, lo cual es perfecto
                        className="list-group-item bg-dark text-light border-secondary-subtle d-flex align-items-center justify-content-between"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={it.imageSrc}
                            alt={it.title}
                            width={64}
                            height={64}
                            className="object-fit-contain"
                          />
                          <div>
                            <h6 className="mb-1">{it.title}</h6>
                            {/* Cambiado a text-muted para mejor lectura */}
                            <small className="text-muted">
                              {formatCLP(it.price)} c/u
                            </small>
                          </div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => removeOne(it.id)}
                          >
                            -
                          </button>
                          <span className="px-2">{it.qty}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => addToCar(it)}
                          >
                            +
                          </button>
                        </div>

                        <div className="text-end" style={{ minWidth: 120 }}>
                          <div className="fw-bold">{formatCLP(subtotal)}</div>
                          <button
                            className="btn btn-link text-danger p-0 small"
                            onClick={() => removeAllItem(it.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* --- 3. MODIFICACIÓN DEL ASIDE --- */}
              <aside className="col-12 col-lg-4">
                {/* Quitamos el <div className="card-2 ..."> y el 
                  <div className="card-body"> que lo envolvían, 
                  ya que el contenido ahora vive dentro de la card principal.
                */}
                <h5 className="card-title">Resumen</h5>
                <div className="d-flex justify-content-between">
                  <span>Total</span>
                  <span className="fw-bold">{formatCLP(totalAmount)}</span>
                </div>
                <hr />
                <div className="d-grid-2">
                  <button className="btn btn-success m-2">
                    Proceder al pago
                  </button>
                  <button className="btn btn-primary m-2">
                    <Link
                      to={"/products"}
                      className="link-primary text-white link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Seguir comprando
                    </Link>
                  </button>
                </div>
              </aside>
            </section>
            {/* Fin de section.row */}
          </div>
          {/* Fin de card-body principal */}
        </div>
        {/* Fin de card principal */}
      </main>
    </>
  );
};