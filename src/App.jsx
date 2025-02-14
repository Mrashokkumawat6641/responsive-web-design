import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import DarkMode from "./components/DarkMode";
import Products from "./components/Products";
import TopProducts from "./TopProducts";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import SignupPage from "./components/Signuppage"; // Ensure correct path

import AOS from "aos";
import "aos/dist/aos.css";

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
                <DarkMode />
                <Products />
                <TopProducts />
                <Banner />
                <Subscribe />
                <Products />
                <Testimonials />
                <Footer /> {/* Move Footer inside homepage route */}
              </>
            }
          />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
