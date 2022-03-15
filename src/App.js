import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const movies = useSelector((state) => state.movie);

  return (
    <div className="App">
      {movies.map((movie) => (
        <div>{movie.title}</div>
      ))}
    </div>
  );
}

export default App;
