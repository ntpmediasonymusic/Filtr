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
const NavMenuItem = ({ name, icon, route, toggleMenu }) => {
  return (
    <NavLink
      onClick={toggleMenu}
      to={route}
      className={({ isActive }) =>
        `flex items-center space-x-2 text-lg font-medium px-2 py-1 transition duration-300 ${
          isActive
            ? "text-[#f8cd28] border-b-2 border-blue-[#f8cd28]"
            : "text-white hover:text-[#ffeda8]"
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
    <nav
      className="text-white px-4 py-2 md:py-0 flex items-center justify-between relative"
      style={{
        backgroundColor: "#0d0d0d",
        backgroundImage:
          "linear-gradient(225deg, rgb(255, 60, 172) -80%, rgb(13, 13, 13) 50%, rgb(43, 134, 197) 180%)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo Filtr" className="w-12 md:w-20" />
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
              toggleMenu={toggleMenu}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
