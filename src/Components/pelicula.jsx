import React from "react";

const Pelicula = (props) => {
  return (
    <>
      <div>{props.datos.titulo}</div>
      <div>{props.datos.genero}</div>
      <div>{props.datos.director}</div>
      <div>{props.datos.annio}</div>
      <hr />
    </>
  );
};
export default Pelicula;
