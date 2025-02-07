import Show from "../components/Show";
import { useSortedShows } from "../hooks/useSortedShows";

const Shows = () => {
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
