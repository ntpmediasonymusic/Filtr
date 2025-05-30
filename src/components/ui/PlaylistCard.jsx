import { useState } from "react";
import PlaylistPlayButton from "../../assets/icons/PlaylistPlayButton";
import ShareModal from "./ShareModal";
import SharePaperPlaneIcon from "../../assets/icons/SharePaperPlaneIcon";
import { FaHeart, FaRegHeart } from "react-icons/fa";

/* eslint-disable react/prop-types */
const PlaylistCard = ({ playlistName, urlPlaylist, urlCoverImage }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const toggleFavorite = () => setFavorited((prev) => !prev);

  return (
    <div className="flex flex-col w-[100%] md:w-60 sm:w-40 flex-shrink-0 bg-[#282534] rounded-lg p-3 gap-2.5">
      <a
        href={urlPlaylist}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <img
          src={urlCoverImage}
          alt={playlistName}
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <div className="w-1/2 h-1/2">
            <PlaylistPlayButton onlyArrow className="w-full h-full" />
          </div>
        </div>
      </a>

      <div className="flex w-full justify-between items-center gap-2.5">
        <h6 className="flex-1 md:text-xs md:text-base text-white text-left line-clamp-2 min-h-[3rem]">
          {playlistName}
        </h6>

        <div className="flex items-center gap-2">
          {/* Favorite heart button */}
          <button onClick={toggleFavorite} className="flex-shrink-0 cursor-pointer">
            {favorited ? (
              <FaHeart className="w-6 h-6 text-red-500 transform scale-110 transition-transform duration-200 ease-in-out" />
            ) : (
              <FaRegHeart className="w-6 h-6 text-[#e72b36bf] transition-transform duration-200 ease-in-out" />
            )}
          </button>
          {/* Share button */}
          <button
            onClick={() => setShowShareModal((v) => !v)}
            className="flex-shrink-0 cursor-pointer"
          >
            <SharePaperPlaneIcon className="w-6 h-6 text-[#00DAF0]" />
          </button>
        </div>
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

export default PlaylistCard;
