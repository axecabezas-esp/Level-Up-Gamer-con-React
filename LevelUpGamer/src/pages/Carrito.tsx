export const Carrito = () => {
  return (
    <>
    <section className="bg-azul text-light py-5">
    <div className="container bg-dark-transparent p-4 rounded shadow-lg">
      <h2 className="text-center text-verde orbitron text-shadow mb-4">🛒 Tu Carrito de Compras</h2>

      <div className="table-responsive">
        <table className="table table-dark table-hover align-middle text-center">
          <thead>
            <tr className="text-verde">
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="tabla-carrito">
            
          </tbody>
        </table>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
        <h4 id="total" className="text-verde orbitron text-shadow mb-3 mb-md-0">Total: $0</h4>
        <div className="d-flex gap-2">
          <button id="vaciar" className="btn btn-outline-danger">Vaciar Carrito</button>
          <button className="btn btn-outline-success">Finalizar Compra</button>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
