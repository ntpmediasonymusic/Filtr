import { useGenres } from "../hooks/useGenres";
import { useMoods } from "../hooks/useMoods";

const Explore = () => {
  const genres = useGenres();
  const moods = useMoods();

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 p-6">
      {/* Contenedor Géneros y Moods en la misma fila en tablets */}
      <div className="flex flex-col md:flex-row w-full lg:w-3/5 gap-6">
        {/* Géneros */}
        <div className="bg-gray-100 p-4 rounded-lg md:w-1/2 lg:w-5/10 w-full">
          <h3 className="bg-black text-white px-3 py-1 rounded-md inline-block mb-3 text-sm">
            Géneros
          </h3>
          <ul className="space-y-2">
            {genres.map((genre) => (
              <li
                key={genre}
                className="bg-purple-100 p-2 rounded-lg text-gray-800"
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>

        {/* Moods */}
        <div className="bg-gray-100 p-4 rounded-lg md:w-1/2 lg:w-5/10 w-full">
          <h3 className="bg-black text-white px-3 py-1 rounded-md inline-block mb-3 text-sm">
            Moods
          </h3>
          <ul className="space-y-2">
            {moods.map((mood) => (
              <li
                key={mood}
                className="bg-purple-100 p-2 rounded-lg text-gray-800"
              >
                {mood}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quizzes siempre estará debajo en tablets y móviles */}
      <div className="bg-gray-100 p-4 rounded-lg md:w-full lg:w-6/10 w-full">
        <h3 className="bg-black text-white px-3 py-1 rounded-md inline-block mb-3 text-sm">
          Quizzes
        </h3>
        <p className="text-gray-800">Quizzes</p>
      </div>
    </div>
  );
};

export default Explore;
