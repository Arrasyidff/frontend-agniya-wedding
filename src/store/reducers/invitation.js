let initialState = {
    invitation: null,
    loading: false,
    error: null
}

function invitation (state = initialState, action) {
    switch (action.type) {
        case 'GET_INVITATION_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'GET_INVITATION_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                invitation: action.payload
            }
        case 'GET_INVITATION_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default invitation
