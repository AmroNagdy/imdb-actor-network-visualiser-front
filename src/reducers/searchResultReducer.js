import * as Actions from '../actions/searchRequest';

const initialState = {
    searchResults: [],
    loading: false,
    queriedOnce: false
};

const actorSearchResultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ACTOR_SEARCH_REQUEST_BEGIN:
            return {
                ...state,
                loading: true,
                queriedOnce: true
            };

        case Actions.ACTOR_SEARCH_REQUEST_SUCCESS:
            return {
                ...state,
                searchResults: action.payload.searchResults,
                loading: false
            };

        case Actions.ACTOR_SEARCH_REQUEST_FAILURE:
            return {
                ...state,
                searchResults: [],
                loading: false
            };

        default:
            return state;
    };
};

export default actorSearchResultsReducer;