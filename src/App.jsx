import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./App/Home";
import CounterApp from "./App/Counter/pages/CounterApp";


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
    element: <CounterApp />
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
