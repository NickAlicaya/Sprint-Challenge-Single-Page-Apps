import React from "react";


export default function CharacterCard(props) {
  // console.log('PROPS',props)
  return (
 <div>
  <div>
    
  <img src={props.image} alt='character images'/>
  </div>
  <div className = 'cardInfo'>
  <h3>Name:{props.name}</h3>
  <p>species:{props.species}</p>
  <p>gender:{props.gender}</p>
  <p>status:{props.status}</p>
  </div>
  </div>
  )
}
