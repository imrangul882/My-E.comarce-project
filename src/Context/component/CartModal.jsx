import React, { useState } from 'react'; 
import { useCart } from "../CartContext";

const CartModal = () => {
  const { cart, removeFromCart, totalBill } = useCart();
  
  const [showNotification, setShowNotification] = useState(false);

  
  const handleCheckout = () => {
    setShowNotification(true);
    
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
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
  <button style={styles.checkoutBtn} onClick={handleCheckout}>
  Proceed to Checkout
  </button>
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