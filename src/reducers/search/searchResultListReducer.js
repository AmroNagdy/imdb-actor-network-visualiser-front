const searchResultListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SUBMIT':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    };
}

export default searchResultListReducer;