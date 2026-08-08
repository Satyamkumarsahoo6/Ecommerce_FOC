import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`}>View details</Link>
    </article>
  );
}

export default ProductCard;
