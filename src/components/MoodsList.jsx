import { useMoods } from "../hooks/useMoods";

const MoodsList = () => {
  const moods = useMoods();

  return (
    <>
      <h2 className="pb-3 text-sm md:text-2xl sm:text-lg font-bold bg-gradient-to-r from-pink-600 via-yellow-600 to-violet-600 bg-clip-text text-transparent">
        Moods
      </h2>
      <ul className="space-y-2">
        {moods.map((mood) => (
          <li
            key={mood}
            className="text-white transition duration-100 hover:text-[#f8cd28] hover:cursor-pointer"
          >
            {mood}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoodsList;
