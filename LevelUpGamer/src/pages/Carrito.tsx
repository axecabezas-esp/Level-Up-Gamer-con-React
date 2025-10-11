export const Carrito = () => {
  return (
    <>
    <section class="bg-azul text-light py-5">
    <div class="container bg-dark-transparent p-4 rounded shadow-lg">
      <h2 class="text-center text-verde orbitron text-shadow mb-4">🛒 Tu Carrito de Compras</h2>

      <div class="table-responsive">
        <table class="table table-dark table-hover align-middle text-center">
          <thead>
            <tr class="text-verde">
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="tabla-carrito">
            <!-- Productos generados dinámicamente -->
          </tbody>
        </table>
      </div>

      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
        <h4 id="total" class="text-verde orbitron text-shadow mb-3 mb-md-0">Total: $0</h4>
        <div class="d-flex gap-2">
          <button id="vaciar" class="btn btn-outline-danger">Vaciar Carrito</button>
          <button class="btn btn-outline-success">Finalizar Compra</button>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
