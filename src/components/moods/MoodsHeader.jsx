/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";

export default function MoodsHeader({
  moods,
  selectedMood,
  setSelectedMood,
  filter = false,
}) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Función para verificar si se puede hacer scroll
  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrolled = container.scrollLeft > 0;
    setHasScrolled(scrolled);
    setCanScrollLeft(scrolled);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1
    );
  };

  // Manejar el drag del scroll en desktop
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      scrollContainer.classList.add("cursor-grabbing");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      e.preventDefault(); // Prevenir selección de texto
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Velocidad del scroll
      scrollContainer.scrollLeft = scrollLeft - walk;
      checkScrollButtons();
    };

    // Verificar botones al cargar y al hacer scroll
    checkScrollButtons();
    scrollContainer.addEventListener("scroll", checkScrollButtons);
    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mousemove", handleMouseMove);

    // Verificar botones cuando cambie el tamaño de la ventana
    window.addEventListener("resize", checkScrollButtons);

    return () => {
      scrollContainer.removeEventListener("scroll", checkScrollButtons);
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  // Verificar botones cuando cambien los moods
  useEffect(() => {
    checkScrollButtons();
  }, [moods]);

  const handleMoodClick = (mood) => {
    // Si el mood ya está seleccionado, lo deseleccionamos
    if (selectedMood && selectedMood.name === mood.name) {
      setSelectedMood(null);
    } else {
      setSelectedMood(mood);
    }
  };

  const scrollToLeft = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Calcular la distancia para un scroll más suave
    const scrollDistance = Math.min(container.scrollLeft, 400);
    
    container.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth'
    });
  };

  const scrollToRight = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Calcular la distancia restante
    const maxScroll = container.scrollWidth - container.clientWidth;
    const remainingScroll = maxScroll - container.scrollLeft;
    const scrollDistance = Math.min(remainingScroll, 400);
    
    container.scrollBy({
      left: scrollDistance,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full">
      {filter && moods && moods.length > 0 && (
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
          Elige un mood
        </h2>
      )}
      <div className="overflow-x-hidden overflow-y-visible">
        <div
          ref={scrollContainerRef}
          className={`flex gap-4 overflow-x-auto overflow-y-visible cursor-grab select-none pr-6 pt-2 pb-2 scrollbar-hide transition-all duration-300 ease-out ${
            hasScrolled ? 'pl-0' : 'pl-6'
          }`}
          style={{ 
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
            scrollBehavior: "smooth",
          }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Opera */
            }
          `}</style>
          {moods.map((mood) => {
            const isSelected = selectedMood && mood.name === selectedMood.name;
            return (
              <div
                key={mood.name}
                onClick={() => handleMoodClick(mood)}
                onMouseDown={(e) => e.stopPropagation()} // Evitar conflicto con el drag
                style={{ 
                  backgroundColor: mood.backgroundColor,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                className={`
                  cursor-pointer rounded-3xl box-border border-4 w-[240px] min-w-[240px] md:w-[300px] md:min-w-[300px] transform-gpu
                  ${isSelected ? "border-[#ffffff] scale-105" : "border-transparent scale-100"}
                  hover:border-[#ffffff] hover:scale-105 transition-all duration-300
                `}
              >
                <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32 px-4">
                  <span
                    className="font-oi text-2xl sm:text-2xl md:text-2xl break-words text-center leading-tight"
                    style={{
                      color: mood.textColor,
                      wordBreak: "break-word",
                      hyphens: "auto",
                    }}
                  >
                    {mood.abbreviation}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-end mt-2">
          <button
            onClick={scrollToLeft}
            disabled={!canScrollLeft}
            className={`${
              canScrollLeft 
                ? 'cursor-pointer hover:opacity-80' 
                : 'cursor-not-allowed opacity-50'
            } transition-opacity`}
          >
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <rect width="44" height="44" rx="22" fill="#252733" />
                <path d="M29 22H15M15 22L22 29M15 22L22 15" stroke="#E1E1E2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </button>
          <button
            onClick={scrollToRight}
            disabled={!canScrollRight}
            className={`${
              canScrollRight 
                ? 'cursor-pointer hover:opacity-80' 
                : 'cursor-not-allowed opacity-50'
            } transition-opacity ml-2`}
          >
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <rect width="44" height="44" rx="22" fill="#252733" />
                <path d="M15 22H29M29 22L22 15M29 22L22 29" stroke="#E1E1E2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}