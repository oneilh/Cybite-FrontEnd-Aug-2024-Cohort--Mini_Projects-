import { Link } from "react-router-dom";
import Heading from "./Heading";
import Movie from "./Movie";
import moviesDB from "./movie db";
import STYLES from "./movie.module.css";

const MovieApp = () => {
  const { movieApp, movies, movieStyle, movieDetails } = STYLES;
  return (
    <section className={movieApp}>
      <main>
        <Heading />
        <section className={movies}>
          {/* manual use of components and Array map to dynamically update creates components */}
          {/* <Movie Trend="Hot" {...movies[0]} />
        <Movie Trend = 'Popular'{...movies[1]} />
        <Movie {...movies[2]} >
          <button>click</button>
        </Movie>
        <Movie {...movies[3]} btn={btn}/> */}

          {/* use of dynamic components */}
          {moviesDB.map((movie) => {
            const { name } = movie;
            return (
              <Movie
                {...movie}
                movieDetails={movieDetails}
                movie={movieStyle}
                key={name}
              />
            );
          })}
        </section>
        <Link to="/" className="block mt-10 text-red-500 underline">
          back
        </Link>
      </main>
    </section>
  );
};

export default MovieApp;
