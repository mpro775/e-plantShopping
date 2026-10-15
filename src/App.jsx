import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import AboutUs from './AboutUs';
import Header from './Header';
import ProductList from './ProductList';
import CartItem from './CartItem';

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-topbar content-width">
        <a className="landing-brand" href="#/" aria-label="Paradise Nursery homepage">
          <span className="landing-brand-icon" aria-hidden="true">✳</span>
          Paradise Nursery
        </a>
        <Link to="/plants" className="landing-nav-link">Shop plants <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="landing-content content-width">
        <div className="landing-left">
          <span className="eyebrow eyebrow-light">WELCOME TO PARADISE NURSERY</span>
          <h1>Life grows <em>better</em> with plants.</h1>
          <p className="landing-lead">Beautiful houseplants, thoughtfully chosen to make your home feel fresh, peaceful, and alive.</p>
          <Link className="button-light" to="/plants">Get Started <span aria-hidden="true">→</span></Link>
          <div className="hero-small-note"><span aria-hidden="true">✦</span> Plant joy, delivered to your screen</div>
        </div>
        <div className="landing-art" role="img" aria-label="Illustration of a collection of houseplants">
          <img src={`${import.meta.env.BASE_URL}nursery-hero.svg`} alt="A peaceful illustrated indoor plant collection" />
        </div>
      </div>
      <div className="landing-bottom content-width"><AboutUs /></div>
    </main>
  );
}

function ApplicationRoutes() {
  const location = useLocation();

  useEffect(() => {
    const page = location.pathname === '/plants' ? 'Shop Plants' : location.pathname === '/cart' ? 'Your Cart' : 'Home';
    document.title = `${page} | Paradise Nursery`;
  }, [location.pathname]);
  return (
    <div className="app-shell">
      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return <HashRouter><ApplicationRoutes /></HashRouter>;
}
