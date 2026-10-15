# Paradise Nursery – React Shopping Cart

A responsive houseplant shopping application made as the final project for **Developing Front-End Apps with React (IBM / Coursera)**.

## Features

- Welcoming landing page with Paradise Nursery branding, background illustration, about-us information, and Get Started button.
- 18 unique houseplants across three categories (6 in each), each with a locally bundled illustration, name, description, and price.
- Product listing with an Add to Cart button that becomes disabled after adding a plant.
- Shared navigation (Home / Plants / Cart), including a live shopping cart badge.
- Redux Toolkit for cart state and actions: add, increase, decrease, and delete.
- Dynamic quantity, line subtotal, item count, and grand total.
- Re-adding a plant is possible after it is removed from the cart.
- Continue Shopping, Checkout (displays "Checkout coming soon!"), and empty-cart state.
- Cart persistence with localStorage and mobile-friendly design.
- HashRouter and GitHub Actions workflow for GitHub Pages deployment.

## Technologies

React 18, React Router, Redux Toolkit, React Redux, Vite, CSS.

## Run locally / in Skills Network Labs

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Open the URL displayed by Vite (usually port 5173). Since this repository is hosted at `/e-plantShopping/` on GitHub Pages, the development preview may use that URL path.

To validate a production build:

```bash
npm run build
npm run preview -- --host 0.0.0.0
```

## Publish with GitHub Pages

1. Create a **public** GitHub repository named exactly `e-plantShopping` (case-sensitive for the published URL).
2. Push all project files, including `.github/workflows/deploy.yml`, to the `main` branch.
3. Open **GitHub → Repository → Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open **Actions** to verify the deployment workflow succeeds. If Pages asks for authorization, configure permissions according to GitHub's UI.
5. Open `https://YOUR_GITHUB_USERNAME.github.io/e-plantShopping/`.

The Vite `base` is already configured for this repository name in `vite.config.js`. HashRouter makes routes work when the app is served from a repository subpath.

## File structure (important for grading)

```text
e-plantShopping/
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── .github/workflows/deploy.yml
├── public/
│   ├── nursery-hero.svg
│   └── plants/*.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── AboutUs.jsx
    ├── Header.jsx
    ├── ProductList.jsx
    ├── CartItem.jsx
    ├── CartSlice.jsx
    ├── products.js
    └── store.js
```

## Option 1 – AI-graded: GitHub source links

Replace `YOUR_GITHUB_USERNAME` with your GitHub username after publishing.

- README: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/README.md`
- AboutUs.jsx: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/AboutUs.jsx`
- App.css: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/App.css`
- App.jsx: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/App.jsx`
- CartSlice.jsx: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/CartSlice.jsx`
- ProductList.jsx: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/ProductList.jsx`
- CartItem.jsx: `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/CartItem.jsx`

The brief contains an apparent filename typo, `App.css.css`; this project uses the conventional `App.css` filename, imported from `src/main.jsx`.

## Option 2 – Peer-graded

Provide the public repository URL and the live GitHub Pages URL.

## Quick manual checklist

1. Landing page has background art, company name, about paragraph and functional **Get Started**.
2. Three product categories with 18 unique plants and pictures.
3. Select **Add to Cart** on one product; the button becomes **Added to Cart** and the header badge increases by 1.
4. Open the cart; the correct plant, price, quantity and subtotal appear.
5. Increase and decrease quantity; the header count and totals update immediately.
6. Delete one plant; return to Plants and verify Add to Cart is enabled again.
7. **Continue Shopping** returns to the products.
8. **Checkout** shows a coming-soon message.
9. Refresh the cart page; selections remain in local storage.
10. Check layout on a phone-sized screen and public deployment on an incognito browser.

## Learning notes

`CartSlice.jsx` defines Redux actions and immutable-style reducers (Redux Toolkit uses Immer). `store.js` configures Redux. `ProductList.jsx` renders arrays using `.map()` and dispatches `addItem`. `CartItem.jsx` selects cart state with `useSelector` and dispatches quantity/delete actions. `App.jsx` provides the landing page and route navigation.

All plant illustrations in `public/` are original vector graphics generated specifically for this educational project; no external image API or account key is required.
