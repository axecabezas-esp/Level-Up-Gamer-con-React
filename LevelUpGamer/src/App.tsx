import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Registro } from "./pages/Registro"
import { Products } from "./pages/Products"
import { Login } from "./pages/Login"
import { Carrito } from "./pages/Carrito"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/cart" element={<Carrito />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
