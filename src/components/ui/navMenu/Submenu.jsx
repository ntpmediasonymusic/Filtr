/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

// Componente Submenu para Desktop
const Submenu = ({ submenu, name, closeSubmenu }) => {
  return (
    <div className="absolute z-4 top-full left-0 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-auto h-auto flex flex-col gap-4">
      {submenu.map((item) => (
        <div
          key={item}
          className="w-fit transition duration-100 hover:text-[#f8cd28] cursor-pointer whitespace-nowrap"
        >
          <NavLink
            onClick={closeSubmenu}
            to={`/${
              name == "Géneros" ? "genres" : "moods"
            }?title=${encodeURIComponent(item)}`}
          >
            {item}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default Submenu;
