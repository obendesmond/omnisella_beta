import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
