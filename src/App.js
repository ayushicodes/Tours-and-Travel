import React from "react";
import "./App.css";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Hotel from "./component/Pages/Hotel";
import Contact from "./component/Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header1 from "./component/Header1";
import Footer from "./component/Footer/Footer";
import SingleHotelPage from "./component/Hotels/SingleHotelPage/SingleHotelPage";
import HotelCoverSlider from "./component/Hotels/HotelCoverSlider";

function App() {
  return (
    <BrowserRouter>
      <Header1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotelCoverSlider" element={<HotelCoverSlider />} />
        <Route
          path="/hotelCoverSlider/:productId"
          element={<SingleHotelPage />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
