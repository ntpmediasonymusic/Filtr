/* eslint-disable react/prop-types */
import { useState } from "react";
import placeholderImg from "../../../assets/images/placeholder-profile-image.png";
import EditIcon from "../../../assets/icons/EditIcon";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
    if (!password) errs.password = "La clave es obligatoria.";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}/.test(password))
      errs.password =
        "La clave requiere ≥6 caracteres, mayúsculas, minúsculas, números y símbolos.";
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
      className="bg-gradient-to-b from-[#00DAF0] to-[#CFDD28]
                 p-10 rounded-[22px] max-w-[800px] w-full mt-6
                 flex flex-col gap-5"
    >
      {/* Avatar y botón edición */}
      <div className="flex justify-center">
        <div className="relative">
          <img
            src={placeholderImg}
            alt="Perfil"
            className="w-50 h-50 rounded-full border-4 border-white object-cover"
          />
          <button
            type="button"
            className="absolute bottom-0 right-0 bg-white p-2 rounded-full"
          >
            <EditIcon color="#5C0F8B" width="28" height="28"/>
          </button>
        </div>
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

      {/* Campo Tu clave */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
          <EditIcon className="text-gray-600" />
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Tu clave"
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
        className="w-full py-3 bg-gradient-to-b from-[#CF239B] to-[#004FD4]
                   text-white font-semibold rounded-lg transition hover:opacity-90"
      >
        Guardar
      </button>
    </form>
  );
};

export default EditAccountForm;
