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


    /*Styling*/

    var movieNameContainer = {
      color: '#fff',
      float: 'left',
      width: '47%',
      height: '69vh',
      margin: '4vh 0 0 3%',
      border: '1px solid #fff',
      padding: '3vh 3% 0 3%'
    };

    var titleStyle = {
      fontSize: '46px',
      color: '#fff',
      letterSpacing: '1px',
      textTransform: 'uppercase'

    };

    /*End Styling*/




    return(
      <div style={movieNameContainer}>

        <h1 style={titleStyle}>{movieName}</h1>
        <h2>tag{movieTagline}</h2>

      </div>

    )
  }

}
