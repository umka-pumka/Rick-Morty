import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCharacters } from "../services/api";
import "../styles/global.css";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="character-list">
      {characters.map((char) => (
        <Link key={char.id} to={`/character/${char.id}`} className="card">
          <img src={char.image} alt={char.name} />
          <div className="info">
            <h2>{char.name}</h2>
            <p>
              <strong>Status:</strong> {char.status} - {char.species}
            </p>
            <p>
              <strong>Last known location:</strong> {char.location.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;