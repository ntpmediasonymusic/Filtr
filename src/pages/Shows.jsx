import { useEffect } from "react";
import { useSortedShows } from "../hooks/shows/useSortedShows";
import ShowCard from "../components/shows/ShowCard";
import ShowsHeader from "../components/shows/ShowsHeader";
import PageHeader from "../components/ui/PageHeader";

const Shows = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const shows = useSortedShows();

  return (
    <>
      <div className="px-6 py-5 md:py-10">
        <PageHeader welcomeMsg={""} />
      </div>
      <div className="px-6">
        <ShowsHeader />
      </div>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-6 px-6 py-[50px] md:py-[50px]">
        {shows.map((show) => (
          <ShowCard key={show.showName} {...show} />
        ))}
      </div>
    </>
  );
};

export default Shows;
