
import React, { Component } from 'react';
import MovieContainer from './MovieContainer';
import Search from './Search';


export default class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      movieName: "Dumb and Dumber" //Default movie
    }
  }

  //fetchApi={this.fetchApi('https://api.themoviedb.org/3/movie/489?api_key=f6d14169d40228dbf6f63c2a7f56ce70')}
  render() {
    return (
      <div>
        <MovieContainer data= {this.state} ></MovieContainer>
        <Search movie = {this.state.movieName} changeMovie = {this.changeMovie.bind(this)} ></Search>
      </div>
    );
  }


  fetchApi(url) {

    console.log(url);
    console.log('This is fetchApi');

    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        var data = data.results[0];
        console.log(data);

        this.setState({
          backdrop: data.backdrop_path,
          budget: data.budget,
          genre: data.genres,
          homepage: data.homepage,
          imdbId: data.imdb_id,
          movieID: data.id,
          movieName: data.original_title,
          overview: data.overview,
          poster: data.poster_path,
          release: data.release_date,
          revenue: data.revenue,
          runtime: data.runtime,
          tagline: data.tagline,
          vote: data.vote_average,
          voteCount: data.vote_count
        });

    });

  }



  changeMovie(url) {
    this.fetchApi(url);
  }

  componentDidMount() {
    var url = `https://api.themoviedb.org/3/search/movie?query=${this.state.movieName}&api_key=f6d14169d40228dbf6f63c2a7f56ce70`;
    this.fetchApi(url);
  }


}
