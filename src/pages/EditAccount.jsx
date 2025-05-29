import { useEffect, useState } from "react";
import EditAccountForm from "../components/ui/forms/EditAccountForm";

const EditAccount = () => {
  // Estado de usuario (podría venir de contexto o API)
  const [user, setUser] = useState({
    name: "Ana Brenes C.",
    email: "ana@example.com",
    password: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-[50px] md:py-[50px]">
      {/* Título y subtítulo */}
      <h2 className="text-white text-2xl md:text-3xl font-bold">Mi cuenta</h2>
      <p className="text-white/80 mt-1">{user.name}</p>

      {/* Formulario de edición */}
      <EditAccountForm user={user} setUser={setUser} />
    </div>
  );
};

export default EditAccount;
