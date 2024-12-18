import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterById } from "../services/api";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterById(id)
      .then((data) => setCharacter(data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="character-details">
      <img src={character.image} alt={character.name} />
      <h1 style={{color: 'black'}}>{character.name}</h1>
      <p style={{color: 'black'}}><strong>Status:</strong> {character.status}</p>
      <p style={{color: 'black'}}><strong>Species:</strong> {character.species}</p>
      <p style={{color: 'black'}}><strong>Type:</strong> {character.type || "N/A"}</p>
      <p style={{color: 'black'}}><strong>Gender:</strong> {character.gender}</p>
      <p style={{color: 'black'}}><strong>Location:</strong> {character.location.name}</p>
      <p style={{color: 'black'}}><strong>First seen in:</strong> {character.origin.name}</p>
    </div>
  );
};

export default CharacterDetails;