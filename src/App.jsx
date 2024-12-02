import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./App/Home";
import CounterApp from "./App/Counter/pages/CounterApp";
import MovieApp from "./App/Movies card/MovieApp";
import Form from './App/Form/Form'

// error page
import ErrorPage from "./App/Counter/components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "counter",
    element: <CounterApp />,
  },
  {
    path: "movielist",
    element: <MovieApp />,
  },
  {
    path: "form",
    element: <Form/>,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
