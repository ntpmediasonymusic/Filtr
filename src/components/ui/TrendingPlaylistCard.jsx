import { useState } from "react";
import PlaylistPlayButton from "../../assets/icons/PlaylistPlayButton";
import ShareModal from "./ShareModal";
import SharePaperPlaneIcon from "../../assets/icons/SharePaperPlaneIcon";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  addFavoritePlaylist,
  removeFavoritePlaylist,
} from "../../api/backendApi";
import { usePlaylists } from "../../context/PlaylistContext";

/* eslint-disable react/prop-types */
const TrendingPlaylistCard = ({
  playlistName,
  urlPlaylist,
  urlCoverImage,
  isFavorite,
  index,
}) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [favorited, setFavorited] = useState(!!isFavorite);
  const { refreshPlaylists } = usePlaylists();

  // Datos del usuario desde localStorage
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const bearer = localStorage.getItem("token");
  const loggedIn = !!bearer && !!user?.id;

  // Extraer ID de Spotify de la URL
  const playlistId = urlPlaylist.split("/playlist/")[1].split("?")[0];

  const handleToggleFavorite = async () => {
    if (!loggedIn) return;
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
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start bg-[#282534] rounded-lg p-4 gap-4 md:h-[240px] flex-shrink-0">
      {/* Imagen de la playlist */}
      <a
        href={urlPlaylist}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex-shrink-0"
      >
        <img
          src={urlCoverImage}
          alt={playlistName}
          className="w-full h-auto md:w-[208px] md:h-[208px] rounded-lg object-cover"
        />
        <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <div className="w-14 h-14">
            <PlaylistPlayButton onlyArrow className="w-full h-full" />
          </div>
        </div>
      </a>

      {/* Número y título */}
      <div className="flex-1 flex flex-col min-w-0 pt-4">
        <span className="font-oi text-[42px] md:text-[56px] leading-[1] text-white font-normal">
          {index}
        </span>
        <h6 className="text-white text-base font-medium mt-2 max-w-[240px]">
          {playlistName}
        </h6>
      </div>

      {/* Acciones */}
      <div className="hidden md:flex items-center gap-3 flex-shrink-0 h-full">
        <button
          onClick={() => setShowShareModal((v) => !v)}
          className="cursor-pointer"
        >
          <SharePaperPlaneIcon className="w-6 h-6 text-[#00DAF0]" />
        </button>
        {loggedIn && (
          <button
            onClick={handleToggleFavorite}
            className="cursor-pointer"
          >
            {favorited ? (
              <FaHeart className="w-6 h-6 text-red-500 transform scale-110 transition-transform duration-200" />
            ) : (
              <FaRegHeart className="w-6 h-6 text-[#e72b36bf] transition-transform duration-200" />
            )}
          </button>
        )}
      </div>

      <div className="flex md:hidden justify-end w-full items-cente">
        {loggedIn && (
          <button
            onClick={handleToggleFavorite}
            className="flex-shrink-0 cursor-pointer"
          >
            {favorited ? (
              <FaHeart className="w-6 h-6 text-red-500 transform scale-110 transition-transform duration-200" />
            ) : (
              <FaRegHeart className="w-6 h-6 text-[#e72b36bf] transition-transform duration-200" />
            )}
          </button>
        )}
        <button
          onClick={() => setShowShareModal((v) => !v)}
          className="flex-shrink-0 cursor-pointer"
        >
          <SharePaperPlaneIcon className="w-6 h-6 text-[#00DAF0]" />
        </button>
      </div>

      {showShareModal && (
        <ShareModal
          link={urlPlaylist}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
};

export default TrendingPlaylistCard;