import React from "react";
import styled from'styled-components';

export default function CharacterCard(props) {
  return (
 <div>
  <div>
  <img src={props.character.image}/>
  </div>
  <div className = 'cardInfo'>
  <h3>Name:{props.name}</h3>,
  <p>species:{props.species}</p>,
  <p>gender:{props.gender}</p>,
  <p>location:{props.location}</p>,
  <p>status:{props.status}</p>
  </div>
  </div>
  )
}
