import { Link } from "react-router-dom";

export const Carrito = () => {
  return (
    <>
      <main className="container py-5" id="carrito">
        <h1 className="display-5 fw-bold mb-4">
          Registro del Carrito de Compras
        </h1>

        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-dark table-striped align-middle">
                <thead>
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Asesoría de Desarrollo Web</td>
                    <td>$ 50.000</td>
                    <td>1</td>
                    <td>$ 50.000</td>
                    <td>
                      <button className="btn btn-sm btn-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Integración de Sistemas (Paquete Básico)</td>
                    <td>$ 120.000</td>
                    <td>2</td>
                    <td>$ 240.000</td>
                    <td>
                      <button className="btn btn-sm btn-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-end fw-bold">
                      Total:
                    </td>
                    <td colSpan={3} className="fw-bold fs-5 text-success">
                      $ 290.000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-end gap-3 mt-4">
              <Link to="/products" className="btn btn-outline-light">
                Seguir Comprando
              </Link>
              <button className="btn btn-success btn-lg">
                Proceder al Pago
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
