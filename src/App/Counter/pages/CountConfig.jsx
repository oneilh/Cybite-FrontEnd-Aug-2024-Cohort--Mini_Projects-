import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IconContext } from "react-icons";

const CountConfig = ({ setValue, setCount, setEnableNegativeCount }) => {
  const [actionValue, setActionValue] = useState(1);
  const [startValue, setStartValue] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleAction = (e) => {
    setActionValue(e.target.value);
  };
  const handleStartValue = (e) => {
    setStartValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(actionValue);
    setValue(startValue);
    setEnableNegativeCount(isChecked);
  };

  const handleReset = () => {
    // resetting the config
    setActionValue(1);
    setStartValue(0);
    setIsChecked(false);
  };

  return (
    <form
      className="flex flex-col justify-between gap-10 pb-12"
      onSubmit={handleSubmit}
    >
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Negative Value: </span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            checked={isChecked}
            onChange={handleCheck}
          />
        </label>
      </div>

      {/* values input */}
      <section className="flex justify-between">
        <div className="flex flex-col  gap-4">
          <label htmlFor="countvalue" className="label-text">
            Count Value:
          </label>
          <input
            type="number"
            id="countvalue"
            placeholder="1"
            className="text-6xl text-center border-2 border-gray-500 rounded-md w-[120px] h-[120px]"
            onChange={handleAction}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="startvalue" className="label-text">
            Start Value:
          </label>
          <input
            type="number"
            id="startvalue"
            placeholder="0"
            className="text-6xl text-center border-2 border-gray-500 rounded-md w-[120px] h-[120px]"
            onChange={handleStartValue}
          />
        </div>
      </section>
      <section className="flex justify-between">
        <button className="btn bg-black text-white w-[75%]">Confirm</button>
        <button
          className="btn bg-black text-white w-[20%]"
          onClick={handleReset}
        >
          <IconContext.Provider
            value={{ className: "text-white text-lg text-center" }}
          >
            <GrPowerReset />
          </IconContext.Provider>
        </button>
      </section>
    </form>
  );
};

export default CountConfig;
