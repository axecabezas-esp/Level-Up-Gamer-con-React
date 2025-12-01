import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const getUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 3600000;
    const navigate = useNavigate();
    if (decoded.exp < currentTime) {
      console.log("Token expirado. Cerrando sesión...");
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      return navigate("/login")
  }
    return decoded.tipoUsuario;
  } catch (error) {
    console.log(error);
    return null;
  }
}
