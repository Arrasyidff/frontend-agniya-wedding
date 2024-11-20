let initialState = {
    events: [],
    event: null,
    loading: false,
    isSuccess: false,
    error: null
}

function invitation (state = initialState, action) {
    switch (action.type) {
        case 'GET_EVENT_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
                isSuccess: false
            }
        case 'GET_EVENTS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                events: action.payload,
                isSuccess: true
            }
        case 'GET_DETAIL_EVENT_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                event: action.payload,
                isSuccess: true
            }
        case 'GET_EVENT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
                isSuccess: false
            }
        default:
            return state
    }
}

export default invitation
