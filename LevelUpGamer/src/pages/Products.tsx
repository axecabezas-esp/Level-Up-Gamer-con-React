import { Link } from "react-router-dom"
import { products } from "../data/products"
import { useState } from "react";
import { useCar } from "../contexts/CartContext";


export const Products = () => {
  const { addToCar, formatCLP } = useCar();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  let filteredProducts = products;
  
  if (selectedCategory !== "all")
    {filteredProducts = products.filter((p)=> p.category === selectedCategory)}

  if(minPrice > 0 && maxPrice == 0)
      {filteredProducts = filteredProducts.filter((p)=> p.price >= minPrice)}
  else if(maxPrice > 0 && minPrice == 0)
    {filteredProducts = filteredProducts.filter((p)=> p.price <= maxPrice)}
  else if (minPrice > 0 && maxPrice > 0)
    {{filteredProducts = filteredProducts.filter((p)=> p.price >= minPrice && p.price <= maxPrice)}}

  const categories = ["all",...new Set (products.map((p)=> p.category))];

  return (
    <>
<section className="bg-azul py-5 ">
    <div className="container">
      <h2 className="text-center text-verde orbitron text-shadow mb-5">🕹️ Nuestros Productos</h2>
      <div className="d-flex align-items-center gap-2">
            <label htmlFor="cat" className="form-label mb-0">Categoria</label>
              <select name="category" id="category" className="form-select form-select-sm" onChange={(e)=> setSelectedCategory(e.target.value)}>
                {categories.map((cat)=>(
                  <option key={cat} value={cat}>{cat === "all" ? "Todos" : cat}</option>
                ))}
              </select>
            <label htmlFor="minPrice" className="form-label mb-0">Mín</label>
            <input id="minPrice" type="number" value={minPrice || ""} className="form-control form-control-sm" style={{width: 110}} onChange={(e)=> setMinPrice(Number(e.target.value))}/>
            <label htmlFor="maxPrice" className="form-label mb-0">Máx</label>
            <input id="maxPrice" type="number" value={maxPrice || "" } className="form-control form-control-sm" style={{width: 110}} onChange={(e)=> setMaxPrice(Number(e.target.value))}/>
            <button className="btn btn-outline-secondary btn-sm" onClick={(e)=> {setMaxPrice(Number(0)); setMinPrice(Number(0)); setSelectedCategory("all"); }}>Restablecer</button>
          </div>
      <section className="row g-4 mt-4">
          {filteredProducts.map((p) => (
            <>
              <div className="col-lg-4 col-md-6 col-12">
                <article
                  key={p.id}
                  className="card h-100 bg-dark text-light border-secondary-subtle"
                >
                  <div className="ratio ratio-16x9">
                    <img
                      src={p.imageSrc}
                      className="card-img-top w-100 h-100 object-fit-contain"
                      alt="Producto"
                    />
                  </div>
                  <div className="card-body">
                    <span className="badge rounded-pill text-bg-secondary mb-2">
                      {p.category}
                    </span>
                    <h3 className="h6 card-title">{p.title}</h3>
                    <p className="card-text small">{p.description}</p>
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <span className="fw-bold">{formatCLP(p.price)}</span>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => addToCar(p)}
                      >
                        Agregar
                      </button>
                      <Link
                        className="btn btn-outline-light btn-sm"
                        to={`/products/${p.id}`}
                      >
                        Ver detalle
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </>
          ))}
        </section>
    </div>
  </section>
    </>
  )
}
