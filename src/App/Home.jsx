import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-wrap w-[80%] gap-4 h-72 mx-auto items-center justify-center">
      <Link to="counter">
        <button className="btn btn-md lg:btn-lg bg-error text-white px-4 text-center">
          Counter App
        </button>
      </Link>
      <Link to="movielist">
        <button className="btn btn-md lg:btn-lg bg-slate-500 text-white px-4 text-center">
          Movie List App
        </button>
      </Link>
      <Link to="form">
        <button className="btn btn-md lg:btn-lg bg-green-500 text-white px-4 text-center">
          Form
        </button>
      </Link>
    </div>
  );
};

export default Home;
