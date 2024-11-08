import api from '../../api'

export const createInvitation = ({ event_name, event_date, event_time }) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_INVITATION_REQUEST'})
        setTimeout(async () => {
            try {
                await api.post('/invitations', { event_name, event_date, event_time })
    
                const response = await api.get('/invitations')
                dispatch({
                    type: 'GET_INVITATIONS_SUCCESS',
                    payload: response.data.data
                })
            } catch (error) {
                dispatch({
                    type: 'GET_INVITATIONS_FAILURE',
                    payload: error.message
                });
            }
        }, 1000);
    }
}

export const getInvitation = (id) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_INVITATION_REQUEST'})
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

export const updateInvitation = ({ id, attendance_status, guest_count, phone_number }) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_FORM_INVITATION_REQUEST'})
        setTimeout(async () => {
            try {
                await api.patch('/guest_invitations/attendance', {
                    id, attendance_status, guest_count, phone_number
                })
    
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
        }, 1000);
    }
}

export const getInvitations = () => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_INVITATION_REQUEST'})
        setTimeout(async () => {
            try {
                const response = await api.get('/invitations')
                dispatch({
                    type: 'GET_INVITATIONS_SUCCESS',
                    payload: response.data.data
                })
            } catch (error) {
                dispatch({
                    type: 'GET_INVITATIONS_FAILURE',
                    payload: error.message
                });
            }
        }, 1000);
    }
}

export const deleteInvitation = (id) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_INVITATION_REQUEST'})
        setTimeout(async () => {
            try {
                await api.delete('/invitations/'+id)

                const response = await api.get('/invitations')
                dispatch({
                    type: 'GET_INVITATIONS_SUCCESS',
                    payload: response.data.data
                })
            } catch (error) {
                dispatch({
                    type: 'GET_INVITATIONS_FAILURE',
                    payload: error.message
                });
            }
        }, 1000);
    }
}