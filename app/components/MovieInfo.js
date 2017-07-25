import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class MovieInfo extends Component {

  constructor(props) {
    super(props);
  }




  render() {

    var data = this.props.data;

    var movieName = data.movieName;
    var movieTagline = data.tagline;
    var overview = data.overview;


    /*Styling*/

    //Style the information container
    var movieNameContainer = {
      color: '#fff',
      float: 'left',
      width: '52%',
      height: '69vh',
      margin: '4vh 0 0 3%',
      padding: '3vh 0 0 0'
    };

    //Style the title of the movie
    var titleStyle = {
      fontSize: '46px',
      color: '#fff',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    };

    //Style the tagline of the movie
    var taglineStyle = {
      fontSize: '22px',
      color: '#ee4035',//#ff7676 //#ff6f69 //#ee4035 //#f96161
      letterSpacing: '2px',
      marginTop: '.5vh'
    };

    var overviewStyle = {
      fontSize: '16px',
      lineHeight: '22px',
      marginTop: '27px',
      textAlign: 'justify'
    };

    /*End Styling*/


    return(
      <div style={movieNameContainer}>

        <h1 style={titleStyle}>{movieName}</h1>
        <h2 style={taglineStyle}>{movieTagline}</h2>
        <p style={overviewStyle}>{overview}</p>

      </div>

    )
  }

}
