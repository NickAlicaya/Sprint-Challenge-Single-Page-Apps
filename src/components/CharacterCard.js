import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';
import styled from'styled-components'



export default function CharacterCard(props) {
  // console.log('PROPS',props)

  const ToonCard = styled(Card)`
  background: gray;
  border:10px solid powderblue;
  box-sizing: border-box;
  color: black;
  width: 100%;
  
  margin: 20px;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: translate(-5px) scale(1.05);
  }
`;
  return (
   <Col sm="12" md="6" lg="4">
      <ToonCard>
        <CardImg top width="100%" src={props.image} alt="cartoon char images" />
        <CardBody>
          <CardTitle>Name:{props.name}</CardTitle>
          <CardSubtitle>species:{props.species}</CardSubtitle>
          <CardSubtitle>gender:{props.gender}</CardSubtitle>
          <CardSubtitle>status:{props.status}</CardSubtitle>
        </CardBody>
      </ToonCard>
  </Col>
  )
}
