/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import PlaylistCard from "../ui/PlaylistCard";

const MainCategoryPreview = ({ title, playlists }) => {
  return (
    <div>
      {/* Título y Botón */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm md:text-2xl sm:text-lg font-normal text-[#00DAF0]">
          {title}
        </h2>
        <NavLink
          to={`/main-category?title=${encodeURIComponent(title)}`}
          className="text-[#B9F2CD] text-xs md:text-lg sm:text-sm hover:text-[#5AF590]"
        >
          Ver todos
        </NavLink>
      </div>

      {/* Contenedor de imágenes */}
      <div className="flex justify-between space-x-6 overflow-x-auto pb-2">
        {playlists.slice(0, 5).map((playlist) => (
          <PlaylistCard
            key={playlist.playlistName}
            playlistName={playlist.playlistName}
            urlPlaylist={playlist.urlPlaylist}
            urlCoverImage={playlist.urlCoverImage}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCategoryPreview;
