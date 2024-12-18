import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async () => {
  const response = await axios.get(API_URL);
  return response.data.results;
};

export const fetchCharacterById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};