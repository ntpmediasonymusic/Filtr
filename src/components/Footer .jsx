import { FaInstagram, FaTiktok, FaSpotify } from "react-icons/fa";
import logo from "../assets/filtr_logo_black.png";

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-8 flex flex-col items-center">
      
      <div className="w-full border-t-2 border-gray-400 pb-6"></div>

      {/* Logo */}
      <img src={logo} alt="Filtr Logo" className="w-16 md:w-24 mb-4" />

      {/* Redes Sociales */}
      <div className="flex space-x-5 md:space-x-9">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-3xl md:text-5xl transition transform hover:text-gray-600 hover:scale-120"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-3xl md:text-5xl transition transform hover:text-gray-600 hover:scale-120"
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-3xl md:text-5xl transition transform hover:text-gray-600 hover:scale-120"
        >
          <FaSpotify />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
