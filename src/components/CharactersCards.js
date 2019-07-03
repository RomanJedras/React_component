import React from "react";
import CharacterCard from "./CharacterCard/CharacterCard";
import FetchError from "./shared/FetchError/FetchError";
import LoadingSpinner from "./shared/LoadingSpinner/LoadingSpinner";
const CharactersCards = ({ characters, error, loadimg }) => {
  console.log(error)
  if (error) {
    //Zwracamy komponent FetchError
    return <FetchError/>
  } else if (loadimg) {
    //Zwracam komponent loadingSpinner
    return <LoadingSpinner/>
  }
  
    return characters.map(({ name, image, species, gender }) => (
      <CharacterCard
        name={name}
        image={image}
        species={species}
        gender={gender}
        key={name}
      />
    ));
  
}

export default CharactersCards;