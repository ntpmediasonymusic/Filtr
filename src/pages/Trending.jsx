import Filter from "../components/filter/filter";
import ComingSoon from "../components/ui/ComingSoon";
import PageHeader from "../components/ui/PageHeader";
import { useSearch } from "../context/SearchContext";

const Trending = () => {

  const { searchQuery } = useSearch();

  // Si hay búsqueda activa, mostrar el componente Filter
  if (searchQuery && searchQuery.trim() !== "") {
    return <Filter />;
  }


  return (
    <>
      <div className="px-6 py-5 md:py-10">
        <PageHeader welcomeMsg={"Los playlist más Trend"} />
      </div>
      <ComingSoon color="#fddc00" />
    </>
  );
};

export default Trending;
