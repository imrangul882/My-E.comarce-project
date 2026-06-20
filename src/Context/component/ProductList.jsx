import { useNavigate } from "react-router-dom";

import React from 'react';
import { useCart } from '../CartContext';

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
 const GROCERY_CATALOG = [
    { 
      id: 1, 
      name: "National Chat Masala", 
      price: 150, 
      desc: "Perfect spice mix, delicious taste, a Pakistani favorite.", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_i5GV-y27rvovTczHGhWMyCyGBQcoZZr7HOJRnm3M_qObIUe5BYaFgXDV&s=10" 
    },
    { 
      id: 2, 
      name: "Dalda Cooking Oil", 
      price: 950, 
      desc: "Pure & Refined, Fortified with Vitamins, for Healthy Cooking.", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPwnojjTCrpAiASiZz5S4WSguiTNUlVWpCyIEMQytOKkEp8X3NA5kEqcn&s=10" 
    },
    { 
      id: 3, 
      name: "Laziza Kheer Mix", 
      price: 180, 
      desc: "Traditional Dessert Mix, Easy to Prepare, Serves 4-6.", 
      image: "https://i.ytimg.com/vi/V1W-qDhdJaY/sddefault.jpg" 
    },
    { 
      id: 4, 
      name: "Engro Milk Pak (1L)", 
      price: 260, 
      desc: "Homogenized Milk, Pure & Safe, Convenient Tetra Pack.", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3c_QR3aev_rfy5g36Nq5izS_wiFSZXIQFq6Qx-uBR0t88aPDyrXnHIcM&s=10" 
    },
    { 
      id: 5, 
      name: "Rooh Afza (750ml)", 
      price: 320, 
      desc: "Refreshing Drink, Traditional Sharbat, Perfect for Summer.", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WQDPO3XNzA43B-2JWieUsitx1rRv1zmotR2fbQiIeK3_Nih7dDjyAKBK&s=10" 
    },
    { 
      id: 6, 
      name: "Supreme Tea (250g Tea Bag)", 
      price: 490, 
      desc: "Strong & Aromatic, Quality Assured, Pakistani Chai Essential.", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtw49outgADdgkcaEyXVMxKKAXtAjOJn7-DC5wI1-psFgjeCVt87YlAY&s=10" 
    }
  ];
  const handleImageClick = (product) => {
    navigate('/product-details', { state: { product } });
  };
  return (
    <div style={styles.container}>
    <h2 style={styles.heading}>Essential Pakistani Grocery Items</h2>
      
      
    <div style={styles.grid}>
      {GROCERY_CATALOG.map((product) => (
       <div key={product.id} style={styles.card}>
            
  <div style={{...styles.imageWrapper,cursor:'pointer' }}
      onClick={() => handleImageClick(product)}
            >
  <img src={product.image} alt={product.name} style={styles.productImage} />
      </div>
            
  <h3 style={styles.prodName}>{product.name}</h3>
      <p style={styles.prodDesc}>{product.desc}</p>
   <div style={styles.footerRow}>
      <span style={styles.price}>Rs. {product.price}</span>
  <button 
      onClick={() => addToCart(product)} 
      style={styles.addBtn}>
      Order Now
  </button>
  </div>
  </div>
        ))}
  </div>
  </div>
  );
};

const styles = {
  container: { padding: '20px 0', width: '100%' },
  heading: { textAlign: 'center', marginBottom: '30px', color: '#2c3e50', fontSize: '24px', fontWeight: '700' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '25px',
    width: '100%'
    
  },
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center', 
  },
  imageWrapper: { 
    width: '100%',
    height: '200px',
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '8px'
  },
  productImage: { 
    maxWidth: '200%',
    maxHeight: '100%',
    objectFit: 'contain' 
  },
  prodName: 
  { margin: '0 0 8px 0', fontSize: '18px', color: '#2c3e50', fontWeight: '600' },
  prodDesc: 
  { fontSize: '14px', color: '#7f8c8d', marginBottom: '15px', lineHeight: '1.4', flexGrow: 1 },
  footerRow: 
  { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }, // Keep footer at bottom
  price: { fontSize: '20px', fontWeight: 'bold', color: '#27ae60' },
  addBtn: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.2s',
    border: '1px solid transparent',
  }
};

export default ProductList;