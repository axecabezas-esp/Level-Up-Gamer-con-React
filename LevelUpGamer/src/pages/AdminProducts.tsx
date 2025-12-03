import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Link, NavLink } from "react-router-dom";
import { deleteProduct, getProducts } from "../api/products";
import type { Product } from "../interfaces/product";

export const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  const handleDelete = async (id: number, productName: string) => {
    // A. Confirmación de seguridad
    const confirm = window.confirm(`¿Estás seguro que deseas eliminar el producto "${productName}"? \nEsta acción no se puede deshacer.`);

    if (confirm) {
      try {
        await deleteProduct(id);
        // B. Actualizamos la vista localmente
        const newProductsList = products.filter(product => product.id !== id);
        setProducts(newProductsList);
        alert("Producto eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar:", error);
        alert("Hubo un error al intentar eliminar el producto.");
      } 
    }
  };

  return (
    // 1. Estructura Flex Vertical (Navbar arriba, contenido abajo)
    <div className="d-flex flex-column min-vh-100 bg-black-transparent text-white">
      
      {/* 2. Navbar Arriba (Sticky) */}
      <div className="sticky-top" style={{ zIndex: 1020 }}>
         <Navbar />
      </div>

      {/* 3. Contenedor Cuerpo: p-0 para que la Sidebar toque el borde */}
      <div className="container-fluid flex-grow-1 p-0">
        <div className="row flex-nowrap h-100 g-0"> {/* g-0 quita espacios extra */}
          
          {/* Sidebar Izquierda */}
          <Sidebar />

          {/* Contenido Principal Derecha */}
          <div className="col py-4 container">
            
            {/* Header superior con Título y Botones */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                <h1 className="h2 orbitron text-verde">Productos</h1>
                <div className="btn-toolbar mb-2 mb-md-0 align-items-center">
                    <NavLink to="/adminAddProduct" className="btn btn-sm btn-outline-success text-verde border-verde me-3 fw-bold text-decoration-none">
                        + NUEVO PRODUCTO
                    </NavLink>
                </div>
            </div>

            {/* Subtítulo */}
            <h4 className="mt-4 mb-3 text-info">Productos en venta</h4>

            {/* Tabla */}
            <div className="card-2 bg-dark border-secondary shadow">
                <div className="card-body p-0">
                    <div className="table-responsive rounded">
                        <table className="table table-dark table-striped table-hover mb-0 align-middle">
                            <thead className="bg-secondary bg-opacity-25 text-verde orbitron small">
                                <tr>
                                    {/* Encabezados corregidos para coincidir con los datos */}
                                    <th scope="col" className="ps-4 py-3 text-secondary">Nombre</th>
                                    <th scope="col" className="py-3 text-info">Categoría</th>
                                    <th scope="col" className="py-3 text-secondary">Descripción</th>
                                    <th scope="col" className="py-3 text-success">Precio</th>
                                    <th scope="col" className="py-3 text-secondary">Imagen (URL)</th>
                                    <th scope="col" className="pe-4 py-3 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="border-top-0">
                                {products.map ((product) => ( // Usamos 'product' singular
                                    <tr key={product.id}>
                                        <td className="ps-4 fw-bold text-secondary">{product.title}</td>
                                        <td className="text-info">{product.category}</td>
                                        <td className="small text-secondary" style={{maxWidth: '200px'}} title={product.description}>
                                            {product.description}
                                        </td>
                                        <td className="fw-bold text-success">${product.price}</td>
                                        <td className="small text-secondary text-truncate" style={{maxWidth: '150px'}}>
                                            {product.imageSrc}
                                        </td>
                                        
                                        {/* Botón de Eliminar (Ahora dentro de un TD) */}
                                        <td className="text-center">
                                        <Link 
                                            to={`/adminUpdateProduct/${product.id}`} 
                                            className="btn btn-sm btn-outline-primary border-0" 
                                            title="Editar"
                                        >
                                            Editar ✏️
                                        </Link>
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-danger border-0" 
                                                title="Eliminar"
                                                onClick={() => handleDelete(product.id, product.title)}
                                            >
                                                Eliminar 🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                        {/* Mensaje si no hay productos */}
                        {products.length === 0 && (
                            <div className="p-4 text-center text-secondary">
                                No hay productos registrados.
                            </div>
                        )}
                    </div>
                </div>
            </div> {/* Fin Card */}

          </div> {/* Fin Columna Contenido */}
        </div> {/* Fin Row */}
      </div> {/* Fin Container Fluid */}
    </div>
  );
};

export default AdminProducts;