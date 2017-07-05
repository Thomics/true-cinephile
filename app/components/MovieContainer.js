import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class MovieContainer extends Component {


  render() {
    var data = this.props.data;
    console.log(data);

    return(
      <div>this.props.data</div>
    )
  }

}
