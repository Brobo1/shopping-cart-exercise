import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Shopping } from "./components/Shopping.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { HomePage } from "./components/homepage/HomePage.jsx";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<HomePage products={products} />} />
        <Route path={"/shopping"} element={<Shopping />} />
      </Routes>
    </>
  );
}

export default App;
