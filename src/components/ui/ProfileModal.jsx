/* eslint-disable react/prop-types */

import UserCircleIcon from "../../assets/icons/UserCircleIcon";
import { NavLink } from "react-router-dom";
import { FaHeart, FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";

const ProfileModal = ({ onClose }) => {
  return (
    <div className="absolute right-0 mt-2 flex flex-col w-[230px] bg-[#282828] p-4 rounded-[12px] text-white z-10">
      {/* Perfil info */}
      <div className="flex flex-row gap-4 mb-4">
        <div>
          <UserCircleIcon className="w-10 h-10 text-white" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Ana</span>
          <span className="text-sm text-gray-400">ana@gmail.com</span>
          <NavLink
            to="/edit-account"
            onClick={onClose}
            className="text-[#00DAF0] hover:underline text-sm"
          >
            Editar perfil
          </NavLink>
        </div>
      </div>

      <hr className="border-gray-700 mb-4" />

      {/* Mis Playlist favoritas */}
      <NavLink
        to="/"
        onClick={onClose}
        className="flex flex-row items-center gap-4 py-2 pl-2 hover:bg-white/10 rounded"
      >
        <FaHeart />
        <span>Mis Playlist favoritas</span>
      </NavLink>

      {/* Login */}
      <NavLink
        to="/login"
        onClick={onClose}
        className="flex flex-row items-center gap-4 py-2 pl-2 hover:bg-white/10 rounded"
      >
        <FaSignInAlt />
        <span>Login</span>
      </NavLink>

      {/* Sign Up */}
      <NavLink
        to="/signup"
        onClick={onClose}
        className="flex flex-row items-center gap-4 py-2 pl-2 hover:bg-white/10 rounded"
      >
        <FaUserPlus />
        <span>Sign Up</span>
      </NavLink>

      {/* Logout */}
      <button
        type="button"
        onClick={() => {
          // TODO: lógica de logout
          onClose();
        }}
        className="flex flex-row items-center gap-4 py-2 pl-2 hover:bg-white/10 rounded text-left"
      >
        <FaSignOutAlt />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default ProfileModal;
