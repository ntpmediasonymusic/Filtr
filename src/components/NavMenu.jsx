import { useState } from "react";
import {
  FaBars,
  FaCompass,
  FaHome,
  FaMusic,
  FaQuestionCircle,
  FaSmile,
  FaTimes,
  FaTv,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/filtr_logo_white.png";

// Objeto menuOptions
const menuOptions = [
  { name: "Inicio", icon: <FaHome />, route: "/" },
  { name: "Explorar", icon: <FaCompass />, route: "/explore" },
  { name: "Géneros", icon: <FaMusic />, route: "/genres" },
  { name: "Moods", icon: <FaSmile />, route: "/moods" },
  { name: "Quizzes", icon: <FaQuestionCircle />, route: "/quizzes" },
  { name: "Shows", icon: <FaTv />, route: "/shows" },
];

// Componente NavMenuItem
// eslint-disable-next-line react/prop-types
const NavMenuItem = ({ name, icon, route }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `flex items-center space-x-2 text-lg font-medium px-2 py-1 transition duration-300 ${
          isActive
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-white hover:text-blue-300"
        }`
      }
    >
      <span className="text-xl">{icon}</span>
      <span>{name}</span>
    </NavLink>
  );
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-0 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo Filtr" className="w-20" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {menuOptions.map((option) => (
          <NavMenuItem
            key={option.name}
            name={option.name}
            icon={option.icon}
            route={option.route}
          />
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 right-0 w-2/3 bg-gray-800 p-4 flex flex-col space-y-4 md:hidden z-10">
          {menuOptions.map((option) => (
            <NavMenuItem
              key={option.name}
              name={option.name}
              icon={option.icon}
              route={option.route}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
