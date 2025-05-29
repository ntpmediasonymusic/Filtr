import { useEffect, useState } from "react";
import PlaylistsContainerGrid from "../components/ui/PlaylistsContainerGrid";
import { usePlaylists } from "../context/PlaylistContext";
import GenresHeader from "../components/genres/GenresHeader";
import genresData from "../data/genres.json";
import PageHeader from "../components/ui/PageHeader";

const Genres = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const playlists = usePlaylists();

  const [selectedGenre, setSelectedGenre] = useState(genresData.genres[0]);

  const filteredPlaylists = selectedGenre
    ? playlists.filter(
        (playlist) =>
          playlist.genre && playlist.genre.includes(selectedGenre.name)
      )
    : playlists;

  return (
    <>
      <div className="px-6 py-10">
        <PageHeader welcomeMsg={"¿Qué género quieres escuchar hoy?"} />
      </div>
      <div className="flex flex-col px-6 pb-[50px] md:pb-[50px] gap-[35px] md:gap-[50px]">
        <GenresHeader
          genres={genresData.genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

        <PlaylistsContainerGrid currentPlaylists={filteredPlaylists} />
      </div>
    </>
  );
};

export default Genres;
