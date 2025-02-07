/* eslint-disable react/prop-types */
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Show = ({
  showName,
  urlShow,
  urlShowImage,
  description,
  date,
  location,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#1f1f1f] rounded-lg shadow-lg overflow-hidden p-6 md:p-12 gap-x-6">
      {/* Show Image */}
      <div className="md:w-1/3 flex justify-center">
        <a href={urlShow} target="_blank" rel="noopener noreferrer">
          <img
            src={urlShowImage}
            alt={showName}
            className="w-full object-cover rounded-lg transition transform hover:scale-105"
          />
        </a>
      </div>

      {/* Show Info */}
      <div className="md:w-2/3 flex flex-col pt-6 md:py-6">
        {/* Show Name */}
        <h2 className="text-sm md:text-2xl sm:text-lg font-bold bg-gradient-to-r from-pink-600 via-yellow-600 to-violet-600 bg-clip-text text-transparent">
          {showName}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-lg font-bold text-white mt-2 md:mt-4">
          {description}
        </p>

        {/* Date & Location */}
        <div className="flex justify-between md:justify-start items-center text-white text-sm md:text-base mt-2 md:mt-4">
          <div className="flex md:w-1/2 items-center space-x-2">
            <FaCalendarAlt className="text-yellow-400" />
            <span>{date}</span>
          </div>
          <div className="flex md:w-1/2 items-center space-x-2">
            <FaMapMarkerAlt className="text-red-400" />
            <span>{location}</span>
          </div>
        </div>

        {/* More Info Button */}
        <a href={urlShow} target="_blank" rel="noopener noreferrer" className="mt-8 md:mt-12">
          <button className="px-4 py-2 w-full bg-[#f8cd28] text-black font-bold rounded-lg hover:bg-[#ffeda8] transition cursor-pointer">
            Más Información
          </button>
        </a>
      </div>
    </div>
  );
};

export default Show;
