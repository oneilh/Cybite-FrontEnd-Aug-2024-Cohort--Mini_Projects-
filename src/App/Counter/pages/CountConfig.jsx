import React from "react";

const CountConfig = () => {
  return (
    <form className="flex flex-col justify-between gap-10 mt-16">
      <section className="flex flex justify-between">
        <div className="flex flex-col items-center gap-4">
          <label htmlFor="actionvalue">Action Value: </label>
          <input
            type="number"
            id="actionvalue"
            placeholder="1"
            className="text-6xl text-center border-2 border-gray-500 rounded-md w-[150px] h-[150px]"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <label htmlFor="startvalue">Start Value: </label>
          <input
            type="number"
            id="startvalue"
            placeholder="0"
            className="text-6xl text-center border-2 border-gray-500 rounded-md w-[150px] h-[150px]"
          />
        </div>
      </section>
      <button className="btn bg-black text-white">Confirm</button>
    </form>
  );
};

export default CountConfig;
