import ProductCard from "./components/ProductCard/ProductCard";
import "./App.css";
import { Product } from "./types/Product";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState<Product>()
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch("../public/products.json");
      const data = await resp.json();
      setProducts(data.products)
    };
    fetchProducts()
  }, [])

  function filterProducts(searchTerm : string) {
    setHasSearched(true)
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log(filteredProducts.length)
    if (filteredProducts.length == 1) {
      setFilteredProducts(filteredProducts[0])
      setHasSearched(true)
    }
    else {
      setFilteredProducts(undefined)
      setHasSearched(true)
    }
  }

  return (
    <div>
      <h1>Product information</h1>
        <div className="product-card">
        <div className="search-section">
          <label>Enter Product Here:</label>
          <br />
          <input
            type="text"
            id="inp"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={() => filterProducts(searchQuery)}>Search</button>
        </div>
        {hasSearched && filteredProducts == null ? (
          <h1 className="error">No product found with the given name</h1>
        ) : (
          hasSearched && filteredProducts != null &&
            <ProductCard
              product={{
                id: filteredProducts.id,
                name: filteredProducts.name,
                price: filteredProducts.price,
                category: filteredProducts.category,
                image: filteredProducts.image,
              }}
              
            />
        )}
      </div>
    </div>
    
  )
};
export default App; 