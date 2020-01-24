import React from 'react';
import { withRouter } from 'react-router';
import { Query } from 'react-apollo';
import { DETAIL_PAGE } from './queries';

const Detail = ({ match: { params : { movieId } } }) => {
  console.log(movieId);
  return <Query query={DETAIL_PAGE}>
    {({ loading, data, error}) => {
        if(loading) return 'loading';
        if(error) return 'error';
       return <div>
         <h1>{data.movie.title}</h1>
         <img src={data.movie.medium_cover_image} alt={data.movie.title}></img>
         <div>rating: {data.movie.rating}</div>
         <div>genres: {data.movie.genres}</div>
         <p>description: {data.movie.description_intro}</p>
       </div>
    }}
  </Query>
};

export default withRouter(Detail);