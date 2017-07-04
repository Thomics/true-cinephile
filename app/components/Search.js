import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Search extends Component {

    render() {
      return (
        <form onSubmit={this.props.fetchMovieID}>
          <input type="text" placeholder="Search Movie Title..."/>
        </form>
      )
    }

}
