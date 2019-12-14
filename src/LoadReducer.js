const LoadReducer = (state, action) => {
    switch (action.type) {
        case "HIDE_LOADER": 
            return {
                ...state, 
                loadStatus: action.status,
                apiCount:action.apiCount--
            };
        case "SHOW_LOADER":
            return {
                ...state,
                 loadStatus: action.status,
                apiCount: state.apiCount++
            };
        default:
            return state;
    }
};

export default LoadReducer;