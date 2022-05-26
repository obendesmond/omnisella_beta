import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import { CartContextProvider } from "./context/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        {/* header */}
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* dynamic route */}
          <Route path="/:productId" element={<ProductDetail />} />

          <Route path="cart" element={<CartPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

        {/* footer here */}
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
