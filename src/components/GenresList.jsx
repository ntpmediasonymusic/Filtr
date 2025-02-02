import { useGenres } from "../hooks/useGenres";

const GenresList = () => {
  const genres = useGenres();

  return (
    <>
      <h2 className="pb-3 text-sm md:text-2xl sm:text-lg font-bold bg-gradient-to-r from-pink-600 via-yellow-600 to-violet-600 bg-clip-text text-transparent">
        Géneros
      </h2>
      <ul className="space-y-1">
        {genres.map((genre) => (
          <li
            key={genre}
            className="text-white transition duration-100 hover:text-[#f8cd28] hover:cursor-pointer"
          >
            {genre}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
