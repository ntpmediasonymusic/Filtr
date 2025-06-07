import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/backendApi";
import { usePlaylists } from "../../../context/PlaylistContext";
import EnvelopeIcon from "../../../assets/icons/EnvelopeIcon";
import LockIcon from "../../../assets/icons/LockIcon";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UserBigCircleIcon from "../../../assets/icons/UserBigCircleIcon";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();
  const { refreshPlaylists } = usePlaylists();

  const validate = () => {
    const errs = {};
    if (!email) errs.email = "El e-mail es obligatorio.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      errs.email = "El e-mail no es válido.";
    if (!password) errs.password = "La contraseña es obligatoria.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Limpiar errores previos
    setErrors({});
    setApiError("");

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    try {
      const { data } = await login({ email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      // <-- refrescar playlists ahora que hay token y user
      await refreshPlaylists();
      navigate("/");
    } catch (err) {
      const status = err.response?.status;
      const msg = err.response?.data?.message || "Error inesperado.";
      if (status === 401) {
        setApiError(msg); // "Credenciales inválidas"
      } else if (status === 403) {
        setApiError(msg); // "Verifica tu correo para tener acceso"
      } else if (status === 400 && err.response.data.errors) {
        // Si el backend devolviera validación de campos, aunque normalmente no ocurre en login
        const apiErrs = {};
        err.response.data.errors.forEach((e) => {
          apiErrs[e.param] = e.msg;
        });
        setErrors(apiErrs);
      } else {
        setApiError("Ocurrió un error inesperado. Intenta de nuevo.");
        console.error(err);
      }
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

      {/* E-mail */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-3 sm:p-4 gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
            <EnvelopeIcon className="text-[#ca249c]" />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base"
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Contraseña */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-3 sm:p-4 gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
            <LockIcon className="text-[#ca249c]" />
          </div>
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base"
          />
          <button
            type="button"
            onClick={() => setShowPwd(!showPwd)}
            className="text-gray-600"
          >
            {showPwd ? (
              <FaEyeSlash className="w-4 h-4 sm:w-5.5 sm:h-5.5 text-[#ca249c] transition-transform duration-200 ease-in-out" />
            ) : (
              <FaEye className="w-4 h-4 sm:w-5 sm:h-5 text-[#ca249c] transition-transform duration-200 ease-in-out" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-xs sm:text-sm text-red-600">
            {errors.password}
          </p>
        )}
      </div>

      {/* “¿Olvidaste tu contraseña?” */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-end text-[#131517]">
        <a
          href="#"
          className="text-xs sm:text-sm font-semibold underline underline-offset-2 text-[#131517]"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      {/* Mensaje genérico de error del backend */}
      {apiError && (
        <p className="text-sm text-red-600 text-center">{apiError}</p>
      )}

      {/* Botón Entrar */}
      <button
        type="submit"
        className="w-full py-2.5 sm:py-3 bg-[#ca249c] cursor-pointer text-white font-semibold rounded-lg transition hover:opacity-90 text-sm sm:text-base"
      >
        Entrar
      </button>

      {/* Link Sign Up */}
      <div className="text-center text-[#131517] mt-1 sm:mt-2">
        <span className="text-sm sm:text-base">¿No tienes una cuenta?</span>
        <br />
        <a
          href="/signup"
          className="font-semibold text-[#131517] underline underline-offset-2 text-sm sm:text-base"
        >
          Regístrate Aquí
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
