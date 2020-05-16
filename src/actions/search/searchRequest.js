import { BASE_URI, SEARCH_ACTORS_BY_NAME } from '../../rest-api/Constants';

export const SEARCH_REQUEST_BEGIN = 'SEARCH_REQUEST_BEGIN';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_FAILURE = 'SEARCH_REQUEST_FAILURE';

const handleResponse = response => {
  if (!response.ok) {
    throw new Error(`HTTP Error: Status=${response.status} StatusText=${response.statusText}`);
  }

  return response.json();
};

export const searchRequest = (name, limit) => {
  return dispatch => {
    dispatch(searchRequestBegin());
    console.log(`Execute searchRequest with name ${name} and limit ${limit}`)

    const url = new URL(BASE_URI + SEARCH_ACTORS_BY_NAME);
    const params = { name: name, limit: limit };
    url.search = new URLSearchParams(params).toString();

    return fetch(url, { credentials: 'same-origin' })
      .then(handleResponse)
      .then(json => {
        dispatch(searchRequestSuccess(json));
        return json;
      })
      .catch(error => dispatch(searchRequestFailure(error)));
  }
};

export const searchRequestBegin = () => ({
  type: SEARCH_REQUEST_BEGIN
});

export const searchRequestSuccess = searchResults => ({
  type: SEARCH_REQUEST_SUCCESS,
  payload: { searchResults }
});

export const searchRequestFailure = error => ({
  type: SEARCH_REQUEST_FAILURE,
  payload: { error }
});