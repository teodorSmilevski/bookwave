import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// TODO: SMENI GI VO DRUG FAJL INDEX.JS OVIE SITE
import Categories from "./pages/Categories";
import Comics from "./pages/Comics";
import Bestsellers from "./pages/Bestsellers";
import HomePage from "./pages/HomePage";
// import {Categories, Comics, Bestsellers, HomePage} from "./pages"
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/new-books" element={<Categories />} />
        <Route path="/bestsellers" element={<Bestsellers />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </>
  );
}

export default App;
