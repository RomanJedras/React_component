import React from "react";
import CharacterCard from "./CharacterCard/CharacterCard";

const CharactersCards = ({ characters }) =>
  characters.map(({id, name, image, species, gender }) => (
    <CharacterCard
      id={id}
      name={name}
      image={image}
      species={species}
      gender={gender}
      key={name}
    />
  ));


export default CharactersCards;