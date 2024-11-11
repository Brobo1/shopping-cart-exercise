import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage.jsx";
import { Shopping } from "./components/Shopping.jsx";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/shopping"} element={<Shopping />} />
      </Routes>
    </>
  );
}

export default App;
