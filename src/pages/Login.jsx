import { useEffect } from "react";
import LoginForm from "../components/ui/forms/LoginForm";

const Login = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-[#131517] flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8 max-w-md">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Disfruta de contenidos y promociones exclusivas.
        </h2>
        <p className="text-[#CFDD28] text-lg font-semibold mt-2">¡Entrar!</p>
      </div>
      <LoginForm />
    </div>
  )
};

export default Login;