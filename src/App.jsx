import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext"; 
import Navbar from "./Context/component/Navbar";
import ProductList from "./Context/component/ProductList";
import CartModal from "./Context/component/CartModal";
import ProductDetailsPage from "./Context/component/ProductDetailsPage";

function MainLayout() {
  const { isLoggedIn } = useAuth();

  return (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa' }}>
      
  <div style={{ padding: '0 20px', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
  <Navbar />
  </div>  
  {isLoggedIn ? (
    <div style={{ padding: '20px', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
  <Routes>
  
  <Route 
    path="/" 
    element={
      <>
        <ProductList />
        <CartModal />
      </>
    } 
  />
  <Route 
    path="/" 
    element={
      <>
        <ProductList />
        <CartModal />
      </>
    } 
  />
  <Route 
    path="*" 
    element={
      <>
<ProductList />
<CartModal />
</>
} 
 />

  <Route path="/product-details" element={<ProductDetailsPage />} />
</Routes> 
 </div>
      ) : (
  <div style={styles.heroContainer}>
  <div style={styles.heroCard}>
 <div style={styles.badge}>🇵🇰 Pakistan's Premium Grocery</div>
<h1 style={styles.mainHeading}>Bachaen Waqt Aur Paisa!</h1>
<p style={styles.subHeading}>
Get fresh fruits, authentic spices, and daily household essentials delivered straight from HAYDERABAD's best markets to your doorstep.
</p>
<div style={styles.featuresRow}>
<div style={styles.featureItem}> Fast Delivery</div>
<div style={styles.featureItem}>100% Fresh Items</div>
<div style={styles.featureItem}>Best Wholesale Prices</div>
</div>  
<div style={styles.alertBox}>
  <b>Account Protected:</b> Please click the <b>Login</b> button on top to unlock the storefront and start shopping.
   </div>
    </div>
    </div>
      )}
    </div>
  );
}
const styles = {
  heroContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #06ce17 0%, #ffffff 100%)', // 
  },
  heroCard: {
    maxWidth: '650px',
    backgroundColor: '#ec9494',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    border: '1px solid #e0e0e0',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#e8f5e9',
    color: '#27ae60',
    padding: '6px 16px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  mainHeading: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#2c3e50',
    margin: '0 0 15px 0',
  },
 subHeading: {
    fontSize: '16px',
    color: '#4625d6',
    lineHeight: '1.6',
    margin: '0 0 30px 0',
  },
  featuresRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    marginBottom: '30px',
  },
  featureItem: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #f0f0f0',
    padding: '10px 18px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#34495e',
  },
  alertBox: {
    backgroundColor: '#fff3cd',
    color: '#856404',
    padding: '15px',
    borderRadius: '10px',
    fontSize: '14px',
    border: '1px solid #ffeeba',
    lineHeight: '1.5',
  }
};
function App() {
  return (
  <AuthProvider>
  <CartProvider>
   <Router>
     <MainLayout />
  </Router>
  </CartProvider>
    </AuthProvider>
  );
}

export default App;