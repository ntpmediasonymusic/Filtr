import { useEffect } from "react";
import SignUpForm from "../components/ui/forms/SignUpForm";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-[50px] md:py-[100px]">
      <div className="text-center mb-8 max-w-md">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Vamos a registrarme
        </h2>
        <p className="text-white/80 mt-2">
          Crea tu cuenta y disfruta de contenidos y promociones exclusivas.{" "}
          <span className="text-[#CFDD28] font-semibold">
            ¡Regístrate ahora!
          </span>
        </p>
      </div>

      {/* Formulario */}
      <SignUpForm />
    </div>
  );
};

export default SignUp;
