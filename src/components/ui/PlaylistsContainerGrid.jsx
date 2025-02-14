/* eslint-disable react/prop-types */
const PlaylistsContainerGrid = ({ currentPlaylists }) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[60px] gap-y-[30px]">
        {currentPlaylists.length > 0 &&
          currentPlaylists.map((playlist) => (
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
          ))}
      </div>
      {currentPlaylists.length <= 0 && (
        <p className="text-gray-500 text-sm md:text-2xl sm:text-lg text-center">
          No hay playlists disponibles.
        </p>
      )}
    </>
  );
};

export default PlaylistsContainerGrid;
