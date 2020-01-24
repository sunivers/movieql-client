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
{
  movie(id: 15051) {
    id
    title
    genres
    rating
    medium_cover_image
    description_intro
  }
}
`