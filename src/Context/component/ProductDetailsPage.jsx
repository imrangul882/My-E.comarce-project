import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h3>No product selected.</h3>
        <button onClick={() => navigate('/')}>Go to Shop</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <button onClick={() => navigate('/')} style={{ padding: '8px 15px', cursor: 'pointer' }}>
      <span style={{backgroundColor:'#d5dffd', color:'#111fdf', }}>← Back to Shop</span>     
      </button>

      <div style={{ display: 'flex', gap: '40px', marginTop: '20px', flexWrap: 'wrap' }}>
        <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '12px', width: '350px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
        </div>

        <div>
          <h1>{product.name}</h1>
          <p style={{ color: '#7f8c8d', fontSize: '16px' }}>{product.desc}</p>
          <h2 style={{ color: '#27ae60' }}>Rs. {product.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;