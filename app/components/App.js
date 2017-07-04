var React = require('react');
console.log('outside')


class App extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      movieID: 489 //Defaulted movie
    }
  }


  render() {
    return (
      <h1 fetchApi={this.fetchApi('https://api.themoviedb.org/3/movie/489?api_key=f6d14169d40228dbf6f63c2a7f56ce70')}>Hello world</h1>
    );
  }

  fetchApi(url) {
    console.log('inside');
    fetch(url).then(function(res) {
      res.json();
    }).then(function(data) {
      console.log(data);
    })

  }


}

module.exports = App;