/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import UserCircleIcon from "../../assets/icons/UserCircleIcon";
import ProfileModal from "./ProfileModal";

const PageHeader = ({ welcomeMsg }) => {
  const userName = "Ana";
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const wrapperRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showModal &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal]);

  return (
    <header className="w-full flex items-center justify-between px-6 py-10 bg-[#131517]">
      {/* Saludo */}
      <div>
        <h1 className="text-white text-lg md:text-2xl">{welcomeMsg}</h1>
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

        {/* Botón perfil */}
        <div className="relative" ref={wrapperRef}>
          <button
            onClick={() => setShowModal((v) => !v)}
            className="flex items-center gap-2 text-white text-sm md:text-base"
          >
            <span>{userName}</span>
            <UserCircleIcon className="text-white" />
          </button>

          {/* Modal de perfil */}
          {showModal && <ProfileModal onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
