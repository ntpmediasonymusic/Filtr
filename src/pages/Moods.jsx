import { useLocation } from "react-router-dom";
import { useSortedPlaylists } from "../hooks/playlists/useSortedPlaylists";
import { useEffect } from "react";

const Moods = () => {
  const location = useLocation();
  const sortedPlaylists = useSortedPlaylists();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Obtener el valor de title desde la query string
  const queryParams = new URLSearchParams(location.search);
  const categoryTitle = queryParams.get("title") || "Categoría no encontrada";

  // Filtrar playlists por mainCategory usando el título exacto
  const filteredPlaylists = sortedPlaylists.filter((playlist) =>
    playlist.moods.includes(categoryTitle)
  );

  return (
    <div className="flex flex-col px-6 py-[50px] md:py-[100px] gap-[35px] md:gap-[50px]">
      <h2 className="text-xl md:text-3xl sm:text-xl font-bold bg-gradient-to-r from-violet-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
        {categoryTitle}
      </h2>

      {/* Contenedor de Playlists en cuadrícula flexible */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[60px] gap-y-[30px]">
        {filteredPlaylists.length > 0 ? (
          filteredPlaylists.map((playlist) => (
            <div key={playlist.playlistName} className="flex flex-col">
              <a
                href={playlist.urlPlaylist}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <img
                  src={playlist.urlCoverImage}
                  alt={playlist.playlistName}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-12 md:w-32 sm:w-22"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
              <h6 className="text-xs md:text-sm font-bold my-2 text-white text-left">
                {playlist.playlistName}
              </h6>
            </div>
          ))
        ) : (
          <p className="text-gray-400">
            No hay playlists disponibles para esta categoría.
          </p>
        )}
      </div>
    </div>
  );
};

export default Moods;
