import React from 'react';
import styled from "styled-components"
const Card = (props) => {
  return (
    <CardDiv>{props.children}</CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px; 
  width: 90%;
  max-width: 40rem;
  padding: 2rem;
  margin: 2rem auto;
  text-align: center;
`