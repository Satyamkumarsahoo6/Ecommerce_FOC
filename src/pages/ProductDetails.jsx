import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="details">

      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
      />

      <h2>Price: ₹{product.price}</h2>

    </div>
  );
}

export default ProductDetails;