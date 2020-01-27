import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 200px;
  height: 300px;
  margin: 0 50px 20px 0;
  border-radius: 15px;
  box-shadow: 2px 3px 5px 2px #aaa;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Title = styled.h1`
  background-color: rgba(0,0,0,0.6);
  color: white;
  font-size: 16px;
  font-weight: 400;
  margin-top: 200px;
  text-align: center;
`

const Movie = ({ id, image, title, rating }) => (
  <Link to={`/details/${id}`}>
    <Card image={image}>
      <Title>
        {title} <br></br>
        {rating} ⭐ 
      </Title>
    </Card>
  </Link>
);


export default Movie;