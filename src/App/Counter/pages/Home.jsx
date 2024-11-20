import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex w-72 h-72 mx-auto items-center justify-center">
      <Link to="counter">
        <button className="btn btn-md lg:btn-lg bg-error text-white px-4 text-center">
          Counter App
        </button>
      </Link>
    </div>
  );
};

export default Home;
