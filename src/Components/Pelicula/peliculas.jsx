import React from "react";
import Pelicula from "../pelicula";

const Peliculas = () => {
  const peliculas = [
    {
      titulo: "Terminator",
      genero: "Accion",
      director: "James Cameron",
      annio: "1996",
    },
    {
      titulo: "Ratatuille",
      genero: "Aventuras",
      director: "James Cameron",
      annio: "2000",
    },
    {
      titulo: "Avengers",
      genero: "Accion",
      director: "John Weig",
      annio: "2020",
    },
  ];
  return (
    <>
      <div>
        <h2>Peliculas</h2>
      </div>
      <div>Peliculas Contenido </div>
      {peliculas.map((pelicula) => (
        <Pelicula datos={pelicula}></Pelicula>
      ))}
    </>
  );
};
export default Peliculas;
