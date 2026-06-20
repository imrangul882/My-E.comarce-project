import { useState } from "react";
import { useCart } from "../CartContext";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { totalItems, totalBill } = useCart();
  const { user, isLoggedIn, login, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.phone.trim()) {
      login({ name: formData.name, phone: formData.phone }); 
      setIsModalOpen(false); 
      setFormData({ name: "", phone: "" }); 
    } else {
      alert("Please fill both fields!");
    }
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: '#222', color: '#fff', position: 'relative' }}>
  <h2>My Shop</h2>
   <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
    <div>
    <span style={{ marginRight: '15px' }}> Cart: <b>{totalItems}</b> items</span>
    <span>Total: <b>${totalBill}</b></span>
    </div>

        
{isLoggedIn ? (
<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
<span style={{ color: '#27ae60', fontWeight: 'bold' }}>Welcome, {user?.name}!</span>
<button onClick={logout} style={styles.logoutBtn}>Logout</button>
</div>
) : (
<button onClick={() => setIsModalOpen(true)} style={styles.loginBtn}>Login</button>
)}
</div>
{isModalOpen && (
<div style={styles.modalOverlay}>
<div style={styles.modalContent}>
<h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>Login to Your Account</h3>
<form onSubmit={handleSubmit} style={styles.form}>
<div style={styles.inputGroup}>
<label style={styles.label}>Name:</label>
<input 
 type="text"name="name"value={formData.name}
  onChange={handleInputChange}placeholder="Enter your name"style={styles.input}required 
  />
  </div>
  <div style={styles.inputGroup}>
  <label style={styles.label}>Phone Number:</label>
  <input 
  type="tel" name="phone"value={formData.phone}
  onChange={handleInputChange}placeholder="Enter phone number" style={styles.input} required 
  />
  </div>
  <div style={styles.btnRow}>
  <button type="button" onClick={() => setIsModalOpen(false)} style={styles.cancelBtn}>Cancel</button>
  <button type="submit" style={styles.submitBtn}>Submit & Enter</button>
  </div>
  </form>
  </div>
  </div>
  )}
  </nav>
  );
};

const styles = {
  loginBtn: 
  { backgroundColor: '#007bff', color: 'white', border: 'none', padding: '8px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  logoutBtn: 
  { backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  modalOverlay: 
  { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modalContent: 
  { backgroundColor: '#fff', padding: '30px', borderRadius: '12px', width: '380px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', textAlign: 'left' },
  form:
   { display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGroup:
   { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: 
  { color: '#333', fontSize: '14px', fontWeight: '600' },
  input:
   { padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '15px', color: '#333' },
  btnRow:
   { display: 'flex', justifyContent: 'space-between', marginTop: '10px' },
  cancelBtn:
   { backgroundColor: '#6c757d', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' },
  submitBtn:
   { backgroundColor: '#28a745', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }
};

export default Navbar;