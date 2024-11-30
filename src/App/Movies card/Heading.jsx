import STYLES from "./movie.module.css";
const Heading = () => {
  const { trending_movie } = STYLES;
  return (
    <section className={trending_movie}>
      <h2>Trending Movies</h2>
      <p>See More</p>
    </section>
  );
};

export default Heading;
