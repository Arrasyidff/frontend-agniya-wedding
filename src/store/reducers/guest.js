let initialState = {
    guests: [],
    loading: false,
    error: null
}

function guest (state = initialState, action) {
    switch (action.type) {
        case 'GET_GUESTS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'GET_GUESTS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                guests: action.payload
            }
        case 'GET_GUESTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default guest
