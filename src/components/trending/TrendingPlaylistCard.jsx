import { useState } from "react";
import PlaylistPlayButton from "../../assets/icons/PlaylistPlayButton";
import ShareModal from "../ui/modal/ShareModal";
import SharePaperPlaneIcon from "../../assets/icons/SharePaperPlaneIcon";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  addFavoritePlaylist,
  removeFavoritePlaylist,
} from "../../api/backendApi";
import { usePlaylists } from "../../context/PlaylistContext";
import LoginModal from "../ui/modal/LoginModal";
import ClipLoader from "react-spinners/ClipLoader";

/* eslint-disable react/prop-types */
const TrendingPlaylistCard = ({
  playlistName,
  urlPlaylist,
  urlCoverImage,
  isFavorite,
  index,
}) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [favorited, setFavorited] = useState(!!isFavorite);
  const { refreshPlaylists } = usePlaylists();
  const [isLoading, setIsLoading] = useState(false);

  // Datos del usuario desde localStorage
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const bearer = localStorage.getItem("token");
  const loggedIn = !!bearer && !!user?.id;

  // Extraer ID de Spotify de la URL
  const playlistId = urlPlaylist.split("/playlist/")[1].split("?")[0];

  const handleToggleFavorite = async () => {
    if (!loggedIn) {
      setShowLoginModal(true);
      return;
    }
    setIsLoading(true);
    try {
      if (!favorited) {
        await addFavoritePlaylist(user.id, playlistId);
      } else {
        await removeFavoritePlaylist(user.id, playlistId);
      }
      await refreshPlaylists();
      setFavorited(!favorited);
    } catch (err) {
      console.error("Error toggling favorite:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[800px] md:flex-row items-start bg-[#282534] rounded-lg p-4 gap-4 md:h-[240px] flex-shrink-0 md:relative">
      {/* Imagen de la playlist */}
      <a
        href={urlPlaylist}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex-shrink-0 w-full md:w-[208px]"
      >
        <PlaylistCardImage src={urlCoverImage} alt={playlistName} />
        <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <div className="w-1/2 h-1/2">
            <PlaylistPlayButton onlyArrow className="w-full h-full" />
          </div>
        </div>
      </a>

      {/* Número y título */}
      <div className="flex-1 flex flex-col min-w-0 pt-4 mb-2">
        <span
          style={{
            textShadow:
              "rgb(3, 78, 211) 2px  2px  4px, rgb(200, 37, 157) -2px  2px  4px, rgb(244, 123, 35)  2px -2px  4px, rgb(242, 124, 149)-2px -2px  4px, rgb(95, 18, 140)   2px  0px  4px, rgb(207, 221, 40)  0px  2px  4px, rgb(19, 218, 222) -2px  0px  4px",
          }}
          className="font-montserrat font-bold text-[100px] md:text-[100px] leading-[1] text-white"
        >
          {index}
        </span>
        <h6 className="text-white text-base md:text-lg font-medium mt-2 line-clamp-3 min-h-[3rem]">
          {playlistName}
        </h6>
      </div>

      {/* Acciones - Desktop: posición absoluta, Móvil: posición normal */}
      <div className="flex items-center gap-3 flex-shrink-0 w-full justify-end md:absolute md:ml-2 md:bottom-4 md:left-[232px] md:w-auto">
        <button
          onClick={handleToggleFavorite}
          className="flex-shrink-0 cursor-pointer"
        >
          {isLoading ? (
            <ClipLoader size={24} color="#FFFFFF" />
          ) : loggedIn && favorited ? (
            <FaHeart className="w-8 h-8 md:w-6 md:h-6 text-red-500 transform scale-110 transition-transform duration-200" />
          ) : (
            <FaRegHeart className="w-8 h-8 md:w-6 md:h-6 text-white transition-transform duration-200 hover:scale-110" />
          )}
        </button>
        <button
          onClick={() => setShowShareModal((v) => !v)}
          className="flex-shrink-0 cursor-pointer"
        >
          <SharePaperPlaneIcon className="w-8 h-8 md:w-6 md:h-6 text-white" />
        </button>
      </div>

      {showShareModal && (
        <ShareModal
          link={urlPlaylist}
          onClose={() => setShowShareModal(false)}
        />
      )}

      {/* Modal de Login */}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          message={
            "Para guardar tus playlist favoritas primero debes de iniciar sesión"
          }
        />
      )}
    </div>
  );
};

function PlaylistCardImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full before:block before:pt-[100%] rounded-lg overflow-hidden bg-gray-700">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-600" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-500
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
        loading="lazy"
      />
    </div>
  );
}

export default TrendingPlaylistCard;