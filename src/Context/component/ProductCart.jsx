import { useCart } from "../CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
      <h3>{product.name}</h3>
      <p>Price: Rs{product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        style={{ background: '#007bff', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;