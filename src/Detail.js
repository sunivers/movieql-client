import React from 'react';
import { withRouter } from 'react-router';
import { Query } from 'react-apollo';
import { DETAIL_PAGE } from './queries';
import styled from 'styled-components';
import Movie from './Movie';

const Container = styled.div`
  text-align: center;
`
const Description = styled.p`
  text-align: left;
`

const Detail = ({ 
  match: { 
    params : { movieId } 
  } 
}) => <Query query={DETAIL_PAGE} variables={{ movieId }}>
    {({ loading, data, error}) => {
        if(loading) return 'loading';
        if(error) return 'error';
        return (
          <React.Fragment>
            <Container>
              <h1>{data.movie.title}</h1>
              <img src={data.movie.medium_cover_image} alt={data.movie.title}></img>
              <div>RATING: {data.movie.rating}⭐</div>
              <div>GENRES: {data.movie.genres.join(', ')}</div>
              <Description>
                <strong>DESCRIPTION</strong><br></br>
                {data.movie.description_intro}
              </Description>
            </Container>
            <h2>Suggestion</h2>
            {data.suggestions.map(movie => (
              <Movie 
                id={movie.id}
                key={movie.id}
                title={movie.title}
                image={movie.medium_cover_image}
                rating={movie.rating}
              ></Movie>
            ))}
          </React.Fragment>
        )
    }}
  </Query>

export default withRouter(Detail);