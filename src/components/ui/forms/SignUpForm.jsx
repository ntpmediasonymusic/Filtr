import { useState } from "react";
import UserIcon from "../../../assets/icons/UserIcon";
import EnvelopeIcon from "../../../assets/icons/EnvelopeIcon";
import LockIcon from "../../../assets/icons/LockIcon";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleIcon from "../../../assets/icons/GoogleIcon";
import FacebookIcon from "../../../assets/icons/FacebookIcon";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        "La clave requiere al menos 6 caracteres, mayúsculas, minúsculas, números y símbolos.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Aquí llamarías a tu API de login…
      console.log({ name, email, password });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-b from-[#00DAF0] to-[#CFDD28]
                 p-[40px] rounded-[22px] max-w-[800px] w-full
                 mx-auto flex flex-col gap-5"
    >
      {/* Nombre */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
          <UserIcon />
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* E-mail */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
          <EnvelopeIcon />
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

      {/* Clave */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
          <LockIcon />
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

      {/* Botón Principal */}
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-b from-[#F27CAC] to-[#5C0F8B]
                   text-white font-semibold rounded-lg transition hover:opacity-90"
      >
        Iniciar sesión
      </button>

      {/* Separador */}
      <div className="flex items-center my-4 text-gray-700">
        <div className="flex-1 h-px bg-gray-400" />
        <span className="px-3 whitespace-nowrap">O continúa con:</span>
        <div className="flex-1 h-px bg-gray-400" />
      </div>

      {/* Botones Sociales */}
      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          className="flex-1 min-w-[200px] flex items-center justify-center gap-2
                     py-3 bg-black text-white rounded-lg transition hover:opacity-90"
        >
          <GoogleIcon /> Google
        </button>
        <button
          type="button"
          className="flex-1 min-w-[200px] flex items-center justify-center gap-2
                     py-3 bg-black text-white rounded-lg transition hover:opacity-90"
        >
          <FacebookIcon /> Facebook
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
