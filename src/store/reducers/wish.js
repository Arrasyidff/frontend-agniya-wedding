let initialState = {
    wishes: [],
    loading: false,
    error: null
}

function wish (state = initialState, action) {
    switch (action.type) {
        case 'GET_WISHES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'GET_WISHES_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                wishes: action.payload
            }
        case 'GET_WISHES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default wish
