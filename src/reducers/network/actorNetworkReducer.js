import { ACTOR_NETWORK_REQUEST_BEGIN, ACTOR_NETWORK_REQUEST_SUCCESS, ACTOR_NETWORK_REQUEST_FAILURE } from '../../actions/network/actorNetworkRequest'

const initialState = {
  activeNconst: '',
  loading: false,
  network: null
};

const actorNetworkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTOR_NETWORK_REQUEST_BEGIN:
      return {
        ...state,
        activeNconst: action.payload.nconst,
        loading: true
      };

    case ACTOR_NETWORK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        network: action.payload.network
      };

    case ACTOR_NETWORK_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        network: null
      };

    default:
      return state;
  };
};

export default actorNetworkReducer;