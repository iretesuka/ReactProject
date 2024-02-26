import React from "react";
import Peliculas from "../Pelicula/peliculas";
import { Route, Routes } from "react-router-dom";
import Favorito from "../Favorito/favorito";
import Carrito from "../Carrito/carrito";
import Destacadas from "../Pelicula/destacadas";
import Buscar from "../Pelicula/buscar";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Peliculas />} exact />
      <Route path="/peliculas" element={<Peliculas />} exact />
      <Route path="/favoritos" element={<Favorito />} exact />
      <Route path="/carrito" element={<Carrito />} exact />
      <Route path="/destacadas" element={<Destacadas />} exact />
      <Route path="/buscar" element={<Buscar />} exact />
    </Routes>
  );
};

export default Body;
