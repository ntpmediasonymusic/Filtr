import { FaInstagram, FaTiktok, FaSpotify } from "react-icons/fa";
import logo from "../../assets/images/filtr_logo_white.svg";

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
      <img src={logo} alt="Filtr Logo" className="w-40 md:w-50 mb-8" />

      {/* Redes Sociales */}
      <div className="flex space-x-6 md:space-x-9 mb-6">
        <a
          href=" https://www.instagram.com/somosfiltr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-5xl md:text-5xl transition transform hover:text-gray-300 hover:scale-120"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.tiktok.com/@somosfiltr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-5xl md:text-5xl transition transform hover:text-gray-300 hover:scale-120"
        >
          <FaTiktok />
        </a>

        <a
          href="https://open.spotify.com/user/filtrcac"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-5xl md:text-5xl transition transform hover:text-gray-300 hover:scale-120"
        >
          <FaSpotify />
        </a>
      </div>

      {/* Enlaces legales */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-white text-md">
        <a
          href="/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors underline"
        >
          Términos y Condiciones
        </a>
        <span className="hidden md:inline">|</span>
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors underline"
        >
          Política de Privacidad
        </a>
      </div>
    </footer>
  );
};

export default Footer;