/* eslint-disable react/prop-types */

export default function GenresHeader({
  genres,
  selectedGenre,
  setSelectedGenre,
}) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {genres.map((genre) => {
          const isSelected = genre.name === selectedGenre?.name;
          return (
            <div
              key={genre.name}
              onClick={() => setSelectedGenre(genre)}
              style={{ backgroundColor: genre.backgroundColor }}
              className={`
                cursor-pointer rounded-xl border-4
                ${isSelected ? "border-[#ffffff]" : "border-transparent"}
                hover:border-[#ffffff] transition-colors
              `}
            >
              <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32">
                <span
                  className="font-modak text-lg sm:text-xl md:text-2xl whitespace-nowrap"
                  style={{ color: genre.textColor }}
                >
                  {genre.abbreviation}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
