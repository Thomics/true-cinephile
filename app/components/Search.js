import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state= { movieName: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    //props.movie = props.fetchApi(`https://api.themoviedb.org/3/search/movie?query=${this.state.movieName}&api_key=f6d14169d40228dbf6f63c2a7f56ce70`);

    console.log(this.state.movieName);
    console.log(21);

    this.props.changeMovie(`https://api.themoviedb.org/3/search/movie?query=${this.state.movieName}&api_key=f6d14169d40228dbf6f63c2a7f56ce70`);

  }

  handleChange(event) {
    this.setState({movieName: event.target.value});
  }



render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Movie:
          <input type="text" value={this.state.movieName} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {this.state.movieName}
      </form>
    )
  }

}
