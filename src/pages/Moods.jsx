// import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import SearchBar from "../components/ui/SearchBar";
import PlaylistsContainerGrid from "../components/ui/PlaylistsContainerGrid";
// import Paginate from "../components/ui/Paginate";
import { usePlaylists } from "../context/PlaylistContext";
import moodsData from "../data/moods.json";
import MoodsHeader from "../components/moods/MoodsHeader";

const Moods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const location = useLocation();
  const playlists = usePlaylists();

  const [selectedMood, setSelectedMood] = useState(moodsData.moods[0]);

  const filteredPlaylists = selectedMood
    ? playlists.filter(
        (playlist) =>
          Array.isArray(playlist.moods) &&
          playlist.moods.some((mood) => mood === selectedMood.name)
      )
    : playlists;

  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchSuggestions, setSearchSuggestions] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const playlistsPerPage = 10;

  // const searchRef = useRef(null);

  // const queryParams = new URLSearchParams(location.search);
  // const moodTitle = queryParams.get("title") || "Mood no encontrado";

  // const filteredPlaylists = playlists.filter((playlist) =>
  //   playlist.moods.includes(moodTitle)
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
    <div className="flex flex-col px-6 py-[50px] md:py-[100px] gap-[35px] md:gap-[50px]">
      {/* <h2 className="text-xl md:text-3xl sm:text-xl font-bold bg-gradient-to-r from-violet-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
        {moodTitle}
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
      <MoodsHeader
        moods={moodsData.moods}
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
      />

      <PlaylistsContainerGrid currentPlaylists={filteredPlaylists} />
      {/* {pageCount > 1 && (
        <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
      )} */}
    </div>
  );
};

export default Moods;
