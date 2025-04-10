import { createContext, useContext, useEffect, useState } from "react";
import { fetchUpdatedPlaylists } from "../api/fetchPlaylists";
import { useSortedPlaylists } from "../hooks/playlists/useSortedPlaylists";

const PlaylistContext = createContext();

// eslint-disable-next-line react/prop-types
export const PlaylistProvider = ({ children }) => {
  const sortedPlaylists = useSortedPlaylists();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const updated = await fetchUpdatedPlaylists(sortedPlaylists);
      setPlaylists(updated);
    }
    fetchData();
  }, [sortedPlaylists]);

  return (
    <PlaylistContext.Provider value={playlists}>
      {children}
    </PlaylistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePlaylists = () => {
  return useContext(PlaylistContext);
};
