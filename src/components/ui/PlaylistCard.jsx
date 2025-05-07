import { useState } from "react";
import PlaylistPlayButton from "../../assets/icons/PlaylistPlayButton";
import ShareIcon from "../../assets/icons/ShareIcon";
import ShareModal from "./ShareModal";

/* eslint-disable react/prop-types */
const PlaylistCard = ({ playlistName, urlPlaylist, urlCoverImage }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  return (
    <div className="flex flex-col w-30 md:w-60 sm:w-40 flex-shrink-0 bg-[#282534] rounded-lg p-3 gap-2.5">
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
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlaylistPlayButton />
        </div>
      </a>
      <div className="flex h-full w-full justify-between items-center gap-2.5">
        <h6 className="flex-1 text-xs md:text-base text-white text-left line-clamp-2">
          {playlistName}
        </h6>
        <button
          onClick={() => setShowShareModal((v) => !v)}
          className="flex-shrink-0"
        >
          <ShareIcon className="w-[27px] h-[28px] flex-shrink-0" />
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

export default PlaylistCard;
