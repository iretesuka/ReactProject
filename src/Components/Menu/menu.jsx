import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div>Menu</div>
      <br />
      <Link to="/buscar">Buscar</Link>
      <br />
      <Link to="/destacadas">Destacadas</Link>
      <br />
      <Link to="/peliculas">Todas</Link>
    </>
  );
};

export default Menu;
