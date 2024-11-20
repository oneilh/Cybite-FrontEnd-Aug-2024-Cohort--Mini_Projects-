import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavConfig from "../components/NavConfig";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count == 0 ? 0 : setCount(count - 1);
  };
  return (
    <div className="w-[70%] mx-auto">
      <div className=" mt-48 flex justify-between items-center">
        <div className="text-6xl cursor-pointer" onClick={increment}>
          +
        </div>
        <div className="text-9xl">{count}</div>
        <div className="text-6xl cursor-pointer" onClick={decrement}>
          -
        </div>
      </div>

      <NavConfig />
      <Outlet />
    </div>
  );
};

export default CounterApp;
