import { ACTOR_SEARCH_REQUEST_BEGIN, ACTOR_SEARCH_REQUEST_SUCCESS, ACTOR_SEARCH_REQUEST_FAILURE } from '../../actions/search/actorSearchRequest';

const initialState = {
    searchResults: [],
    loading: false,
};

const actorSearchResultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTOR_SEARCH_REQUEST_BEGIN:
            return {
                ...state,
                loading: true
            };

        case ACTOR_SEARCH_REQUEST_SUCCESS:
            return {
                ...state,
                searchResults: action.payload.searchResults,
                loading: false
            }

        case ACTOR_SEARCH_REQUEST_FAILURE:
            return {
                ...state,
                searchResults: [],
                loading: false
            }

        default:
            return state;
    };
};

export default actorSearchResultsReducer;