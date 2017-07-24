import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class MovieContainer extends Component {

  constructor(props) {
    super(props);

    console.log(10);
    console.log(props);

  }

  render() {

    var data = this.props.data;

    var poster = 'https://image.tmdb.org/t/p/w500' + data.poster;



    if ( data.poster === null ) {
      poster = 'https://image.tmdb.org/t/p/w500/3PEAkZHa8ehfUkuKbzmQNRTTAAs.jpg';
    }


    return(
      <div>
        <div>{data.movieName}</div>
        <img src={poster} />
      </div>
    )
  }

}
