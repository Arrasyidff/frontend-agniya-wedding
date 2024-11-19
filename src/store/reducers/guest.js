let initialState = {
    guests: [],
    loading: false,
    error: null,
    isSuccess: false
}

function guest (state = initialState, action) {
    switch (action.type) {
        case 'GET_GUESTS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
                isSuccess: false,
            }
        case 'GET_GUESTS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                guests: action.payload,
                isSuccess: true
            }
        case 'GET_GUESTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
                isSuccess: false,
            }
        default:
            return state
    }
}

export default guest
