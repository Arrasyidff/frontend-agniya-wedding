import api from '../../api'

export const getInvitation = (id) => {
    return async (dispatch, getState) => {
        dispatch({ type: 'GET_INVITATION_REQUEST' })
        try {
            const response = await api.get('/guest_invitations/'+id)
            dispatch({
                type: 'GET_INVITATION_SUCCESS',
                payload: response.data.data
            })
        } catch (error) {
            dispatch({
                type: 'GET_INVITATIONS_FAILURE',
                payload: error.message
            });
        }
    }
}