import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class MovieContainer extends Component {


  render() {
    var data = this.props.data;
    //console.log(data);
    //
    //console.log(data.poster);
    return(
      <div>

        <div>{data.movieName}</div>
        <h1>{data.poster + ""}</h1>

      </div>
    )
  }

}
