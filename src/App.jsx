import { useState } from "react";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/signup/Signup.jsx";
import Header from "./components/header/Header";
import Sponsors from "./pages/sponsors/Sponsors.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
