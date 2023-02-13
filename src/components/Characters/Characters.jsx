import React, { useEffect, useState } from "react";
import axios from "axios";
import AddCharacter from "../AddCharacter/AddCharacter";
import "./Characters.css";
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(53);
  const getCharacters = async () => {
    try {
      //   const res = await axios.get(
      //     "https://api-rick-ymorty-production-59b0.up.railway.app/characters?page="+ page
      //   );
      const res = await axios.get(
        `https://api-rick-ymorty-production-59b0.up.railway.app/characters?page=${page}`
      );
      setCharacters(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCharacter = async (_id) => {
    const res = await axios.delete(
      `https://api-rick-ymorty-production-59b0.up.railway.app/characters/id/${_id}`
    );
    const charactersWithoutDeletedCharacter = characters.filter(
      (character) => character._id != _id
    );
    setCharacters(charactersWithoutDeletedCharacter);
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return (
    <div>
      <AddCharacter getCharacters={getCharacters} />
      {page > 1 ? (
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          anterior
        </button>
      ) : (
        <button disabled>anterior</button>
      )}

      <span>{page}</span>
      <button onClick={() => setPage(page + 1)}>siguiente</button>
      {characters.map((character) => {
        return (
          <div key={character._id} className="character">
            <p>{character.name}</p>
            <img src={character.image} alt="image" />
            <button onClick={() => deleteCharacter(character._id)}>
              Eliminar
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
