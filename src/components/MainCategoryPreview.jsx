/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const MainCategoryPreview = ({ title, playlists }) => {
  return (
    <div>
      {/* Título y Botón */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm md:text-2xl sm:text-lg font-bold">{title}</h2>
        <button className="px-4 py-2 rounded-full bg-gray-800 text-white text-xs md:text-lg sm:text-sm hover:bg-gray-600">
          Mostrar todo
        </button>
      </div>

      {/* Contenedor de imágenes */}
      <div className="flex justify-between space-x-6 overflow-x-auto">
        {playlists.slice(0, 5).map((playlist) => (
          <div
            key={playlist.playlistName}
            className="w-30 md:w-60 sm:w-40 flex-shrink-0"
          >
            <a
              href={playlist.urlPlaylist}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              {/* Imagen de portada */}
              <img
                src={playlist.urlCoverImage}
                alt={playlist.playlistName}
                className="w-full h-auto rounded-lg"
              />

              {/* Ícono de Play (solo efecto visual) */}
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

            {/* Texto debajo de la imagen */}
            <h6 className="text-xs md:text-sm font-bold my-2">
              {playlist.playlistName}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCategoryPreview;
