import React from "react";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import Category from "./pages/Category";
import Privacy from "./pages/Privacy";
import TermsAndConditions from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";
import VerifyEmail from "./pages/verifyEmail";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ScrollToTop />
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/category" element={<Category />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
