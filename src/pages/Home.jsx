import HeaderCarousel from "../components/HeaderCarousel";
import { useSortedPlaylists } from "../hooks/useSortedPlaylists";
import { useMainCategories } from "../hooks/useMainCategories";
import MainCategoryPreview from "../components/MainCategoryPreview";

const Home = () => {
  const sortedPlaylists = useSortedPlaylists();
  const mainCategories = useMainCategories();

  return (
    <>
      <div className="p-0">
        <HeaderCarousel />
      </div>

      <div className="flex flex-col gap-[20px] md:gap-[60px] p-6">
        {/* 🔄 Iterar sobre todas las categorías y generar un MainCategoryPreview */}
        {mainCategories.map((category) => {
          // Filtrar las playlists que pertenezcan a la categoría actual
          const filteredPlaylistsFilter = sortedPlaylists.filter((playlist) =>
            playlist.mainCategory.includes(category)
          );

          // Renderizar solo si hay playlists en esta categoría
          return filteredPlaylistsFilter.length > 0 ? (
            <MainCategoryPreview
              key={category} // Clave única para cada iteración
              title={category}
              playlists={filteredPlaylistsFilter}
            />
          ) : null;
        })}
      </div>
    </>
  );
};

export default Home;
