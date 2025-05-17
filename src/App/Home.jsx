import { Link } from "react-router-dom";
`
  a
  
`;
const Home = () => {
  return (
    <div className="flex flex-wrap w-[80%] gap-4 h-72 mx-auto mt-16 items-center justify-center">
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

      <a href="https://rock-paper-scissors-psi-ten.vercel.app/">
        <button className="btn btn-md lg:btn-lg bg-orange-400 text-white px-4 text-center">
          RocknPapernScissors
        </button>
      </a>
      <a href="https://day-and-night-brown.vercel.app/">
        <button className="btn btn-md lg:btn-lg bg-amber-800 text-white px-4 text-center">
          Day and Night 1
        </button>
      </a>
      <a href="https://spacetourism-seven.vercel.app/">
        <button className="btn btn-md lg:btn-lg bg-orange-600 text-white px-4 text-center">
          Space Tourism 
        </button>
      </a>
      <a href="https://feb-cohort-2025-mini-project.vercel.app/">
        <button className="btn btn-md lg:btn-lg bg-lime-500 text-white px-4 text-center">
          Day and Night 2
        </button>
      </a>
      <a href="https://feb-cohort-2025-mini-project.vercel.app/horizontalscroll.html">
        <button className="btn btn-md lg:btn-lg bg-blue-500 text-white px-4 text-center">
          Horizontalscroll
        </button>
      </a>
      <a href="https://feb-cohort-2025-mini-project.vercel.app/dom-showcase.html">
        <button className="btn btn-md lg:btn-lg bg-purple-500 text-white px-4 text-center">
          First Javascript Project
        </button>
      </a>
      <a href="https://feb-cohort-2025-mini-project.vercel.app/animal-notification-ui.html">
        <button className="btn btn-md lg:btn-lg bg-pink-500 text-white px-4 text-center">
          Animal notification UI
        </button>
      </a>
    </div>
  );
};

export default Home;
