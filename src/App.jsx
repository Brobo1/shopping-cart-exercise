import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Shopping } from "./components/cart/Shopping.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { HomePage } from "./components/homepage/HomePage.jsx";
import { useEffect, useState } from "react";
import { Popup } from "./components/Popup.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  function handleAddCart(product) {
    setCart((prevState) => [...prevState, product]);
    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 1000);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path={"/"}
          element={<HomePage products={products} onClick={handleAddCart} />}
        />
        <Route path={"/shopping"} element={<Shopping cart={cart} />} />
      </Routes>
      {popup ? <Popup /> : null}
    </>
  );
}

export default App;
