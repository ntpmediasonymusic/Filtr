import playlistsData from "../../data/playlists.json";

export const useSortedPlaylists = () => {
  return playlistsData.playlists
    .slice()
    .sort((a, b) => a.priority - b.priority);
};
