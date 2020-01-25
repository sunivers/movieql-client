import React from 'react';
import { withRouter } from 'react-router';
import { Query } from 'react-apollo';
import { DETAIL_PAGE } from './queries';

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
           <h1>{data.movie.title}</h1>
           <img src={data.movie.medium_cover_image} alt={data.movie.title}></img>
           <div>rating: {data.movie.rating}</div>
           <div>genres: {data.movie.genres}</div>
           <p>description: {data.movie.description_intro}</p>
         </React.Fragment>
       )
    }}
  </Query>

export default withRouter(Detail);