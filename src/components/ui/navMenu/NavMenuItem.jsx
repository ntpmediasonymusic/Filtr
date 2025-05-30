/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

// Componente NavMenuItem
const NavMenuItem = ({ name, icon, route, toggleMenu }) => {
  return (
    <div className="relative">
      <NavLink
        onClick={toggleMenu}
        to={route}
        className={({ isActive }) =>
          `
            flex items-center justify-center space-x-2 text-base p-3 rounded-[8px]
            transition duration-200
            w-[122px]
            leading-none
            ${
              isActive
                ? "text-[#00DAF0] font-normal p-[11px] border border-[#00DAF0]"
                : "text-white"
            }
            `
        }
      >
        <span className="text-xl">{icon}</span>
        <span>{name}</span>
      </NavLink>
    </div>
  );
};
export default NavMenuItem;
