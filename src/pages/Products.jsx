import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import products from "../data/products";
import { Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="products-container">

      <Sidebar />

      <div className="products">

        <h1>Our Products</h1>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <Outlet />

      </div>

    </div>
  );
}

export default Products;