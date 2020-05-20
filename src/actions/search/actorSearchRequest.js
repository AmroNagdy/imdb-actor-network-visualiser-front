import { BASE_URI, SEARCH_ACTORS_BY_NAME } from '../../constants/RestApi';

export const ACTOR_SEARCH_REQUEST_BEGIN = 'SEARCH_REQUEST_BEGIN';
export const ACTOR_SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const ACTOR_SEARCH_REQUEST_FAILURE = 'SEARCH_REQUEST_FAILURE';

export const actorSearchRequestBegin = () => ({
  type: ACTOR_SEARCH_REQUEST_BEGIN
});

export const actorSearchRequestSuccess = searchResults => ({
  type: ACTOR_SEARCH_REQUEST_SUCCESS,
  payload: { searchResults }
});

export const actorSearchRequestFailure = error => ({
  type: ACTOR_SEARCH_REQUEST_FAILURE,
  payload: { error }
});

const handleResponse = response => {
  if (!response.ok) {
    throw new Error(`HTTP Error: Status=${response.status} StatusText=${response.statusText}`);
  }

  return response.json();
};

const actorSearchRequest = (name, limit) => {
  return dispatch => {
    dispatch(actorSearchRequestBegin());

    const url = new URL(BASE_URI + SEARCH_ACTORS_BY_NAME);
    const params = { name: name, limit: limit };
    url.search = new URLSearchParams(params).toString();

    return fetch(url, { headers: new Headers({ 'Access-Control-Allow-Origin': '*' }) })
      .then(handleResponse)
      .then(json => {
        dispatch(actorSearchRequestSuccess(json));
        return json;
      })
      .catch(error => dispatch(actorSearchRequestFailure(error)));
  };
};

export default actorSearchRequest;