import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Company } from './pages/Company/Company';
import { Team } from './pages/Team/Team';
import { Vendors } from './pages/Vendors/Vendors';
import { Customers } from './pages/Customers/Customers';
import { Events } from './pages/Events/Events';
import { Catalogs } from './pages/Catalogs/Catalogs';
import { Brands } from './pages/Brands/Brands';
import { NewArrivals } from './pages/NewArrivals/NewArrivals';
import { Contact } from './pages/Contact/Contact';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';

import { Wishlist } from './pages/Wishlist/Wishlist';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/team" element={<Team />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/catalogs" element={<Catalogs />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
