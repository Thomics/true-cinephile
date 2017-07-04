
import React, { Component } from 'react';
import MovieContainer from './MovieContainer';


export default class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
      movieID: 489 //Default movie
    }
  }

  //fetchApi={this.fetchApi('https://api.themoviedb.org/3/movie/489?api_key=f6d14169d40228dbf6f63c2a7f56ce70')}
  render() {
    return (
      <div>
        <MovieContainer>Hello world</MovieContainer>
      </div>
    );
  }

  fetchApi(url) {

    fetch(url).then((res) => res.json()).then((data) => {
      console.log(data);

      this.setState = ({
        backdrop: data.backdrop_path,
        budget: data.budget,
        genre: data.genres,
        homepage: data.homepage,
        imdbId: data.imdb_id,
        movieID: data.id,
        original_title: data.original_title,
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


}
