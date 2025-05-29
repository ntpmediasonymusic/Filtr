/* eslint-disable react/prop-types */

import { FaChevronDown, FaTimes, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileMenu = ({
  menuOptions,
  activeSubmenu,
  setActiveSubmenu,
  toggleMenu,
}) => {
  // Helper para leer exp del JWT
  const getTokenExp = (bearerToken) => {
    try {
      const token = bearerToken.split(" ")[1];
      const payload = token.split(".")[1];
      const decoded = JSON.parse(window.atob(payload));
      return decoded.exp;
    } catch {
      return null;
    }
  };

  // Comprueba si hay token válido
  const token = localStorage.getItem("token");
  let isAuthenticated = false;
  if (token) {
    const exp = getTokenExp(token);
    if (exp && exp * 1000 > Date.now()) {
      isAuthenticated = true;
    }
  }

  return (
    <div className="absolute top-16 right-0 w-2/3 bg-gray-800 p-4 flex flex-col space-y-4 md:hidden z-10 shadow-lg">
      {menuOptions.map((option) => (
        <div key={option.name} className="relative">
          {option.submenu ? (
            <button
              className="flex items-center justify-between p-2 text-lg text-white cursor-pointer hover:text-yellow-400 w-full"
              onClick={() =>
                activeSubmenu === option.name
                  ? setActiveSubmenu(null)
                  : setActiveSubmenu(option.name)
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
                location.pathname === option.route
                  ? "text-[#f8cd28] border-b-2 border-[#f8cd28]"
                  : "text-white hover:text-[#ffeda8]"
              }`}
            >
              <span className="text-xl">{option.icon}</span>
              <span>{option.name}</span>
            </NavLink>
          )}
          {activeSubmenu === option.name && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-4 p-6 z-20">
              <button
                onClick={() => setActiveSubmenu(null)}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                <FaTimes />
              </button>
              {option.submenu.map((item) => (
                <NavLink
                  key={item}
                  onClick={() => {
                    setActiveSubmenu(null);
                    toggleMenu();
                  }}
                  to={`/${
                    option.name === "Géneros" ? "genres" : "moods"
                  }?title=${encodeURIComponent(item)}`}
                  className="text-white text-lg hover:text-yellow-400"
                >
                  {item}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
      
      {/* Separador */}
      {!isAuthenticated && <div className="border-t border-gray-600 my-2"></div>}
      
      {/* Opciones de autenticación */}
      {!isAuthenticated && (
        <>
          <NavLink
            to="/login"
            onClick={toggleMenu}
            className="flex items-center space-x-2 text-lg font-medium px-2 py-2 text-white hover:text-[#ffeda8] transition duration-300"
          >
            <FaSignInAlt className="text-xl" />
            <span>Login</span>
          </NavLink>
          
          <NavLink
            to="/signup"
            onClick={toggleMenu}
            className="flex items-center space-x-2 text-lg font-medium px-2 py-2 text-white hover:text-[#ffeda8] transition duration-300"
          >
            <FaUserPlus className="text-xl" />
            <span>Sign Up</span>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default MobileMenu;