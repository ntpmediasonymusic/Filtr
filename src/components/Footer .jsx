import { FaInstagram, FaTiktok, FaSpotify } from "react-icons/fa";
import logo from "../assets/filtr_logo_white.png";

const Footer = () => {
  return (
    <footer
      className="px-6 py-8 flex flex-col items-center"
      style={{
        backgroundColor: "#0d0d0d",
        backgroundImage:
          "linear-gradient(225deg, rgb(255, 60, 172) -80%, rgb(13, 13, 13) 50%, rgb(43, 134, 197) 180%)",
      }}
    >
      {/* Logo */}
      <img src={logo} alt="Filtr Logo" className="w-16 md:w-24 mb-4" />

      {/* Redes Sociales */}
      <div className="flex space-x-5 md:space-x-9">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl md:text-5xl transition transform hover:text-gray-300 hover:scale-120"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl md:text-5xl transition transform hover:text-gray-300 hover:scale-120"
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl md:text-5xl transition transform hover:text-gray-300 hover:scale-120"
        >
          <FaSpotify />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
