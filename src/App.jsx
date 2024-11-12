import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Shopping } from "./components/cart/Shopping.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { HomePage } from "./components/homepage/HomePage.jsx";
import { useEffect, useState } from "react";
import { Popup } from "./components/Popup.jsx";
import { func } from "prop-types";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  let timeout;

  function handleAddCart(product) {
    setCart((prevState) => [product, ...prevState]);
    clearTimeout(timeout);

    const newPopup = { id: Date.now(), product: product };

    setPopup((prevState) => [...prevState, newPopup]);

    setTimeout(() => {
      setPopup((prevState) =>
        prevState.filter((popup) => popup.id !== newPopup.id),
      );
    }, 2000);
  }

  function increment() {}
  function decrement() {}

  console.log(cart);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path={"/"}
          element={<HomePage products={products} onClick={handleAddCart} />}
        />
        <Route
          path={"/shopping"}
          element={<Shopping cart={cart} increment={increment} />}
        />
      </Routes>
      {popup.map((popup) => (
        <Popup key={popup.id} product={popup.product} />
      ))}
    </>
  );
}

export default App;
