import { Route, Routes } from "react-router-dom";
import FilterContextProvider from "./store/filter-items-context";
import CartContextProvider from "./store/shopping-cart-context";
import "./App.css";
import NavBar from "./components/NavBar";
// TODO: SMENI GI VO DRUG FAJL INDEX.JS OVIE SITE
import Bookstore from "./pages/Bookstore";
import Comics from "./pages/Comics";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Footer from "./components/Footer";
import Product from "./components/Product";
// import {Categories, Comics, Bestsellers, HomePage} from "./pages"
function App() {
  return (
    <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/bookstore"
          index
          element={
            <FilterContextProvider>
              <Bookstore />{" "}
            </FilterContextProvider>
          }
        />
        <Route path="/bookstore/:id" element={<Product />} />

        <Route path="/about" element={<About />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
