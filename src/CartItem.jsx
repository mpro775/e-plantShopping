import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from './CartSlice';
import { productsById, formatPrice, productImage } from './products';

function CartLine({ id, quantity }) {
  const dispatch = useDispatch();
  const product = productsById[id];

  return (
    <article className="cart-item">
      <img className="cart-item-image" src={productImage(product)} alt={`${product.name} illustration`} />
      <div className="cart-item-info">
        <h3>{product.name}</h3>
        <p>Unit price: <strong>{formatPrice(product.price)}</strong></p>
        <button className="remove-link" type="button" onClick={() => dispatch(removeItem(id))}
          aria-label={`Delete ${product.name} from cart`}>Delete</button>
      </div>
      <div className="cart-item-controls">
        <span className="field-label">Quantity</span>
        <div className="quantity-control">
          <button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => dispatch(decreaseQuantity(id))}>−</button>
          <span aria-label={`${quantity} units`}>{quantity}</span>
          <button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => dispatch(increaseQuantity(id))}>+</button>
        </div>
      </div>
      <div className="cart-item-subtotal">
        <span className="field-label">Subtotal</span>
        <strong>{formatPrice(product.price * quantity)}</strong>
      </div>
    </article>
  );
}

export default function CartItem() {
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const [message, setMessage] = useState('');

  return (
    <main className="cart-page content-width">
      <div className="cart-heading">
        <span className="eyebrow">YOUR GREEN PICKS</span>
        <h1>Your shopping cart</h1>
        <p>Almost ready to bring some green home? Review your selections below.</p>
      </div>

      {items.length === 0 ? (
        <section className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">🌿</span>
          <h2>Your cart is looking a little empty.</h2>
          <p>Discover the perfect plant for your space.</p>
          <Link className="button-primary" to="/plants">Browse Plants →</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Plants in your cart">
            <div className="cart-list-title">
              <h2>My plants</h2>
              <span>{count} {count === 1 ? 'item' : 'items'}</span>
            </div>
            {items.map((item) => <CartLine key={item.id} id={item.id} quantity={item.quantity} />)}
            <Link className="continue-link" to="/plants">← Continue Shopping</Link>
          </section>
          <aside className="order-summary" aria-label="Order summary">
            <span className="eyebrow">ORDER SUMMARY</span>
            <h2>Ready to grow?</h2>
            <div className="summary-row"><span>Total plants</span><strong>{count}</strong></div>
            <div className="summary-row"><span>Items subtotal</span><strong>{formatPrice(total)}</strong></div>
            <div className="summary-divider" />
            <div className="summary-total"><span>Total cost</span><strong>{formatPrice(total)}</strong></div>
            <button className="button-primary checkout-btn" type="button" onClick={() => setMessage('Checkout coming soon!')}>Checkout →</button>
            {message && <p className="checkout-notice" role="status">{message}</p>}
            <p className="summary-note">Your plants are worth the wait. Happy growing!</p>
          </aside>
        </div>
      )}
      {items.length > 0 && <p className="cart-footer-note">Shopping for someone special? Plants make the loveliest gifts.</p>}
    </main>
  );
}
