/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa";
import { MdLink, MdCheck } from "react-icons/md";

const ShareModal = ({ link, title = "¡Mira esto!", imageBlob = null, onClose }) => {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link || window.location.href);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const shareWithWebAPI = async () => {
    if (!imageBlob) return false;
    
    const file = new File([imageBlob], 'share.png', { type: imageBlob.type });
    
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: title,
          text: title,
          url: link || window.location.href
        });
        onClose();
        return true;
      } catch (err) {
        console.warn('Cancelado o error en Web Share API', err);
      }
    }
    return false;
  };

  const handleShare = async (platform) => {
    if (imageBlob && await shareWithWebAPI()) return;
    
    // Fallback a URLs específicas de cada plataforma
    const pageUrl = encodeURIComponent(link || window.location.href);
    const text = encodeURIComponent(title);
    let url = "";
    
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        break;
      case "whatsapp":
        url = `https://api.whatsapp.com/send?text=${text}%20${pageUrl}`;
        break;
      case "instagram":
      case "tiktok":
        handleCopy();
        return;
    }
    
    if (url) {
      window.open(url, "_blank", "width=600,height=400");
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40 transition-opacity" />

      {/* Modal centered */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          ref={ref}
          className="flex flex-col gap-3 w-[300px] bg-[#282828] px-5 py-10 rounded-[12px] min-w-[90%] md:min-w-[400px]"
        >
          {/* Copiar Link */}
          <button
            onClick={handleCopy}
            className={`flex items-center justify-center gap-2 rounded-[4px] w-full p-3 font-semibold cursor-pointer transition-all duration-200 ${
              copied
                ? "bg-green-500 text-white"
                : "bg-[#B9F2CD] text-black hover:bg-[#a8e3bc]"
            }`}
          >
            {copied ? (
              <>
                <MdCheck className="w-6 h-6" />
                ¡Copiado!
              </>
            ) : (
              <>
                <MdLink className="w-6 h-6" />
                Copiar Link
              </>
            )}
          </button>

          {/* Redes Sociales */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => handleShare("facebook")}
              className="flex-1 flex items-center justify-center py-3 bg-[#B9F2CD] rounded cursor-pointer hover:bg-[#a8e3bc] transition-colors"
              title="Compartir en Facebook"
            >
              <FaFacebook className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={() => handleShare("whatsapp")}
              className="flex-1 flex items-center justify-center py-3 bg-[#B9F2CD] rounded cursor-pointer hover:bg-[#a8e3bc] transition-colors"
              title="Compartir en WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={() => handleShare("instagram")}
              className="flex-1 flex items-center justify-center py-3 bg-[#B9F2CD] rounded cursor-pointer hover:bg-[#a8e3bc] transition-colors"
              title="Copiar para Instagram"
            >
              <FaInstagram className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={() => handleShare("tiktok")}
              className="flex-1 flex items-center justify-center py-3 bg-[#B9F2CD] rounded cursor-pointer hover:bg-[#a8e3bc] transition-colors"
              title="Copiar para TikTok"
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