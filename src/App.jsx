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
  const [popup, setPopup] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  let timeout;

  function handleAddCart(product) {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, count: p.count + 1 } : p,
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
    clearTimeout(timeout);

    const newPopup = { id: Date.now(), product: product };

    setPopup((prevState) => [...prevState, newPopup]);

    setTimeout(() => {
      setPopup((prevState) =>
        prevState.filter((popup) => popup.id !== newPopup.id),
      );
    }, 2000);
  }

  function increment(productId) {
    setCart((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, count: p.count + 1 } : p)),
    );
  }
  function decrement(productId) {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === productId && p.count > 0 ? { ...p, count: p.count - 1 } : p,
        )
        .filter((p) => p.count > 0),
    );
  }

  function totalCount() {
    return cart.reduce((acc, curr) => acc + curr.count, 0);
  }

  return (
    <>
      <NavBar count={totalCount()} />
      <Routes>
        <Route
          path={"/"}
          element={<HomePage products={products} onClick={handleAddCart} />}
        />
        <Route
          path={"/shopping"}
          element={
            <Shopping cart={cart} increment={increment} decrement={decrement} />
          }
        />
      </Routes>
      {popup.map((popup) => (
        <Popup key={popup.id} product={popup.product} />
      ))}
    </>
  );
}

export default App;
