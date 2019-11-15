import React,{ useState, useEffect } from'react';
import axios from'axios';
import { Link } from'react-router-dom';
import CharacterCard from'./CharacterCard';

function CharacterList (){

const [characters, setCharacters] = useState([])


useEffect(() =>{
  axios
  .get(`https://rickandmortyapi.com/api/character/`)
  .then(res => {
    setCharacters(res.data.results);
    console.log(res.data.results)
  })
.catch(err => {
console.log(err)
  })
},[]);


return (
    <section className='character-list'>
      <h2>Character List</h2>
      <Link to = '/'><button>Home</button></Link>
 
      {characters.map(char  => (
        
        <CharacterCard  
        image={char.image}
        key={char.id} 
        name={char.name}
        species={char.species}
        gender={char.gender}
        status={char.status}
        />
        )
      )}
    </section>
  )
}
export default CharacterList

