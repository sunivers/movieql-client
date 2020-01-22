import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import styled from 'styled-components';
import Movie from './Movie';

const Container = styled.div`
  text-align: center;
`

const Home = () => (
  <Container>
    <Query query={HOME_PAGE}>
      {({ loading, data, error}) => {
        if(loading) return 'loading';
        if(error) return 'error';
        return data.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            image={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
          ></Movie>
        ))
      }}
    </Query>
  </Container>
);

export default Home;