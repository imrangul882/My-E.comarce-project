import React, { useState } from 'react'; 
import { useCart } from "../CartContext";
import { supabase } from '../../supabaseClient'; 
import { useAuth } from "../AuthContext";

const CartModal = () => {

 
  const { cart, removeFromCart, totalBill } = useCart();

  const { user } = useAuth();
  const [showNotification, setShowNotification] = useState(false);

  const handlePlaceOrder = async () => {
  if (!cart || cart.length === 0) {
    alert("Aapka cart khali hai!");
    return;
  }
  console.log("Placing order for user:", user);
  const productNames = cart.map(item => item.name || "Unknown Product").join(", ");
  const imageUrls = cart.map(item => item.image_url || item.image || "").join(", ");
  try {
const { data, error } = await supabase
.from('orders')
.insert([
{
 user_name: user?.name || "Walk-in Customer", 
phone: user?.phone || "0000000000",
product_name: productNames,
total_bill: totalBill || 0, 
image_url: imageUrls
}
]);
if (error) {
      throw error;
    }
  console.log("Order successfully saved!", data);
setShowNotification(true);
setTimeout(() => {
  setShowNotification(false);
}, 5000);

  } catch (error) {
    console.error("Order save karne mein error aya:", error.message);
    alert("Order fail ho gaya: " + error.message);
  }
};
  
  if (cart.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <h3>Your Cart is Empty </h3>
        <p>Products add karen taake bill show ho.</p>
      </div>
    );
  }

  return (
    <div style={styles.cartContainer}>
      {showNotification && (
        <div style={styles.customToast}>
          Order Placed Successfully! Total: Rs. {totalBill}
        </div>
      )}
      
<h3 style={styles.cartTitle}>Shopping Cart Summary</h3>
  <div style={styles.itemList}>
  {cart.map((item) => (
   <div key={item.id} style={styles.cartItem}><div>
<h4 style={styles.itemName}>{item.name}</h4>
    <p style={styles.itemMeta}></p>
    <p>Rs. {item.price} x {item.quantity} = Rs. {item.price * item.quantity}</p>
    <p>Total Payable Bill: Rs. {totalBill}</p>
    </div>
    <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>
    Remove
    </button>
    </div>
    ))}
    </div>
<div style={styles.billSection}>
  <span>Total Payable Bill:</span>
  <span style={styles.billAmount}>Rs {totalBill}</span>
  </div>

<button onClick={handlePlaceOrder} style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}>
  Place Order
</button>

{showNotification && (
  <div style={{
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#8f12f5', 
    color: '#e5dfee',           // Bright Yellow Text
    padding: '16px 28px',
    borderRadius: '12px',
    fontWeight: 'bold',
    fontSize: '16px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
    zIndex: 9999,               
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    border: '2px solid ' 
  }}>
  </div>
)}
  </div>
  );
};

const styles = {
  
  customToast: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#6b2cd1', 
    color: '#ffffff',
    padding: '16px 32px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    zIndex: 9999,
    fontSize: '16px',
    fontWeight: 'bold',
    animation: 'fadeInDown 0.5s ease',
    textAlign: 'center',
  },
  container: 
  { padding: '20px 0', width: '100%' },
  heading: 
  { textAlign: 'center', marginBottom: '30px', color: '#2c3e50', fontSize: '24px' },
  grid:
   { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', boxSizing: 'border-box' },
  card: 
  { border: '1px solid #e0e0e0', borderRadius: '12px', padding: '15px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' },
  imageWrapper: 
  { width: '100%', height: '130px', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
  productImage:
   { maxWidth: '300%', maxHeight: '100%', objectFit: 'contain' },
  prodName:
   { margin: '10px 0 5px 0', fontSize: '16px', color: '#2c3e50', fontWeight: '600' },
  prodDesc:
   { fontSize: '13px', color: '#7f8c8d', marginBottom: '12px', lineHeight: '1.4' },
  footerRow:
   { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' },
  price:
   { fontSize: '18px', fontWeight: 'bold', color: '#27ae60' },
  addBtn:
   { backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' },
  emptyCart:
   { textAlign: 'center', padding: '40px' },
  cartContainer:
   { padding: '20px', background: '#fff', borderRadius: '8px', position: 'relative' },
  cartTitle:
   { fontSize: '20px', marginBottom: '15px' },
  itemList:
   { marginBottom: '20px' },
  cartItem: 
  { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' },
  removeBtn:
   { backgroundColor: '#52080a', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '50px', cursor: 'pointer' },
  billSection:
   { display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px', margin: '15px 0' },
  checkoutBtn:
   { width: '100%', backgroundColor: '#0a3013', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }
};
export default CartModal;