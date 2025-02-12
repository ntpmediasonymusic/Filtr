import { useEffect, useState } from "react";
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
import logo from "../../../assets/filtr_logo_white.png";
import { useGenres } from "../../../hooks/playlists/useGenres";
import { useMoods } from "../../../hooks/playlists/useMoods";
import NavMenuItem from "./NavMenuItem";
import MobileMenu from "./MobileMenu";

const NavMenu = () => {
  const genres = useGenres();
  const moods = useMoods();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      className={`text-white px-4 py-2 md:py-0 flex items-center justify-between relative transition-all duration-300 ${
        isSticky ? "sticky top-0 z-50 bg-gray-900 shadow-md" : ""
      }`}
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <MobileMenu
          menuOptions={menuOptions}
          activeSubmenu={activeSubmenu}
          setActiveSubmenu={setActiveSubmenu}
          toggleMenu={toggleMenu}
        />
      )}
    </nav>
  );
};

export default NavMenu;
