import gql from 'graphql-tag';

export const HOME_PAGE = gql`
{
  movies(limit: 50, rating: 7) {
   id
   title
   genres
   rating
   medium_cover_image
  } 
}
`
export const DETAIL_PAGE = gql`
query getMovieDetails($movieId: Int!) {
  movie(id: $movieId) {
    title
    genres
    language
    rating
    medium_cover_image
    description_intro
  }
  suggestions(id: $movieId) {
    medium_cover_image
    title
    rating
  }
}
`