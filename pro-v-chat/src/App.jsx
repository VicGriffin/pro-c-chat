import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminDashboard from "./pages/ADmin/AdminDashboard.jsx";
import AdminRegister from "./pages/ADmin/Adminregister.jsx";
import AdminSignin from "./pages/ADmin/AdminSignin.jsx";
import ManageUsers from "./pages/ADmin/ManageUsers.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/signup/Signup.jsx";
import Header from "./components/header/Header";
import Sponsors from "./pages/sponsors/Sponsors.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Footer from "./components/footer/Footer.jsx";
import Postidea from "./pages/postIdea/Postidea.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import Ideas from "./pages/ideas/Ideas.jsx";
import Conant from "./pages/cont/Conant.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Meeting from "./pages/meeting/Meeting.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from "./components/admin/Admin.jsx";
import Sidebar from "./pages/ADmin/Sidebar.jsx";
import ChatBotComponent from "./components/chatbot/ChatBot.jsx";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/adminSignin" element={<AdminSignin />} />
          <Route path="/manageUsers" element={<ManageUsers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/sponsors" element={<ProtectedRoute><Sponsors /></ProtectedRoute>} />
          <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/conant" element={<Conant />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/post" element={<ProtectedRoute><Postidea /></ProtectedRoute>} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      <ChatBotComponent />
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
