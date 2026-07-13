# 🛒 ShopEase — React Shopping Site

A simple e-commerce frontend built with **React** and **Vite**, featuring a product listing, product cards, and a fully functional cart with add, remove, and quantity update support.

## Features

- **Navbar** — logo, home link, and a live cart item count
- **Home Page** — static grid of 6 products (laptop, headphones, smartphone, smartwatch, camera, backpack)
- **Product Card** — reusable component with image, name, price, and an "Add to Cart" button
- **Cart Page** — lists items currently in the cart, with:
  - Remove item
  - Update quantity (with subtotal per item)
  - Order summary with total
- **Cart Context** — global cart state managed via React Context (`CartContext.jsx`), exposing:
  - `AddtoCart(product)`
  - `RemoveProduct(id)`
  - `UpdateQuantity(id, qty)`

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (icons)

## Project Structure
 
```
src/
├── Context/
│   └── CartContext.jsx      # Global cart state (add/remove/update)
├── Components/
│   ├── Navbar.jsx            
│   └── ProductCard.jsx       
    ├── Cart.jsx            
│   └── ProductList.jsx      
├── Pages/
│   ├── Home.jsx               
│   └── CartPage.jsx               
└── App.jsx
```
## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173` by default.

## Available Scripts

| Command           | Description                  |
|--------------------|-------------------------------|
| `npm run dev`      | Start local development server |
| `npm run build`    | Build for production          |
| `npm run preview`  | Preview the production build  |
| `npm run lint`     | Run ESLint checks              |
