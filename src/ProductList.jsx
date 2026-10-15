import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice';
import { productCategories, formatPrice, productImage } from './products';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="catalog-page">
      <section className="catalog-intro content-width">
        <div>
          <span className="eyebrow">THE PARADISE COLLECTION</span>
          <h1>Find your next green companion.</h1>
          <p>Explore beautiful houseplants chosen to make any corner feel like home.</p>
        </div>
        <div className="catalog-count">
          <strong>18</strong>
          <span>plants to love</span>
        </div>
      </section>

      <div className="content-width category-jump" aria-label="Plant categories">
        {productCategories.map((category) => (
          <button key={category.id} type="button" onClick={() => {
            document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' });
          }}>
            {category.title}
          </button>
        ))}
      </div>

      {productCategories.map((category, index) => (
        <section key={category.id} id={category.id} className="catalog-section content-width" aria-labelledby={`${category.id}-title`}>
          <div className="section-heading">
            <div>
              <span className="eyebrow">COLLECTION 0{index + 1}</span>
              <h2 id={`${category.id}-title`}>{category.title}</h2>
              <p>{category.description}</p>
            </div>
            <span className="category-total">{category.products.length} plants</span>
          </div>
          <div className="product-grid">
            {category.products.map((product) => {
              const added = addedIds.has(product.id);
              return (
                <article className="product-card" key={product.id}>
                  <div className="product-image-wrap">
                    <img className="product-image" src={productImage(product)} alt={`${product.name} houseplant illustration`} loading="lazy" />
                    <span className="product-tag">Handpicked</span>
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-bottom">
                      <span className="price">{formatPrice(product.price)}</span>
                      <button className={added ? 'button-added' : 'button-add'} type="button"
                        disabled={added} onClick={() => dispatch(addItem(product.id))}
                        aria-label={added ? `${product.name} added to cart` : `Add ${product.name} to cart`}>
                        {added ? '✓ Added to Cart' : '+ Add to Cart'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
      <footer className="site-footer">Paradise Nursery · Little plants, big happiness. © 2026</footer>
    </main>
  );
}
