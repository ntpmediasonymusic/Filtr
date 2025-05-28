import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/backendApi";
import EnvelopeIcon from "../../../assets/icons/EnvelopeIcon";
import LockIcon from "../../../assets/icons/LockIcon";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import UserBigCircleIcon from "../../../assets/icons/UserBigCircleIcon";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!email) errs.email = "El e-mail es obligatorio.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      errs.email = "El e-mail no es válido.";
    if (!password) errs.password = "La clave es obligatoria.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setApiError("");
    if (Object.keys(errs).length === 0) {
      try {
        const { data } = await login({ email, password });
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } catch (err) {
        if (err.response?.status === 401) {
          setApiError(err.response.data.message || "Credenciales inválidas");
        } else {
          console.error(err);
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-[22px] max-w-[800px] w-full mx-auto flex flex-col gap-5"
    >
      <div className="w-full flex items-center justify-center">
        <UserBigCircleIcon />
      </div>
      {apiError && (
        <p className="mt-2 text-sm text-red-600 text-center">{apiError}</p>
      )}
      {/* E-mail */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
          <div className="w-8 h-8 flex justify-center items-center">
            <EnvelopeIcon className="text-[#ca249c]" />
          </div>
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
          <div className="w-8 h-8 flex justify-center items-center">
            <LockIcon className="text-[#ca249c]" />
          </div>
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
            {showPwd ? (
              <FaEyeSlash className="w-5.5 h-5.5 text-[#ca249c] transition-transform duration-200 ease-in-out" />
            ) : (
              <FaEye className="w-5 h-5 text-[#ca249c] transition-transform duration-200 ease-in-out" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password}</p>
        )}
      </div>
      {/* Recordarme y Olvidaste */}
      <div className="flex justify-between items-center text-[#131517] text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 accent-[#ca249c]" />
          <span className="text-sm font-semibold text-[#131517]">
            Recordarme la clave
          </span>
        </label>
        <a href="#" className="text-sm font-semibold text-[#131517]">
          ¿Olvidaste tu clave?
        </a>
      </div>
      {/* Botón Entrar */}
      <button
        type="submit"
        className="w-full py-3 bg-[#ca249c] text-white font-semibold rounded-lg transition hover:opacity-90"
      >
        Entrar
      </button>
      {/* Link Sign Up */}
      <div className="text-center text-[#131517] mt-2">
        ¿No tienes una cuenta?<br/>
        <a href="/signup" className="font-semibold text-[#131517]">
          Regístrate Aquí
        </a>
      </div>
      {/* Separador */}
      <div className="flex items-center my-4 text-[#131517]">
        <div className="flex-1 h-px bg-[#131517]" />
        <span className="px-3 whitespace-nowrap">O continúa con:</span>
        <div className="flex-1 h-px bg-[#131517]" />
      </div>
      {/* Botones Sociales */}
      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 bg-[#004fd4] text-white rounded-lg transition hover:opacity-90"
        >
          <AiFillGoogleCircle className="w-6 h-6" /> Google
        </button>
        <button
          type="button"
          className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 bg-[#004fd4] text-white rounded-lg transition hover:opacity-90"
        >
          <MdOutlineFacebook className="w-6 h-6" /> Facebook
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
