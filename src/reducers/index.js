import searchResultListReducer from './search/searchResultListReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  searchResultList: searchResultListReducer
});

export default allReducers;