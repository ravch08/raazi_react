import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  BlogPage,
  Contact,
  ErrorPage,
  Footer,
  Header,
  Home,
  Product,
} from "./components/utils/helper";

import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
