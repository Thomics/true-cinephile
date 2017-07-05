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
      </form>
    )
  }

}

//render() {
//  return (
//    <form onSubmit={this.handleSubmit}>
//      <label>
//        Name:
//        <input type="text" value={this.state.value} onChange={this.handleChange} />
//      </label>
//      <input type="submit" value="Submit" />
//    </form>
//  );
//}