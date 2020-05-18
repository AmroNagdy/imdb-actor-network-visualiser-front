import { BASE_URI, GET_NETWORK_BY_NCONST } from '../../constants/RestApi';

export const ACTOR_NETWORK_DISPLAY_NAMES_TOGGLE = 'ACTOR_NETWORK_DISPLAY_NAMES_TOGGLE';
export const ACTOR_NETWORK_REQUEST_BEGIN = 'ACTOR_NETWORK_REQUEST_BEGIN';
export const ACTOR_NETWORK_REQUEST_SUCCESS = 'ACTOR_NETWORK_REQUEST_SUCCESS';
export const ACTOR_NETWORK_REQUEST_FAILURE = 'ACTOR_NETWORK_REQUEST_FAILURE';

export const actorNetworkDisplayNamesToggle = () => ({
  type: ACTOR_NETWORK_DISPLAY_NAMES_TOGGLE
});

export const actorNetworkRequestBegin = nconst => ({
  type: ACTOR_NETWORK_REQUEST_BEGIN,
  payload: { nconst }
});

export const actorNetworkRequestSuccess = networkData => ({
  type: ACTOR_NETWORK_REQUEST_SUCCESS,
  payload: { networkData }
});

export const actorNetworkRequestFailure = error => ({
  type: ACTOR_NETWORK_REQUEST_FAILURE,
  payload: { error }
});

const handleResponse = response => {
  if (!response.ok) {
    throw new Error(`HTTP Error: Status=${response.status} StatusText=${response.statusText}`);
  }

  return response.json();
};

export const actorNetworkRequest = nconst => {
  return dispatch => {
    dispatch(actorNetworkRequestBegin(nconst));

    const url = new URL(BASE_URI + GET_NETWORK_BY_NCONST);
    const params = { nconst: nconst };
    url.search = new URLSearchParams(params).toString();

    return fetch(url, { credentials: 'same-origin' })
      .then(handleResponse)
      .then(json => {
        dispatch(actorNetworkRequestSuccess(json));
        return json;
      })
      .catch(error => dispatch(actorNetworkRequestFailure(error)));
  };
};