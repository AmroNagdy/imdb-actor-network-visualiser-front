import { BASE_URI, GET_NETWORK_BY_NCONST } from '../../rest-api/Constants';

export const ACTOR_NETWORK_REQUEST_BEGIN = 'SEARCH_NETWORK_BEGIN';
export const ACTOR_NETWORK_REQUEST_SUCCESS = 'SEARCH_NETWORK_SUCCESS';
export const ACTOR_NETWORK_REQUEST_FAILURE = 'SEARCH_NETWORK_FAILURE';

export const actorNetworkRequestBegin = nconst => ({
  type: ACTOR_NETWORK_REQUEST_BEGIN,
  payload: { nconst }
});

export const actorNetworkRequestSuccess = network => ({
  type: ACTOR_NETWORK_REQUEST_SUCCESS,
  payload: { network }
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

const actorNetworkRequest = nconst => {
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

export default actorNetworkRequest;