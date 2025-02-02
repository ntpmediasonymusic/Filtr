import ComingSoon from "../components/ComingSoon";
import GenresList from "../components/GenresList";
import MoodsList from "../components/MoodsList";

const Explore = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 p-6">
      <div className="flex flex-col md:flex-row w-full lg:w-3/5 gap-6">
        {/* Géneros */}
        <div className="p-4 rounded-lg md:w-1/2 lg:w-5/10 w-full">
          <GenresList />
        </div>

        {/* Moods */}
        <div className="p-4 rounded-lg md:w-1/2 lg:w-5/10 w-full">
          <MoodsList />
        </div>
      </div>

      {/* Quizzes*/}
      <div className="p-4 rounded-lg md:w-full lg:w-6/10 w-full">
        <h2 className="pb-3 text-sm md:text-2xl sm:text-lg font-bold bg-gradient-to-r from-pink-600 via-yellow-600 to-violet-600 bg-clip-text text-transparent">
          Quizzes
        </h2>
        <ComingSoon color="#8e44ad" />
      </div>
    </div>
  );
};

export default Explore;
