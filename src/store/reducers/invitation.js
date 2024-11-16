let initialState = {
    invitations: [],
    invitation: null,
    detailInvitation: null,
    loading: false,
    loadingForm: false,
    error: null
}

function invitation (state = initialState, action) {
    switch (action.type) {
        case 'GET_INVITATION_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            }
        case 'GET_INVITATIONS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                invitations: action.payload
            }
        case 'GET_DETAIL_INVITATION_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                detailInvitation: action.payload
            }
        case 'GET_FORM_INVITATION_REQUEST':
            return {
                ...state,
                loadingForm: true,
                error: null
            }
        case 'GET_INVITATION_SUCCESS':
            return {
                ...state,
                loading: false,
                loadingForm: false,
                error: null,
                invitation: action.payload
            }
        case 'GET_INVITATION_FAILURE':
            return {
                ...state,
                loading: false,
                loadingForm: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default invitation
