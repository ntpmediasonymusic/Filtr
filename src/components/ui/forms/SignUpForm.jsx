import { useState } from "react";
import UserIcon from "../../../assets/icons/UserIcon";
import EnvelopeIcon from "../../../assets/icons/EnvelopeIcon";
import LockIcon from "../../../assets/icons/LockIcon";
import { FaCalendarAlt, FaEye, FaEyeSlash, FaPhone } from "react-icons/fa";
import GoogleIcon from "../../../assets/icons/GoogleIcon";
import FacebookIcon from "../../../assets/icons/FacebookIcon";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [listening, setListening] = useState("");
  const [optInSony, setOptInSony] = useState(false);
  const [optInFiltr, setOptInFiltr] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState({});

  const countries = [
    "Costa Rica",
    "Panamá",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "Nicaragua",
    "Belice",
    "República Dominicana",
    "México",
    "Colombia",
  ];
  const listeningOptions = [
    "Spotify Premium",
    "Spotify Free",
    "YouTube Premium",
    "YouTube Free",
    "YouTube Music Premium",
    "YouTube Music Free",
    "Apple Music",
    "Otro",
  ];

  const validate = () => {
    const errs = {};
    if (!firstName.trim()) errs.firstName = "El nombre es obligatorio.";
    if (!lastName.trim()) errs.lastName = "Los apellidos son obligatorios.";
    if (!email) errs.email = "El correo es obligatorio.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      errs.email = "El correo no es válido.";
    if (!password) errs.password = "La clave es obligatoria.";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}/.test(password))
      errs.password =
        "La clave requiere ≥6 caracteres, mayúsculas, minúsculas, números y símbolos.";
    if (!country) errs.country = "Seleccione un país.";
    if (!birthdate) errs.birthdate = "La fecha de nacimiento es obligatoria.";
    if (!phone) errs.phone = "El teléfono es obligatorio.";
    else if (!/^\d+$/.test(phone)) errs.phone = "Sólo números permitidos.";
    if (!listening) errs.listening = "Seleccione una opción.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      console.log({
        firstName,
        lastName,
        email,
        password,
        country,
        birthdate,
        phone,
        listening,
        optInSony,
        optInFiltr,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-b from-[#00DAF0] to-[#CFDD28]
                 p-[40px] rounded-[22px] max-w-[800px] w-full
                 mx-auto flex flex-col gap-5"
    >
      {/* Nombre y Apellidos */}
      <div className="flex gap-4">
        {/* Nombre */}
        <div className="w-1/2">
          <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
            <UserIcon />
            <input
              type="text"
              placeholder="Nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>
        {/* Apellidos */}
        <div className="w-1/2">
          <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
            <UserIcon />
            <input
              type="text"
              placeholder="Apellidos"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* E-mail */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
          <EnvelopeIcon />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Contraseña */}
      <div className="w-full">
        <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
          <LockIcon />
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
          />
          <button
            type="button"
            onClick={() => setShowPwd((v) => !v)}
            className="text-gray-600"
          >
            {showPwd ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password}</p>
        )}
      </div>

      {/* País y Fecha de nacimiento */}
      <div className="flex gap-4">
        {/* País */}
        <div className="w-1/2">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full bg-white border border-[#262627] rounded-[8px] p-4 text-gray-700 focus:outline-none"
          >
            <option value="">País</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="mt-1 text-sm text-red-600">{errors.country}</p>
          )}
        </div>
        {/* Fecha de nacimiento */}
        <div className="w-1/2">
          <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
            <FaCalendarAlt />
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
          {errors.birthdate && (
            <p className="mt-1 text-sm text-red-600">{errors.birthdate}</p>
          )}
        </div>
      </div>

      {/* Teléfono y Forma de escuchar música */}
      <div className="flex gap-4">
        {/* Teléfono */}
        <div className="w-1/2">
          <div className="flex items-center bg-white border border-[#262627] rounded-[8px] p-4 gap-3">
            <FaPhone />
            <input
              type="tel"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
        {/* Forma de escuchar música */}
        <div className="w-1/2">
          <select
            value={listening}
            onChange={(e) => setListening(e.target.value)}
            className="w-full bg-white border border-[#262627] rounded-[8px] p-4 text-gray-700 focus:outline-none"
          >
            <option value="">¿Cómo escuchas música?</option>
            {listeningOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {errors.listening && (
            <p className="mt-1 text-sm text-red-600">{errors.listening}</p>
          )}
        </div>
      </div>

      {/* Opt-in Sony / Filtr */}
      <div className="flex flex-col gap-2 text-black">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={optInSony}
            onChange={() => setOptInSony((v) => !v)}
            className="w-4 h-4"
          />
          Me gustaría suscribirme y recibir más información de Sony Music
          Centroamérica y El Caribe.
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={optInFiltr}
            onChange={() => setOptInFiltr((v) => !v)}
            className="w-4 h-4"
          />
          Me gustaría suscribirme y recibir más información de Filtr
          Centroamérica y El Caribe.
        </label>
      </div>

      {/* Botón Principal */}
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-b from-[#F27CAC] to-[#5C0F8B]
                   text-white font-semibold rounded-lg transition hover:opacity-90"
      >
        Crear cuenta
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
