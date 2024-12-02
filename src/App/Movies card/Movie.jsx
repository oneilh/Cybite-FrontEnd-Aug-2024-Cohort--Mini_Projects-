import React from "react";
import Star from "./Star";

const Movie = (props) => {
  // console.log(props);
  const { name, image, genre, rating, director, alt, movie, movieDetails } =
    props;

  function show(name) {
    console.log("Name of movie: ", name);
  }
  return (
    <div className={movie}>
      <img src={image} alt={alt} />
      <div className={movieDetails}>
        <h3>{name}</h3>
        <p>{genre}</p>
        <div className="flex gap-2">
          <h5>{rating}</h5>
          <Star />
        </div>
        <p>Director: {director}</p>
        <button
          onClick={() => {
            show(name);
          }}
          className="btn btn-sm md:btn-md"
        >
          Show Name
        </button>
      </div>
    </div>
  );
};

export default Movie;
