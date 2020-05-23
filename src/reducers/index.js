import { combineReducers } from 'redux';
import searchResultReducer from './searchResultReducer';
import networkReducer from './networkReducer';

const allReducers = combineReducers({
  searchResult: searchResultReducer,
  network: networkReducer
});

export default allReducers;