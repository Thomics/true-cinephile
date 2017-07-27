import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state= { movieName: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovieId(this.state.movieName);
  }

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
    margin: '4vh 0 0 3%',
    fontSize: '24px'
  };

  /*End Styling*/


    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <input type="text" value={this.state.movieName} onChange={this.handleChange} style={textStyle} placeholder="Search a Movie" />
      </form>
    )
  }

}
