import { Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Genres from "./pages/Genres";
import Moods from "./pages/Moods";
import Quizzes from "./pages/Quizzes";
import Shows from "./pages/Shows";
import Footer from "./components/Footer ";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavMenu />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/moods" element={<Moods />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/shows" element={<Shows />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
