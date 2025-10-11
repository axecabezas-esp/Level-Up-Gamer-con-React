import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Registro } from "./pages/Registro"
import { Products } from "./pages/Products"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    </>
  )
}

export default App
