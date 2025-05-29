import { useEffect, useState } from "react";
import PlaylistsContainerGrid from "../components/ui/PlaylistsContainerGrid";
import { usePlaylists } from "../context/PlaylistContext";
import moodsData from "../data/moods.json";
import MoodsHeader from "../components/moods/MoodsHeader";
import PageHeader from "../components/ui/PageHeader";

const Moods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const playlists = usePlaylists();

  const [selectedMood, setSelectedMood] = useState(moodsData.moods[0]);

  const filteredPlaylists = selectedMood
    ? playlists.filter(
        (playlist) =>
          Array.isArray(playlist.moods) &&
          playlist.moods.some((mood) => mood === selectedMood.name)
      )
    : playlists;

  return (
    <>
      <div className="px-6 py-10">
        <PageHeader welcomeMsg={"¿Cuál es tu mood de hoy?"} />
      </div>
      <div className="flex flex-col px-6 pb-[50px] md:pb-[50px] gap-[35px] md:gap-[50px]">
        <MoodsHeader
          moods={moodsData.moods}
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />

        <PlaylistsContainerGrid currentPlaylists={filteredPlaylists} />
      </div>
    </>
  );
};

export default Moods;
