import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/signup/Signup.jsx";
import Header from "./components/header/Header";
import Sponsors from "./pages/sponsors/Sponsors.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Footer from "./components/footer/Footer.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import Ideas from "./pages/ideas/Ideas.jsx";
import Conant from "./pages/cont/Conant.jsx";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/conant" element={<Conant />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
