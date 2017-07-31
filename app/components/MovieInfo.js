import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * The MovieInfo component - contains the information about the movies.
 */
export default class MovieInfo extends React.Component {


  /**
   * @constructor
   * @param {object} props - the properties passed from the parent.
   */
  constructor(props) {
    super(props);
  }


  render() {

    var data = this.props.data;

    var movieName = data.movieName,
      movieTagline = data.tagline,
      overview = data.overview,
      featureLength = data.runtime,
      rating = data.rating,
      release = data.release,
      genre ='genre',
      movieHomepage = data.homepage,
      imdb = 'http://www.imdb.com/title/' + data.imdbId,
      amazon = 'https://www.amazon.com/s/?field-keywords=' + movieName;


    //Some of the movies don't have a genre defined, so to verify before trying to access an index I use an if statement.
    if (data.genre !== undefined) {
      if(data.genre.length > 0) {
        genre = data.genre[0].name;
      }
    }



    /*Styling*/

    //Style the information container
    var movieNameContainer = {
      color: '#fff',
      float: 'left',
      width: '52%',
      //height: '75vh',
      margin: '20px 0 0 3%',
      padding: '0 0 50px 0',
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
      letterSpacing: '1px',
      marginTop: '.5vh'
    };

    //Sets the overview font size.
    var overviewFontSize = {
      fontSize: '16px'
    };

    //Sets the overviews font size depending on the length of the overviews text.
    if( overview !== undefined ) {
      if (overview.length > 500) {
        overviewFontSize = {
          fontSize: '13px'
        };

        //Truncate the overview if it is above 500 character length.
        overview = overview.slice(0,501) + '...';
      }
    }

    //Style the overview paragraph
    var overviewStyle = {
      lineHeight: '20px',
      marginTop: '15px',
      textAlign: 'justify',
      maxHeight: '22vh',
      overflow: 'hidden'
    };

    //Style the container that holds the four movie information sections.
    var filmDetailContainer = {
      width: '50%',
      float: 'left',
      marginTop: '15px'
    };

    //Style the title of the movie information sections
    var h3 = {
      fontSize: '18px',
      borderBottom: '2px solid #fff',
      display: 'inline-block',
      marginBottom: '4px',
      lineHeight: '26px',
      width: '70%',
      color: '#ee4031'
    };

    //Style the content of the movie stats
    var movieStats = {
      fontSize: '36px'
    };

    //Styles the links at the bottom of the movie information container
    var bottomLinks = {
      color: '#fff',
      textDecoration: 'none'
    };

    //Styles the container for the links at the bottom of the movie information container
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
          {data.homepage && <a href={movieHomepage} target='_blank' style={bottomLinks}>&nbsp;&nbsp; | &nbsp;&nbsp;{movieName}'s Website</a>}
        </div>

      </div>

    )
  }

}
