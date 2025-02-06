/* eslint-disable react/prop-types */
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
  FaChevronDown,
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/filtr_logo_white.png";
import { useGenres } from "../hooks/useGenres";
import { useMoods } from "../hooks/useMoods";

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

const NavMenu = () => {
  const genres = useGenres();
  const moods = useMoods();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
  };

  const openSubmenu = (submenuName) => {
    setActiveSubmenu(submenuName);
  };

  const closeSubmenu = () => {
    setActiveSubmenu(null);
  };

  // Opciones del menú
  const menuOptions = [
    { name: "Inicio", icon: <FaHome />, route: "/" },
    { name: "Explorar", icon: <FaCompass />, route: "/explore" },
    { name: "Géneros", icon: <FaMusic />, route: "/genres", submenu: genres },
    { name: "Moods", icon: <FaSmile />, route: "/moods", submenu: moods },
    { name: "Quizzes", icon: <FaQuestionCircle />, route: "/quizzes" },
    { name: "Shows", icon: <FaTv />, route: "/shows" },
  ];

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
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo Filtr"
            className="w-12 md:w-20 cursor-pointer"
          />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {menuOptions.map((option) => (
          <NavMenuItem
            key={option.name}
            name={option.name}
            icon={option.icon}
            route={option.route}
            submenu={option.submenu}
            toggleMenu={toggleMenu}
          />
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu con NavLink y estado activo */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-2/3 bg-gray-800 p-4 flex flex-col space-y-4 md:hidden z-10 rounded-lg shadow-lg">
          {menuOptions.map((option) => {
            const isActive = option.route && location.pathname === option.route;

            return (
              <div key={option.name} className="relative">
                {option.submenu ? (
                  <button
                    className="flex items-center justify-between p-2 text-lg text-white cursor-pointer hover:text-yellow-400 w-full"
                    onClick={() =>
                      activeSubmenu === option.name
                        ? closeSubmenu()
                        : openSubmenu(option.name)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{option.icon}</span>
                      <span>{option.name}</span>
                    </div>
                    <FaChevronDown className="text-sm" />
                  </button>
                ) : (
                  <NavLink
                    to={option.route}
                    onClick={toggleMenu}
                    className={`flex items-center space-x-2 text-lg font-medium px-2 py-2 transition duration-300 ${
                      isActive
                        ? "text-[#f8cd28] border-b-2 border-[#f8cd28]"
                        : "text-white hover:text-[#ffeda8]"
                    }`}
                  >
                    <span className="text-xl">{option.icon}</span>
                    <span>{option.name}</span>
                  </NavLink>
                )}

                {/* Mobile Submenu ocupa toda la pantalla */}
                {activeSubmenu === option.name && (
                  <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-4 p-6 z-20">
                    <button
                      onClick={closeSubmenu}
                      className="absolute top-4 right-4 text-white text-3xl"
                    >
                      <FaTimes />
                    </button>
                    {option.submenu.map((item) => (
                      <div
                        key={item}
                        className="text-white text-lg hover:text-yellow-400 cursor-pointer"
                      >
                        <NavLink
                          onClick={() => {
                            closeSubmenu();
                            toggleMenu();
                          }}
                          to={`/${
                            option.name == "Géneros" ? "genres" : "moods"
                          }?title=${encodeURIComponent(item)}`}
                        >
                          {item}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
