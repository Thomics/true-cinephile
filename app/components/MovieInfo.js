import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class MovieInfo extends React.Component {

  constructor(props) {
    super(props);
  }




  render() {

    var data = this.props.data;

    var movieName = data.movieName;
    var movieTagline = data.tagline;
    var overview = data.overview;
    var featureLength = data.runtime;
    var rating = data.rating;
    var release = data.release;
    var genre ='genre';
    var movieHomepage = data.homepage;
    var imdb = 'http://www.imdb.com/title/' + data.imdbId;
    var amazon = 'https://www.amazon.com/s/?field-keywords=' + movieName;

    if (data.genre) {
      genre = data.genre[0].name;
    }








    /*Styling*/

    //Style the information container
    var movieNameContainer = {
      color: '#fff',
      float: 'left',
      width: '52%',
      height: '75vh',
      margin: '1vh 0 0 3%',
      padding: '3vh 0 0 0',
      position: 'relative'
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


    var overviewFontSize = {
      fontSize: '16px'
    };

    if( overview !== undefined ) {
      console.log(overview.length);
      if (overview.length > 500) {
        overviewFontSize = {
          fontSize: '13px'
        }
      }
    }

    //Style the overview paragraph
    var overviewStyle = {
      lineHeight: '20px',
      marginTop: '3vh',
      textAlign: 'justify',
      maxHeight: '22vh',
      overflow: 'hidden'
    };



    var filmDetailContainer = {
      width: '50%',
      float: 'left',
      marginTop: '2vh'
    };

    //Style the movie information tab
    var h3 = {
      fontSize: '18px',
      borderBottom: '2px solid #fff',
      display: 'inline-block',
      marginBottom: '4px',
      lineHeight: '26px',
      width: '70%',
      color: '#ee4031'
    };


    var movieStats = {
      fontSize: '36px'
    };

    var bottomLinks = {
      color: '#fff'
    };

    var bottomLinksContainer = {
      position: 'absolute',
      bottom: 0
    };

    /*End Styling*/


    return(
      <div style={movieNameContainer}>

        <h1 style={titleStyle}>{movieName}</h1>
        <h2 style={taglineStyle}>{movieTagline}</h2>
        <p style={Object.assign(overviewStyle, overviewFontSize)}>{overview}</p>
        <br />

        <div style={filmDetailContainer}>
          <h3 style={h3}>Feature Length</h3>
          <p style={movieStats}>{featureLength} Mins</p>
        </div>

        <div style={filmDetailContainer}>
          <h3 style={h3}>Genre</h3>
          <p style={movieStats}>{genre}</p>
        </div>

        <div style={filmDetailContainer}>
          <h3 style={h3}>Rating</h3>
          <p style={movieStats}>{rating}/10</p>
        </div>

        <div style={filmDetailContainer}>
          <h3 style={h3}>Release Date</h3>
          <p style={movieStats}>{release}</p>
        </div>

        <div style={bottomLinksContainer}>
          <a href={imdb} target='_blank' style={bottomLinks}>IMDB</a>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <a href={amazon} target='_blank' style={bottomLinks}>Search Amazon</a>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <a href={movieHomepage} target='_blank' style={bottomLinks}>{movieName}'s Website</a>
        </div>

      </div>

    )
  }

}
