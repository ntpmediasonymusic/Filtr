import { FaInstagram, FaTiktok, FaSpotify } from "react-icons/fa";
import logo from "../../assets/images/filtr_logo_white.png";

const Footer = () => {
  return (
    <footer
      className="px-6 py-8 flex flex-col items-center"
      style={{
        backgroundColor: "rgb(0, 79, 212)",
        backgroundImage:
          "linear-gradient(to right, rgb(202, 36, 156) 0%, rgb(202, 36, 156) 20%, rgb(0, 79, 212) 70%, rgb(0, 79, 212) 100%)",
      }}
    >
      {/* Logo */}
      <img src={logo} alt="Filtr Logo" className="w-16 md:w-24 mb-4" />

      {/* Redes Sociales */}
      <div className="flex space-x-5 md:space-x-9 mb-6">
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

      {/* Enlaces legales */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-white text-sm">
        <a
          href="https://sonymusic.co.cr/politica-de-privacidad/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          Términos y Condiciones
        </a>
        <span className="hidden md:inline">|</span>
        <a
          href="https://www.sonymusic.com/terms-and-conditions/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          Política de Privacidad
        </a>
      </div>
    </footer>
  );
};

export default Footer;