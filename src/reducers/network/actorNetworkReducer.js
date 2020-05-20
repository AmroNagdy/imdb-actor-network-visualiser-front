import * as Actions from '../../actions/network/actorNetwork'

const initialState = {
  activeNconst: '',
  loading: false,
  networkData: null,
  displayNames: true
};

const actorNetworkReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ACTOR_NETWORK_REQUEST_BEGIN:
      return {
        ...state,
        activeNconst: action.payload.nconst,
        loading: true,
        networkData: null
      };

    case Actions.ACTOR_NETWORK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        networkData: action.payload.networkData
      };

    case Actions.ACTOR_NETWORK_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        networkData: null
      };

    case Actions.ACTOR_NETWORK_DISPLAY_NAMES_TOGGLE:
      return {
        ...state,
        displayNames: !state.displayNames
      }

    default:
      return state;
  };
};

export default actorNetworkReducer;