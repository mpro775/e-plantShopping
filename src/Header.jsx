import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from './CartSlice';

function PlantLogo() {
  return (
    <svg className="brand-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="14" fill="#e7f0dc" />
      <path d="M22 34V15" stroke="#245843" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 25C10 23 10 14 12 9c10 1 14 7 10 16Z" fill="#5a9761" />
      <path d="M22 21c9-14 17-10 17-10-1 10-6 15-17 15" fill="#327653" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="cart-icon" fill="none" aria-hidden="true">
      <path d="M3 4h2l2.2 11.1c.15.7.76 1.2 1.48 1.2h10.4c.7 0 1.32-.49 1.47-1.18L22 8H6"
        stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const count = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Paradise Nursery home">
          <PlantLogo />
          <span className="brand-text">
            <strong>Paradise Nursery</strong>
            <small>Grow a greener home</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/plants" className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>Plants</NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link cart-link is-active' : 'nav-link cart-link'}
            aria-label={`Shopping cart, ${count} plants`}>
            <CartIcon />
            <span className="cart-label">Cart</span>
            <span className="cart-badge" aria-live="polite">{count}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
