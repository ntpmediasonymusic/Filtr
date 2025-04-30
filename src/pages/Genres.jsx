// import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import SearchBar from "../components/ui/SearchBar";
import PlaylistsContainerGrid from "../components/ui/PlaylistsContainerGrid";
// import Paginate from "../components/ui/Paginate";
import { usePlaylists } from "../context/PlaylistContext";
import GenresHeader from "../components/genres/GenresHeader";
import genresData from "../data/genres.json";
import PageHeader from "../components/ui/PageHeader";

const Genres = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const location = useLocation();
  const playlists = usePlaylists();

  const [selectedGenre, setSelectedGenre] = useState(genresData.genres[0]);

  const filteredPlaylists = selectedGenre
    ? playlists.filter(
        (playlist) =>
          // Suponiendo que playlist.genre es un string o un array que incluya el nombre del género.
          playlist.genre && playlist.genre.includes(selectedGenre.name)
      )
    : playlists;

  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchSuggestions, setSearchSuggestions] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const playlistsPerPage = 10;

  // const searchRef = useRef(null);

  // const queryParams = new URLSearchParams(location.search);
  // const genreTitle = queryParams.get("title") || "Género no encontrado";

  // const filteredPlaylists = playlists.filter((playlist) =>
  //   playlist.genre.includes(genreTitle)
  // );

  // const filteredBySearch = filteredPlaylists.filter((playlist) =>
  //   playlist.playlistName.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const pageCount = Math.ceil(filteredBySearch.length / playlistsPerPage);
  // const offset = currentPage * playlistsPerPage;
  // const currentPlaylists = filteredBySearch.slice(
  //   offset,
  //   offset + playlistsPerPage
  // );

  // const handleSearchChange = (e) => {
  //   const value = e.target.value;
  //   setSearchTerm(value);
  //   setCurrentPage(0);

  //   if (value.length > 0) {
  //     const suggestions = filteredPlaylists
  //       .filter((playlist) =>
  //         playlist.playlistName.toLowerCase().includes(value.toLowerCase())
  //       )
  //       .map((playlist) => playlist.playlistName);
  //     setSearchSuggestions(suggestions);
  //   } else {
  //     setSearchSuggestions([]);
  //   }
  // };

  // const handlePageClick = ({ selected }) => {
  //   setCurrentPage(selected);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <>
      <div className="p-0">
        <PageHeader welcomeMsg={"Mi género de hoy es..."} />
      </div>
      <div className="flex flex-col px-6 py-[50px] md:py-[100px] gap-[35px] md:gap-[50px]">
        {/* <h2 className="text-xl md:text-3xl sm:text-xl font-bold bg-gradient-to-r from-violet-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
        {genreTitle}
      </h2>
      <SearchBar
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        searchSuggestions={searchSuggestions}
        handleSuggestionClick={(suggestion) => {
          setSearchTerm(suggestion);
          setSearchSuggestions([]);
        }}
        searchRef={searchRef}
        clearSuggestions={() => setSearchSuggestions([])}
      /> */}
        <GenresHeader
          genres={genresData.genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

        <PlaylistsContainerGrid currentPlaylists={filteredPlaylists} />
        {/* {pageCount > 1 && (
        <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
      )} */}
      </div>
    </>
  );
};

export default Genres;
