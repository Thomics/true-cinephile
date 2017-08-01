import React from 'react';
import ReactDOM from 'react-dom';

/**
 * The Search component - an input that allows the user to search for a movie
 */
export default class Search extends React.Component {

  /**
   * @constructor
   * @param {object} props - the properties passed from the parent.
   */
  constructor(props) {
    super(props);
    this.state= { movieName: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  /**
   * When the user submits a movie, searches for the movie by name.
   * @param {object} event - the event object for when the user submits a movie.
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovieId(this.state.movieName);
  }

  /**
   * When there is a change in the search bar, sets the movieName prop.
   * @param {object} event - the event object for when the user types in the search bar.
   */
  handleChange(event) {
    this.setState({movieName: event.target.value});
  }



  render() {


  /*Styling*/

    //Style the form
    var formStyle = {
      margin: '0 auto'
    };

    //Styling the input for the movie search
    var textStyle = {
      border: 'none',
      borderBottom: '1px solid rgba(255,255,255,.8)',
      background: 'rgba(0,0,0,0)',
      width: '50%',
      color: '#fff',
      float: 'left',
      marginTop: '5vh',
      margin: '20px 0 0 3%',
      fontSize: '24px',
      fontFamily: 'Roboto, sans-serif'
    };

    /*End Styling*/


    return (
      <form
        onSubmit={this.handleSubmit}
        style={formStyle}
      >
        <input
          type="text"
          value={this.state.movieName}
          onChange={this.handleChange}
          placeholder="Search a Movie"
          style={textStyle}
        />
      </form>
    )
  }

}
