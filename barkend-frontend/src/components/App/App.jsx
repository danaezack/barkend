import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../Hero/Hero.jsx";
import Home from "../Home/Home.jsx";
import Error from "../Error/Error.jsx";
import DogDetails from "../DogDetails/DogDetails.jsx";
import getAllDogs from "../../apiCalls.js";
import Favorites from "../Favorites/Favorites.jsx";
import "./App.css";

function App() {
  const storedFavorites = JSON.parse(localStorage.getItem(["favorites"])) || [];
  const [allDogs, setAllDogs] = useState([]);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(storedFavorites);

  useEffect(() => {
    getAllDogs()
      .then((data) => setAllDogs(data.dogs))
      .catch((error) => setError(error.message));
  }, []);

  function addFavorite(id) {
    const dog = allDogs.find((dog) => dog.id === id);
    const isFavorited = favorites.some((favorite) => favorite.id === id);
    if (isFavorited) {
      dog.favorited = false;
      const newFavorites = favorites.filter((favorite) => favorite.id !== id);
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      dog.favorited = true;
      const newFavorites = [...favorites, dog];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  }

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Hero allDogs={allDogs} />} />
        <Route
          path="/main"
          element={
            <Home allDogs={allDogs} setAllDogs={setAllDogs} error={error} />
          }
        />
        <Route
          path="/dog-details/:id"
          element={<DogDetails addFavorite={addFavorite} allDogs={allDogs} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;
