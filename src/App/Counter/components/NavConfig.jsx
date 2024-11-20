import { NavLink } from "react-router-dom";

const NavConfig = () => {
  const active ="text-slate-800 border-b-2 border-slate-800 py-2 px-2 cursor-pointer";
  const not_active = "py-2 px-2 cursor-pointer";
  
  return (
    <div className="w-64 mx-auto mt-20 flex justify-between">
      <NavLink
        to={"/counter"}
        end
        className={({ isActive }) =>
          isActive
            ? active
            : not_active
        }
      >
        Default
      </NavLink>
      <NavLink
        to={"/counter/config"}
        className={({ isActive }) =>
          isActive
            ? active
            : not_active
        }
      >
        Config
      </NavLink>
    </div>
  );
};

export default NavConfig;
