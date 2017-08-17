import {createStore} from 'redux';

// REACT
import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

// REDUCERS
import reducers from './reducers/index';

// ACTIONS
import {getMovie} from './actions/movieActions';

// COMPONENTS
import App from './components/App';


const store = createStore(reducers);


class Main extends React.Component {

  componentDidMount(){
    this.props.getMovie();
  }

  render() {
    return(
      <div>
        <App />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('state');
  console.log(state);
  return {
    movie: 'Shrek'
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getMovie:getMovie
  }, dispatch)
}

console.log(store.getState());

export default connect(mapStateToProps, mapDispatchToProps)(Main);
