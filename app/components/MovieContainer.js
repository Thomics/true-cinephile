import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var backgroundPoster;


/**
 * The MovieContainer component - container for the poster image and movie information content
 */
export default class MovieContainer extends React.Component {


  /**
   * @constructor
   * @param {object} props - the properties passed from the parent.
   */
  constructor(props) {
    super(props);
  }


  componentDidUpdate() {
    //Sets the background image of the site.
    document.body.style.background = 'linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 50%,#000 84%), url(' + backgroundPoster + ') center / cover no-repeat';
  }


  render() {

    var data = this.props.data;

    var poster = 'https://image.tmdb.org/t/p/w500' + data.poster;
    backgroundPoster = 'https://image.tmdb.org/t/p/original' + data.backdrop;


    /*Styling*/

    var posterStyle = {
      background: `url(${backgroundPoster}) center / cover no-repeat`,
      height: '100%',
      maxHeight: '750px',
      maxWidth: '43%',
      float: 'left'
    };

    if (data.poster === undefined) {
      posterStyle.background = ''
    }

    /*End Styling*/


    return(
      <a target='_blank'><img src={poster} style={posterStyle} alt='Movie Poster' /></a>
    )
  }

}
