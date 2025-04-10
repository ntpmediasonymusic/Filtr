/* eslint-disable react/prop-types */

const GenresHeader = ({ genres, selectedGenre, setSelectedGenre }) => {

  return (
    <div className="w-full flex flex-col gap-4">
      {/* LISTA DE GÉNEROS */}
      <ul className="flex overflow-x-auto pb-2 gap-8">
        {genres.map((genre) => {
          const isSelected = genre.name === selectedGenre?.name;

          return (
            <li
              key={genre.name}
              onClick={() => setSelectedGenre(genre)}
              className={`
                cursor-pointer rounded-4xl px-[1px] py-[1px] transition-colors 
                ${
                  isSelected
                    ? "text-[#B9F2CD] bg-gradient-to-r from-[#FFE94A] to-[#004FD4] p-[2px]"
                    : "text-white bg-transparent hover:bg-[#383838]"
                }
              `}
            >
              {isSelected ? (
                <span className="block bg-[#0d0d0d] rounded-4xl px-1 py-1">
                  {genre.name}
                </span>
              ) : (
                <span className="block whitespace-nowrap">{genre.name}</span>
              )}
            </li>
          );
        })}
      </ul>

      {/* CONTENEDOR DE IMÁGENES */}
      <div className="flex w-full mt-4">
        {/* Contenedor izquierdo - se oculta en pantallas pequeñas (mobile) */}
        <div className="hidden md:block w-1/2 pr-2">
          <img
            src="assets/images/genres-header/genres-header.png"
            alt="Imagen Izquierda"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Contenedor derecho - se ve en todas las pantallas, 
            pero en mobile ocupa todo el ancho (w-full) */}
        <div className="w-full md:w-1/2 pl-2">
          <img
            src={
              selectedGenre?.urlImageHeader ||
              "assets/images/genres-header/genres-header.png"
            }
            alt={selectedGenre?.name || "Imagen Derecha"}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default GenresHeader;
