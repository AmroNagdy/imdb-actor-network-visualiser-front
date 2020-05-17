import { combineReducers } from 'redux';
import actorSearchResultsReducer from './search/actorSearchResultsReducer';
import actorNetworkReducer from './network/actorNetworkReducer';

const allReducers = combineReducers({
  actorSearchResults: actorSearchResultsReducer,
  actorNetwork: actorNetworkReducer
});

export default allReducers;