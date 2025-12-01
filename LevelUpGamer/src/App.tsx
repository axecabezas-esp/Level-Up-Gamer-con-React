import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import  Registro  from "./pages/Registro"
import { Products } from "./pages/Products"
import { Login } from "./pages/Login"
import { Carrito } from "./pages/Carrito"
import { ProductDetail } from "./pages/ProductDetail"
import { Layout } from "./layout/Layout"
import Forbidden from "./pages/Forbidden"
import AdminRoute from "./components/AdminRoute"
import Admin from "./pages/Admin"
import { AdminUsers } from "./pages/AdminUsers"
import AdminAdd from "./pages/AdminAdd"
import { AdminProducts } from "./pages/AdminProducts"
import AdminAddProduct from "./pages/AdminAddProduct"



function App() {

  return (
    <>
    <Routes>
      <Route path="/403" element={<Forbidden />} />
      <Route path="admin" element={<AdminRoute><Admin /></AdminRoute>} />
      <Route path="/adminUser" element={<AdminRoute><AdminUsers /></AdminRoute> }/>
      <Route path="/adminAdd" element={<AdminRoute><AdminAdd /></AdminRoute> }/>
      <Route path="/adminProduct" element={<AdminRoute><AdminProducts /></AdminRoute> }/>
      <Route path="/adminAddProduct" element={<AdminRoute><AdminAddProduct /></AdminRoute> }/>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
