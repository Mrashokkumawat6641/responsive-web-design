import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TopProducts from "./TopProducts";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footr";
import Popup from "./components/Popup";
import SignupPage from "./components/Signuppage"; 
import LoginPage from "./components/Loginpage"; 
import Register from "./components/Register";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderScreen from "./components/OrderScreen";
import RegisterScreen from "./components/Register";
import BlogPage from "./components/BlogPage";
import ContactUsPage from "./components/Contactus";
import AboutUsPage from "./components/AboutUs";
import CareersPage from "./components/CareerPage";
import FAQsPage from "./components/FaqsPage";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                <TopProducts />
                <Banner  />
                <Subscribe />
                <Products />
                <Testimonials />

              </>
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="registeruser" element={< Register />} />
          <Route path="/OrderScreen" element={< OrderScreen />} />
          <Route path="/BlogPage" element={< BlogPage />} />
          <Route path="/ContactUsPage" element={< ContactUsPage />} />
          <Route path="/AboutUsPage" element={< AboutUsPage />} />
          <Route path="/CareersPage" element={< CareersPage />} />
          <Route path="/FAQsPage" element={< FAQsPage />} />
        </Routes>
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};
export default App;
