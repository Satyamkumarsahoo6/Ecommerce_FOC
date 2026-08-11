import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h2>{product.name}</h2>

      <p>{product.category}</p>

      <h3>₹{product.price}</h3>

      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>

    </div>
  );
}

export default ProductCard;