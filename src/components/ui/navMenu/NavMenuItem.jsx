/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Submenu from "./Submenu";

// Componente NavMenuItem
const NavMenuItem = ({ name, icon, route, submenu, toggleMenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsSubmenuOpen(true)}
      onMouseLeave={() => setIsSubmenuOpen(false)}
    >
      {submenu ? (
        <button
          className="flex items-center space-x-2 text-base font-medium px-2 py-1 transition duration-300 text-[#00DAF0] hover:text-[#ffeda8] focus:outline-none"
          onClick={(e) => e.preventDefault()} // Evita la navegación
        >
          <span className="text-xl">{icon}</span>
          <span>{name}</span>
          <FaChevronDown className="ml-2 text-sm" />
        </button>
      ) : (
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
                : "text-[#00DAF0] hover:bg-[#5C0F8B] hover:font-bold hover:text-white"
            }
            `
          }
        >
          <span className="text-xl">{icon}</span>
          <span>{name}</span>
        </NavLink>
      )}

      {submenu && isSubmenuOpen && (
        <Submenu submenu={submenu} name={name} closeSubmenu={closeSubmenu} />
      )}
    </div>
  );
};
export default NavMenuItem;
