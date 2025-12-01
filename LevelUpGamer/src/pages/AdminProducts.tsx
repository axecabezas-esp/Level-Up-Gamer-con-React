import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { deleteProduct, getProducts } from "../api/products";
import type { Product } from "../interfaces/product";


// Datos de ejemplo para la tabla (simulando lo que vendría de una API)

const productsData = getProducts();

// Datos para el menú lateral
const sidebarLinks = [
    { icon: '📊', text: 'Dashboard', active: false },
    { icon: '🛒', text: 'Orders', active: true }, // Activo según la imagen
    { icon: '📦', text: 'Inventory', active: false },
    { icon: '📄', text: 'Reports', active: false },
    { icon: '🧑‍💼', text: 'Employees', active: false },
    { icon: '👥', text: 'Customers', active: false },
];


export const AdminProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);
  const handleDelete = async (id: number, customerName: string) => {
    // A. Confirmación de seguridad
    const confirm = window.confirm(`¿Estás seguro que deseas eliminar al usuario "${customerName}"? \nEsta acción no se puede deshacer.`);

    if (confirm) {
      // B. Aquí iría tu llamada al Backend: axios.delete(/api/users/${id})
      try {
        await deleteProduct(id);
        // C. Actualizamos la vista localmente filtrando el usuario eliminado
        const newUsersList = products.filter(user => user.id !== id);
        setProducts(newUsersList);
        alert("Usuario eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar:", error);
        alert("Hubo un error al intentar eliminar el usuario.");
      } 
    }
  };

  return (
    <div className="container-fluid bg-black-transparent min-vh-100 text-white">
      <div className="row flex-nowrap">
        
        {/* === SIDEBAR (Columna Izquierda) === */}
        {/* Se usa col-auto y anchos responsivos para que se adapte */}
        <div className="d-flex flex-column min-vh-100">
      
      {/* 1. Navbar arriba (Sticky para que siempre se vea) */}
      <div className="sticky-top" style={{ zIndex: 1020 }}>
         <Navbar />
      </div>

      <div className=" flex-grow-1">
        <div className="row flex-nowrap h-100">
          
          {/* 2. Sidebar a la izquierda */}
          {/* Tu Sidebar ya tiene las clases col-auto col-md-3... así que encaja perfecto aquí */}
          <Sidebar />
          <div className="col py-3 container">
            
            {/* Header superior con Título y Botones */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                <h1 className="h2 orbitron text-verde">Usuarios</h1>
                <div className="btn-toolbar mb-2 mb-md-0 align-items-center">
                    {/* Botón estilo neón verde */}
                    <button type="button" className="btn btn-sm btn-outline-success text-verde border-verde me-3 fw-bold">
                        <NavLink to="/adminAdd" className="nav-link">
                            NUEVO USUARIO
                        </NavLink>
                        </button>
                    {/* Icono de campana (placeholder) */}
                    <button type="button" className="btn btn-link text-white fs-5 text-decoration-none">
                        🔔
                    </button>
                </div>
            </div>

            {/* Subtítulo de la tabla */}
            <h4 className="mt-4 mb-3 text-info">All Sales Orders</h4>

            {/* Tarjeta contenedora de la tabla para dar estilo */}
            <div className="card-2 bg-dark border-secondary shadow">
                <div className="card-body p-0">
                    <div className="table-responsive rounded">
                        {/* Tabla de Bootstrap con tema oscuro y efecto hover */}
                        [<table className="table table-dark table-striped table-hover mb-0 align-middle">
                            <thead className="bg-secondary bg-opacity-25 text-verde orbitron small">
                                <tr>
                                    <th scope="col" className="ps-4 py-3">Date</th>
                                    <th scope="col" className="py-3">Order ID</th>
                                    <th scope="col" className="py-3">Customer</th>
                                    <th scope="col" className="py-3">Status</th>
                                    <th scope="col" className="pe-4 py-3 text-end">Amount</th>
                                    <th scope="col" className="pe-4 py-3 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="border-top-0">
                                {products.map ((products, index) => (
                                    <tr key={index}>
                                        <td className="ps-4">{products.title}</td>
                                        <td className="fw-bold text-info">{products.category}</td>
                                        <td>{products.description}</td>
                                        <td>
                                                {products.imageSrc}
                                        </td>
                                        <td className="pe-4 text-end fw-bold">{products.price}</td>
                                        <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-danger border-0 ms-2" 
                                                title="Eliminar"
                                                onClick={() => handleDelete(products.id, products.title)}
                                            >
                                                🗑️
                                            </button>
                                    </tr>
                                ))}
                            </tbody>
                        </table>]
                        hola admin!
                    </div>
                </div>
            </div> {/* Fin Card */}

        </div>
          
        </div>
      </div>
    </div>

        {/* === CONTENIDO PRINCIPAL (Columna Derecha) === */}
        
      </div>
    </div>
  );
};

export default AdminProducts