import PlaylistCard from "./PlaylistCard";

/* eslint-disable react/prop-types */
const PlaylistsContainerGrid = ({ currentPlaylists }) => {
  return (
    <>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[14px] gap-y-[30px]">
        {currentPlaylists.length > 0 &&
          currentPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.playlistName}
              playlistName={playlist.playlistName}
              urlPlaylist={playlist.urlPlaylist}
              urlCoverImage={playlist.urlCoverImage}
            />
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
