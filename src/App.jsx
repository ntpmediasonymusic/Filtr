import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Genres from "./pages/Genres";
import Moods from "./pages/Moods";
import Quizzes from "./pages/Quizzes";
import Shows from "./pages/Shows";
import MainCategory from "./pages/MainCategory";
import Footer from "./components/ui/Footer";
import NavMenu from "./components/ui/navMenu/NavMenu";
import { PageTitleProvider } from "./context/pageTitleContext";
import { PlaylistProvider } from "./context/PlaylistContext";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#131517]">
      <NavMenu />
      <div className="flex-1">
        <PageTitleProvider>
          <PlaylistProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/moods" element={<Moods />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/main-category" element={<MainCategory />} />
            </Routes>
          </PlaylistProvider>
        </PageTitleProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
