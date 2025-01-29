import HeaderCarousel from "../components/HeaderCarousel";
import { useSortedPlaylists } from "../hooks/useSortedPlaylists";
import { useMainCategories } from "../hooks/useMainCategories";
import { useGenres } from "../hooks/useGenres";
import { useMoods } from "../hooks/useMoods";
import { useRegions } from "../hooks/useRegions";

const Home = () => {
    const sortedPlaylists = useSortedPlaylists();
    const mainCategories = useMainCategories();
    const genres = useGenres();
    const moods = useMoods();
    const regions = useRegions();

    console.log({ sortedPlaylists });
    console.log({ mainCategories });
    console.log({ genres });
    console.log({ moods });
    console.log({ regions });

    return <div className="p-0"><HeaderCarousel/></div>;
};

export default Home;
