
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImCheckmark2 } from "react-icons/im";

const ResetPasswordSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div
      className="bg-white
                 p-5 sm:p-[40px] rounded-[22px] max-w-[800px] w-full
                 mx-auto flex flex-col gap-4 sm:gap-5"
    >
      <div className="w-full flex flex-col items-center gap-4">
        <div className="w-16 h-16 flex items-center justify-center bg-[#ca249c] rounded-full">
          <ImCheckmark2 className="text-white w-12 h-12" />
        </div>
        <h2 className="text-center text-2xl font-bold">
          Tu contraseña se ha actualizado exitosamente
        </h2>
        <p className="text-center leading-tight sm:leading-normal text-sm">
          inicia sesión con tu nueva contraseña.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => navigate("/login")}
          className="flex-1 py-3 bg-[#ca249c] cursor-pointer text-white font-semibold rounded-lg transition text-sm sm:text-base"
        >
          ACCEDER
        </button>

        <p className="text-center leading-tight sm:leading-normal text-sm">
          y vuelve a disfrutar de tus playlist favoritas.
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordSuccess;
