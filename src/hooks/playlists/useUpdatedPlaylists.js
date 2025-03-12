import { useEffect, useState } from "react";
import { fetchUpdatedPlaylists } from "../../api/fetchPlaylists";
import { useSortedPlaylists } from "./useSortedPlaylists";

export const useUpdatedPlaylists = () => {
  const [updatedPlaylists, setUpdatedPlaylists] = useState([]);
  const sortedPlaylists = useSortedPlaylists(); // Obtener el JSON original

  useEffect(() => {
    async function updatePlaylists() {
      const updated = await fetchUpdatedPlaylists(sortedPlaylists);
      setUpdatedPlaylists(updated);
    }

    updatePlaylists();
  }, [sortedPlaylists]);

  return updatedPlaylists;
};
