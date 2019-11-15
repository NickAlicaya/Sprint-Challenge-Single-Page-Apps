import React,{ useState, useEffect } from'react';
import axios from'axios';
import { Link } from'react-router-dom';
import CharacterCard from'./CharacterCard';
import { Container, Row } from 'reactstrap';

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
  <>
  <h2>Character List</h2>
        <Link to = '/'><button>Home</button></Link>
        
  <Container fluid>
      <Row>
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
      </Row>
  </Container>
  </>
  )
}
export default CharacterList

