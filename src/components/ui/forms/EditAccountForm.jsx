/* eslint-disable react/prop-types */
import { useState } from "react";
import EditIcon from "../../../assets/icons/EditIcon";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UserBigCircleIcon from "../../../assets/icons/UserBigCircleIcon";

const EditAccountForm = ({ user, setUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "El nombre es obligatorio.";
    if (!email) errs.email = "El e-mail es obligatorio.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      errs.email = "El e-mail no es válido.";
    if (!password) errs.password = "La contraseña es obligatoria.";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}/.test(password))
      errs.password =
        "La contraseña requiere ≥6 caracteres, mayúsculas, minúsculas, números y símbolos.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setUser({ name, email, password });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-10 rounded-[22px] max-w-[800px] w-full mx-auto flex flex-col gap-4 sm:gap-5"
    >
      <div className="w-full flex items-center justify-center">
        <UserBigCircleIcon />
      </div>
      {/* Campo Nombre */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
          <EditIcon className="text-gray-600" />
          <input
            type="text"
            placeholder="Ana Brenes C."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Campo E-mail */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
          <EditIcon className="text-gray-600" />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Campo Tu contraseña */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
          <EditIcon className="text-gray-600" />
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
          />
          <button
            type="button"
            onClick={() => setShowPwd(!showPwd)}
            className="text-gray-600"
          >
            {showPwd ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password}</p>
        )}
      </div>

      {/* Botón Guardar */}
      <button
        type="submit"
        className="w-full py-2.5 sm:py-3 bg-[#ca249c] text-white font-semibold rounded-lg transition hover:opacity-90 text-sm sm:text-base"
      >
        Guardar
      </button>
    </form>
  );
};

export default EditAccountForm;
