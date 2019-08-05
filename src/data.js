import ApolloClient, { gql } from "apollo-boost";

export const client = new ApolloClient({
  // uri: "https://movie-apollo-vs.azurewebsites.net/"
  // uri: "http://localhost:4000/"
  uri: "https://movie-apollo.herokuapp.com/"
});

export const MOVIES = gql`
  query getMovies($page: Int) {
    discoverMovies(page: $page, language: "en-US") {
      page
      total_pages
      total_results
      results {
        id
        title
        vote_count
        video
        vote_average
        popularity
        poster_path
        original_language
        original_title
        genre_ids
        backdrop_path
        adult
        overview
        release_date
      }
    }
  }
`;

export const UPCOMMING_MOVIES = gql`
  query getUpcommingMoviesQuery($page: Int) {
    getUpcommingMovies(page: $page) {
      page
      results {
        id
        poster_path
        adult
        overview
        release_date
        genre_ids
        original_title
        original_language
        title
        backdrop_path
        popularity
        vote_count
        video
        vote_average
      }
      total_pages
      total_results
    }
  }
`;

export const MOVIE = gql`
  query getMovie($id: Int) {
    getMovieDetail(id: $id, language: "en-US") {
      title
      adult
      backdrop_path
      budget
      genres {
        id
        name
      }
      homepage
      id
      imdb_id
      original_language
      original_title
      overview
      popularity
      poster_path
      production_companies {
        id
        name
        logo_path
        origin_country
      }
      production_countries {
        iso_3166_1
        name
      }
      release_date
      revenue
      runtime
      spoken_languages {
        iso_639_1
        name
      }
      status
      tagline
      title
      video
      vote_average
      vote_count
    }
  }
`;

export const TRAILERS = gql`
  query getMovieTrailer($movie_id: Int) {
    getTrailers(movie_id: $movie_id) {
      id
      results {
        id
        iso_639_1
        iso_3166_1
        key
        name
        site
        size
        type
      }
    }
  }
`;

export const BOOKS = gql`
  {
    books {
      id
      title
    }
  }
`;
