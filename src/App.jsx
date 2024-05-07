import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// TODO: SMENI GI VO DRUG FAJL INDEX.JS OVIE SITE
import Bookstore from "./pages/Bookstore";
import Comics from "./pages/Comics";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Footer from "./components/Footer";
// import {Categories, Comics, Bestsellers, HomePage} from "./pages"
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookstore" element={<Bookstore />} />
        <Route path="/about" element={<About />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
