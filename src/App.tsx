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
import { Account } from './pages/Account/Account';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';

import { Wishlist } from './pages/Wishlist/Wishlist';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; message: string }
> {
  state = { hasError: false, message: '' };

  static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : String(error),
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'Segoe UI, system-ui, sans-serif' }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>Something went wrong</h2>
          <pre style={{ marginTop: 12, whiteSpace: 'pre-wrap' }}>{this.state.message}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const ghPagesBase = '/SN-Food';
  const basename =
    process.env.NODE_ENV === 'production'
      ? process.env.PUBLIC_URL
      : window.location.pathname === ghPagesBase || window.location.pathname.startsWith(`${ghPagesBase}/`)
        ? ghPagesBase
        : undefined;

  return (
    <Router basename={basename}>
      <div className="App">
        <ErrorBoundary>
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
            <Route path="/account" element={<Account />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
