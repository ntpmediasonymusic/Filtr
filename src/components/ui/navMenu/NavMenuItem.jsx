/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import Submenu from "./Submenu";

// Componente NavMenuItem
const NavMenuItem = ({ name, icon, route, submenu, toggleMenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const location = useLocation();
  const isActive = route && location.pathname === route; // Detecta si la opción está activa

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
          className="flex items-center space-x-2 text-lg font-medium px-2 py-1 transition duration-300 text-white hover:text-[#ffeda8] focus:outline-none"
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
          className={`flex items-center space-x-2 text-lg font-medium px-2 py-1 transition duration-300 ${
            isActive
              ? "text-[#f8cd28] border-b-2 border-[#f8cd28]"
              : "text-white hover:text-[#ffeda8]"
          }`}
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
