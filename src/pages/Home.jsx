import HeaderCarousel from "../components/home/HeaderCarousel";
import MainCategoryPreview from "../components/home/MainCategoryPreview";
import PageHeader from "../components/ui/PageHeader";
import { usePlaylists } from "../context/PlaylistContext";
import { useMainCategories } from "../hooks/playlists/useMainCategories";

const Home = () => {
  const mainCategories = useMainCategories();
  const playlists = usePlaylists();

  return (
    <>
      <div className="px-6 py-10">
        <PageHeader welcomeMsg={"Ana, tu vida suena así"} />
      </div>

      <div className="px-6">
        <HeaderCarousel />
      </div>

      <div className="flex flex-col gap-[50px] md:gap-[100px] px-16 py-[50px] md:py-[100px]">
        {/* 🔄 Iterar sobre todas las categorías y generar un MainCategoryPreview */}
        {mainCategories.map((category) => {
          // Filtrar las playlists que pertenezcan a la categoría actual
          const filteredPlaylistsFilter = playlists.filter((playlist) =>
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
