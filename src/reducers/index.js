'use strict';

import {combineReducers} from 'redux';

// IMPORT REDUCERS | COMBINE
import {movieReducers} from './movieReducers';

//Combine reducers, allows us to have all reducers in one state object
export default combineReducers({
  movie: movieReducers
});
