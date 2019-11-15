import React,{ useState, useEffect } from'react';
import axios from'axios';
import { Link } from'react-router-dom';

function CharacterList (props){
const [characters, setCharacters] = useState([])
const [query, setQuery] = useState()

useEffect(() =>{
  axios
  .get(`https://rickandmortyapi.com/api/character/`)
  .then(res => {
    setCharacters(res.data.results)
    console.log(res.data.results)
  })
.catch(err => {
console.log(err)
  })
},[]);

console.log('CHARACTERS',characters)
return (
    <section className='character-list'>
    <Link to = '/'><button>Home</button></Link>
    {/* <Link to = '/search' > */}
    
    {/* <Search character={character} setCharacter={setCharacter}/>
      {character.map((item, index) => {
        return(
        <CharacterCard item={item} key={index} /> */}
        )
        })}
    </section>
  )

}
export default CharacterList

