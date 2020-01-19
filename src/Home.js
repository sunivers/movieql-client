import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import styled from 'styled-components';

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

const Home = () => <Query query={HOME_PAGE}>
  {({ loading, data, error}) => {
    if(loading) return 'loading';
    if(error) return 'error';
    return data.movies.map(movie => (
      <Card key={movie.id} image={movie.medium_cover_image}>
        <Title>
          {movie.title} <br></br>
          {movie.rating} ⭐ 
        </Title>
      </Card>
    ))
  }}
</Query>;

export default Home;