import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Peliculas from "./Components/Pelicula/peliculas";
import Header from "./Components/Header/header";
import Menu from "./Components/Menu/menu";
import Body from "./Components/Body/body";
import Footer from "./Components/Footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Menu />
      <Body />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
