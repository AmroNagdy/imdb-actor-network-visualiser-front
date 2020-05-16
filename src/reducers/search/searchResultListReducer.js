import { SEARCH_REQUEST_BEGIN, SEARCH_REQUEST_SUCCESS, SEARCH_REQUEST_FAILURE } from '../../actions/search/searchRequest';

const initialState = {
    searchResults: [],
    loading: false,
};

const searchResultListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REQUEST_BEGIN:
            return {
                ...state,
                loading: true,
            };

        case SEARCH_REQUEST_SUCCESS:
            return {
                ...state,
                searchResults: action.payload.searchResults,
                loading: false
            }

        case SEARCH_REQUEST_FAILURE:
            return {
                ...state,
                searchResults: [],
                loading: false
            }

        default:
            return state;
    };
};

export default searchResultListReducer;