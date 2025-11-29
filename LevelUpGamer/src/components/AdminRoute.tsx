import { Navigate } from "react-router-dom";
import { getUserRole } from "../util/Auth";

function AdminRoute({ children }: { children: React.ReactNode }) {
    const token = localStorage.getItem("token");
    const role = getUserRole();
    if (!token) return <Navigate to="/login" />; // no autenticado
    if (role !== "Admin") {
        return <Navigate to="/403" />; // página de acceso denegado
    }
        return children;    
}
export default AdminRoute;