import React from 'react';
import axios from 'axios';
import CharactersCards from '../components/CharactersCards';


const API_URL = 'https://rickandmortyapi.com/api/character/';


class RickAndMortyCharactersCards extends React.Component {

   constructor (props) {
     super(props)
     
     this.state = {
       characters: [],
       loadimg: true,
       error: null,
     }
   }
  
  componentDidMount() {
    axios.get(API_URL).then(({ data: { results } }) => {
      this.setState({ characters: results, loadimg: false });
    }).catch(error =>
      this.setState(error))
  }
  
 
  render() {
     const {characters, error, loadimg} = this.state;
    return <CharactersCards characters={characters} error={error} loadimg={loadimg} />;
   }
}


export default RickAndMortyCharactersCards;