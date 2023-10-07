const PageReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                currentPage: action.payload,
            };
        }
        default:
            return state;
    }
}

export default PageReducer;