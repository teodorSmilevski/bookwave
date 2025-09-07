import FilterContextProvider from "@/store/filter-items-context";
import CartContextProvider from "@/store/shopping-cart-context";

import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import Product from "@/components/ui/Product";
import ScrollToTop from "@/components/ScrollToTop";

import Bookstore from "@/pages/Bookstore";
import Comics from "@/pages/Comics";
import HomePage from "@/pages/HomePage";
import About from "@/pages/About";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
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
    </>
  );
}

export default App;
