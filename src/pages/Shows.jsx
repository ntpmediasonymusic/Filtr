import { useEffect } from "react";
import Show from "../components/shows/Show";
import { useSortedShows } from "../hooks/shows/useSortedShows";

const Shows = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const shows = useSortedShows();
  return (
    <div className="flex flex-col gap-[50px] md:gap-[100px] px-6 py-[50px] md:py-[100px]">
      {shows.map((show) => (
        <Show key={show.showName} {...show} />
      ))}
    </div>
  );
};

export default Shows;
