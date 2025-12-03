import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../api/users";
import type { User } from "../interfaces/User";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Link, NavLink } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers).catch(console.error);
  }, []);

  const handleDelete = async (id: number, customerName: string) => {
    const confirm = window.confirm(`¿Estás seguro que deseas eliminar al usuario "${customerName}"?`);
    if (confirm) {
      try {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
      } catch (error) {
        console.error(error);
        alert("Error al eliminar.");
      } 
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-black-transparent text-white">
      
      <div className="sticky-top" style={{ zIndex: 1020 }}>
         <Navbar />
      </div>

      {/* CAMBIO 1: Agregamos 'd-flex flex-column' para manejar mejor la altura */}
      <div className="container-fluid d-flex flex-column flex-grow-1 p-0">
        
        {/* CAMBIO 2: Quitamos 'h-100' y ponemos 'flex-grow-1'. 
            Esto hace que la fila llene el espacio restante pero crezca si hay scroll. */}
        <div className="row flex-nowrap flex-grow-1 g-0">
          
          <Sidebar />

          <div className="col py-4 container">
            
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                <h1 className="h2 orbitron text-verde">Usuarios</h1>
                <div className="btn-toolbar mb-2 mb-md-0 align-items-center">
                    <NavLink to="/adminAddUser" className="btn btn-sm btn-outline-success text-verde border-verde fw-bold text-decoration-none">
                        + NUEVO USUARIO
                    </NavLink>
                </div>
            </div>

            <h4 className="mt-4 mb-3 text-info">Usuarios registrados</h4>

            <div className="card-2 bg-dark border-secondary shadow">
                <div className="card-body p-0">
                    <div className="table-responsive rounded">
                        <table className="table table-dark table-striped table-hover mb-0 align-middle">
                            <thead className="bg-secondary bg-opacity-25 text-verde orbitron small">
                                <tr>
                                    <th scope="col" className="ps-4 py-3 text-info">Rut</th>
                                    <th scope="col" className="ps-4 py-3 text-info">Nombre</th>
                                    <th scope="col" className="py-3 text-info">Apellido</th>
                                    <th scope="col" className="py-3 text-secondary">Correo</th>
                                    <th scope="col" className="py-3 text-secondary">Comuna</th>
                                    <th scope="col" className="py-3 text-success">Fecha de Nacimiento</th>
                                    <th scope="col" className="pe-4 py-3 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="border-top-0">
                                {users.map ((user) => (
                                    <tr key={user.id}>
                                        <td className="ps-4 text-info">{user.rut}</td>
                                        <td className="ps-4 text-info">{user.nombre}</td>
                                        <td className="fw-bold text-info ">{user.apellido}</td>
                                        <td className="text-secondary">{user.correo}</td>
                                        <td className="text-secondary">{user.comuna}</td>
                                        <td className="text-success ">{user.fechaNacimiento}</td>
                                        <td className="text-center">
                                        <Link 
                                            to={`/adminUpdateUser/${user.id}`} 
                                            className="btn btn-sm btn-outline-primary border-0" 
                                            title="Editar"
                                        >
                                            Editar ✏️
                                        </Link>
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-danger border-0" 
                                                title="Eliminar"
                                                onClick={() => handleDelete(user.id, user.nombre)}
                                            >
                                                Eliminar 🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {users.length === 0 && (
                            <div className="p-4 text-center text-secondary">
                                No hay usuarios para mostrar.
                            </div>
                        )}
                    </div>
                </div>
            </div> 

          </div> 
        </div> 
      </div>
    </div>
  );
};