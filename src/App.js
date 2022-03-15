import "./App.css";
import { Route, Routes } from "react-router-dom";
import DetailedMovieComponent from "./components/DetailedMovieComponent/DetailedMovieComponent";
import DetailedSuperHeroComponent from "./components/DetailedSuperHeroComponent/DetailedSuperHeroComponent";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="/detailed-movie-view" element={<DetailedMovieComponent />} />
        <Route path="/detailed-super-view" element={<DetailedSuperHeroComponent />} />
      </Routes>
    </div>
  );
}

export default App;
