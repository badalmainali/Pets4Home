import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import React from "react";
import PetScreen from "./screens/PetScreen";
import CartScreen from "./screens/CartScreen";
import About from "./Pages/About/About";
import Footer from "./components/Footer/Footer";
import Dashboard from "./Admin/Dashboard";
import Customers from "./Admin/Customers";
import Products from "./Admin/Products";
import Appointment from "./container/Appointment/Appointment";
import CreateProduct from "./Admin/Create/CreateProduct";
import CreateBlogs from "./Admin/Create/CreateBlogs";
import Blogs from "./Pages/Blog/Blogs";
import Contact from "./Pages/Contact/Contact";
import BlogsAdmin from "./Admin/BlogsAdmin";
import BlogScreen from "./screens/BlogScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Pages */}
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route exact path="/profile" element={<ProfileScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Screens */}
        <Route path="/pet/:id" element={<PetScreen />} />
        <Route path="/cart/:id/*" element={<CartScreen />} />
        <Route path="/blog/:id/*" element={<BlogScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        {/* Admin  Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/blogs" element={<BlogsAdmin />} />
        {/* Only Admin Tasks */}{" "}
        <Route path="/create/product" element={<CreateProduct />} />
        <Route path="/create/blogs" element={<CreateBlogs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
