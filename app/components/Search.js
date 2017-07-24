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
    this.props.changeMovie(`https://api.themoviedb.org/3/search/movie?query=${this.state.movieName}&api_key=f6d14169d40228dbf6f63c2a7f56ce70`);
  }

  handleChange(event) {
    this.setState({movieName: event.target.value});
  }



render() {


  /*Styling*/

  var formStyle = {
    width: '75%',
    margin: '0 auto'
  };


  var textStyle = {
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,.8)',
    background: 'rgba(0,0,0,0)',
    width: '61%',
    color: '#fff',
    float: 'right',
    marginTop: '5vh',
    fontSize: '24px'
  };

  /*End Styling*/


    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <input type="text" value={this.state.movieName} onChange={this.handleChange} style={textStyle} placeholder="Search a Movie" />
        <input type="submit" value="Submit" />
      </form>
    )
  }

}
