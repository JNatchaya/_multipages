import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
import Animation from "./pages/Animation/Animation";
import Components from "./pages/Components/Components";
import Todo from "./pages/Todo/Todo";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { fetchProducts } from "./data/products";

import "./App.css";


//App -> Layout -> Navbar (button)
//tab -> (props)

const intTab = "home";

function App() {
  const [token, setToken] = useState(" ");
  const [role, setRole] = useState(" ");

  const [tab, setTab] = useState(" ");

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setTab(intTab);
  }, []); //First load

  useEffect(() => setProducts(fetchProducts()), []);

  useEffect(() => console.log(products), [products]);

  if (token === " ") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  products={products}
                  carts={carts}
                  tab={tab}
                  setTab={setTab}
                  setToken={setToken}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/Animation" element={<Animation />} />
              <Route path="/components" element={<Components />} />
              <Route path="/todo" element={<Todo />} />
              <Route
                path="/Products"
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path="/Carts"
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
