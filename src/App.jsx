import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./App/Counter/pages/Home";

import CounterApp from "./App/Counter/pages/CounterApp";
//
import CountConfig from "./App/Counter/pages/CountConfig";

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
    children: [
      {
        path: "",
        element: <div>hello</div>,
      },
      {
        path: "config",
        element: <CountConfig />,
      },
    ],
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
