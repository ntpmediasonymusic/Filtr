import { useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import UserCircleIcon from "../../assets/icons/UserCircleIcon";

const PageHeader = () => {
  const userName = "Ana";
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-10 bg-[#131517]">
      {/* Saludo */}
      <div>
        <h1 className="text-white text-lg md:text-2xl">
          {userName}, tu vida suena así
        </h1>
      </div>

      {/* Zona de búsqueda + perfil */}
      <div className="flex items-center gap-6">
        {/* Barra de búsqueda */}
        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#00DAF0] to-[#004FD4]">
          <div className="flex items-center bg-[#131517] rounded-full px-3 py-1 gap-2">
            <SearchIcon />
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Buscar..."
              className="bg-transparent focus:outline-none text-white placeholder:text-gray-400 text-sm md:text-base"
            />
          </div>
        </div>

        {/* Nombre de usuario + icono */}
        <div className="flex items-center gap-2 text-[#B9F2CD] text-sm md:text-base">
          <span>{userName}</span>
          <UserCircleIcon />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
