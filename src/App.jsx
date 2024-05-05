import { useState } from "react";
import Products from "./components/Products/Products";
import Create from "./components/CreateP/Create";
import "./App.css";
function App() {
  return (
    <>
      <Products />
      <Create />
    </>
  );
}

export default App;
