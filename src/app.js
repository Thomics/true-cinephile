import {createStore} from 'redux';

// REACT
import React from 'react';
import {render} from 'react-dom';

// REDUCERS
import reducers from './reducers/index';

// ACTIONS
import {movieActions} from './actions/movieActions';

// COMPONENTS
import App from './components/App';


const store = createStore(reducers);

render(
  <App />, document.getElementById('app')
);

store.subscribe(function() {
  console.log('current state is: ', store.getState());
});