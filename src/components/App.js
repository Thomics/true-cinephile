import React from 'react';
import MovieContainer from './MovieContainer';
import Search from './Search';
import MovieInfo from './MovieInfo';


/**
 * The main constructor for the app.
 */
export default class App extends React.Component {


  /**
   * @constructor
   * @param {object} props - the properties passed from the parent.
   */
  constructor(props) {
    super(props);

    this.state = {
      movieName: "Shrek", //Default movie
      movieId: "808" //Default movie
    };

    this.getMovieId = this.getMovieId.bind(this);

  }

  /**
   * Retrieves the information about the movie from the api.
   * @param {string} url - the api url
   */
  fetchApi(url) {

    //Fetches the url, sends the response back via json and then sets the state.
    fetch(url).then((response) => response.json()).then((data) => {

        this.setState({
          backdrop: data.backdrop_path,
          budget: data.budget,
          genre: data.genres,
          homepage: data.homepage,
          imdbId: data.imdb_id,
          movieId: data.id,
          movieName: data.original_title,
          overview: data.overview,
          poster: data.poster_path,
          release: data.release_date,
          revenue: data.revenue,
          runtime: data.runtime,
          tagline: data.tagline,
          rating: data.vote_average,
          voteCount: data.vote_count
        });

    });

  }


  /**
   * Retrieves the api movie id based off of the movie name.
   * @param {string} title - the title of the movie
   */
  getMovieId(title) {

    var url = `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=f6d14169d40228dbf6f63c2a7f56ce70`;

    fetch(url).then((response) => response.json()).then((data) => {

      var data = data.results[0];
      console.log(data);

      //If the movie exists search for the movie id.
      if(data) {
        this.setState({
          movieId: data.id
        });
        this.fetchApi(`https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=f6d14169d40228dbf6f63c2a7f56ce70`);
      } else {
        alert('The movie: ' + title + ' doesn\'t seem to be in the database');
      }

    });

  }


  componentDidMount() {
    this.getMovieId(this.state.movieName);
  }




  render() {


    /*Styling*/

    var movieContainerStyle = {
      width: '75%',
      maxWidth: '1100px',
      height: '90vh',
      maxHeight: '750px',
      margin: '5vh auto 0px auto',
      background: 'rgba(25,25,25,.8)'
    };

    /*End Styling*/


    return (

      <div style={movieContainerStyle}>
        <MovieContainer data= {this.state} ></MovieContainer>
        <Search movie = {this.state.movieName} getMovieId = {this.getMovieId} ></Search>
        <MovieInfo data={this.state}></MovieInfo>
      </div>

    );
  }


}
