/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLink } from "react-icons/md";

const ShareModal = ({ link, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(link || "");
    onClose();
  };
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-9 transition-opacity" />

      {/* Modal centered */}
      <div className="fixed inset-0 flex items-center justify-center z-10 p-4">
        <div
          ref={ref}
          className="flex flex-col gap-3 w-[300px] bg-[#282828] px-5 py-10 rounded-[12px]"
        >
          {/* Copiar Link */}
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#FFE94A] to-[#B9F2CD] rounded-[4px] w-full p-3 text-black font-semibold"
          >
            <MdLink className="w-6 h-6" />
            Copiar Link
          </button>

          {/* Redes Sociales */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center py-3 bg-[#B9F2CD] rounded"
            >
              <FaFacebook className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center py-3 bg-[#B9F2CD] rounded"
            >
              <FaInstagram className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center py-3 bg-[#B9F2CD] rounded"
            >
              <FaWhatsapp className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center py-3 bg-[#B9F2CD] rounded"
            >
              <FaTiktok className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
