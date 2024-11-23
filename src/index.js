import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import ProductProvider as a named import
import { ProductProvider } from "./contexts/ProductContext";

// Import SidebarProvider as a named import
import SidebarProvider from "./contexts/SidebarContext";

// Import SidebarProvider as a named import
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
  </CartProvider>
  </SidebarProvider>
);

reportWebVitals();
