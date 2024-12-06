import api from '../../api'

export const createInvitations = (payload) => {
    return async (dispatch) => {
        dispatch({type: 'GET_INVITATION_REQUEST'})
        try {
            setTimeout(async () => {
                await api.post('/invitations', payload)
                const response = await api.get('/invitations')
                dispatch({
                    type: 'GET_INVITATIONS_SUCCESS',
                    payload: response.data.data
                })
            }, 1000)
        } catch (error) {
            dispatch({
                type: 'GET_INVITATIONS_FAILURE',
                payload: error.message
            })
        }
    }
}

export const getInvitations = () => {
    return async (dispatch) => {
        dispatch({type: 'GET_INVITATION_REQUEST'})
        try {
            setTimeout(async () => {
                const response = await api.get('/invitations')
                dispatch({
                    type: 'GET_INVITATIONS_SUCCESS',
                    payload: response.data.data
                })
            }, 1000)
        } catch (error) {
            dispatch({
                type: 'GET_INVITATIONS_FAILURE',
                payload: error.message
            })
        }
    }
}