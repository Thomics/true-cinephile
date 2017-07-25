import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var backgroundPoster;


export default class MovieContainer extends Component {

  constructor(props) {
    super(props);

    console.log(10);
    console.log(props);

  }




  render() {




    var data = this.props.data;

    var poster = 'https://image.tmdb.org/t/p/w500' + data.poster;
    backgroundPoster = 'https://image.tmdb.org/t/p/original' + data.backdrop;



    if ( data.poster === null ) {
      poster = 'https://image.tmdb.org/t/p/w500/3PEAkZHa8ehfUkuKbzmQNRTTAAs.jpg';
    }

    if ( data.backdrop === null ) {
      console.log('its null');
      backgroundPoster = 'https://image.tmdb.org/t/p/w500/wBG4kHfhwm3bLwKUFNRByXXv4r2.jpg';
    }





    /*Styling*/

    var posterStyle = {
      background: `url(${backgroundPoster}) center / cover no-repeat`,
      'maxHeight': '100%',
      float: 'left'
    };



    /*End Styling*/




    return(
      <img src={poster} style={posterStyle} />
    )
  }

  componentDidUpdate() {
    document.body.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 50%,#000 84%), url(' + backgroundPoster + ')';
  }

}
