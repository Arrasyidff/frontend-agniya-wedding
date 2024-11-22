import api from '../../api'

export const createInvitation = ({ event_name, event_date, event_time }) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_INVITATION_REQUEST'})
        setTimeout(async () => {
            try {
                const oldEvents = getState().invitation.invitations
                const newEvent = {
                    id: Date.now(),
                    event_name,
                    event_date: Date.now(),
                    event_time
                }
                const newEvents = [...oldEvents, newEvent]
                dispatch({
                    type: 'GET_INVITATIONS_SUCCESS',
                    payload: newEvents
                })
                // await api.post('/invitations', { event_name, event_date, event_time })
                // const response = await api.get('/invitations')
                // dispatch({
                //     type: 'GET_INVITATIONS_SUCCESS',
                //     payload: response.data.data
                // })
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
        try {
            setTimeout(async () => {
                const response = [
                    {
                        id: Date.now()+1,
                        name: 'Arrasyid Fadel Fatonsyah',
                        attendance_status: null,
                        guest_count: 2,
                        attendance: null,
                        check_in_time: ''
                    },
                    {
                        id: Date.now()+2,
                        name: 'Arrasyid Fadel Fatonsyah',
                        attendance_status: null,
                        guest_count: 2,
                        attendance: null,
                        check_in_time: ''
                    },
                    {
                        id: Date.now()+3,
                        name: 'Arrasyid Fadel Fatonsyah',
                        attendance_status: true,
                        guest_count: 2,
                        attendance: null,
                        check_in_time: ''
                    },
                    {
                        id: Date.now()+4,
                        name: 'Arrasyid Fadel Fatonsyah',
                        attendance_status: false,
                        guest_count: 2,
                        attendance: null,
                        check_in_time: ''
                    }
                ]
                dispatch({
                    type: 'GET_INVITATIONS_SUCCESS',
                    payload: response
                })
            }, 1000);
            // const response = await api.get('/invitations')
            // dispatch({
            //     type: 'GET_INVITATIONS_SUCCESS',
            //     payload: response.data.data
            // })
        } catch (error) {
            dispatch({
                type: 'GET_INVITATIONS_FAILURE',
                payload: error.message
            });
        }
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

export const updateInvitation = (payload) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_FORM_INVITATION_REQUEST'})
        try {
            setTimeout(async () => {
                let oldInvitations = getState().invitation.invitations
                oldInvitations.forEach((invitation, i) => {
                    if (invitation.id === payload.id) {
                        oldInvitations[i] = payload
                    }

                })
                dispatch({
                    type: 'GET_INVITATION_SUCCESS',
                    payload: oldInvitations
                })

                // await api.patch('/guest_invitations/attendance', {
                //     id, attendance_status, guest_count, phone_number
                // })
                // const response = await api.get('/guest_invitations/'+id)
                // dispatch({
                //     type: 'GET_INVITATION_SUCCESS',
                //     payload: response.data.data
                // })
            }, 1000);
        } catch (error) {
            dispatch({
                type: 'GET_INVITATIONS_FAILURE',
                payload: error.message
            });
        }
    }
}

export const deleteInvitation = (id) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_INVITATION_REQUEST'})
        setTimeout(async () => {
            try {
                let newInvitations = [...getState().invitation.invitations]
                newInvitations = newInvitations.filter(invitation => invitation.id !== id)
                dispatch({
                    type: 'GET_INVITATIONS_SUCCESS',
                    payload: newInvitations
                })
                // await api.delete('/invitations/'+id)
                // const response = await api.get('/invitations')
                // dispatch({
                //     type: 'GET_INVITATIONS_SUCCESS',
                //     payload: response.data.data
                // })
            } catch (error) {
                dispatch({
                    type: 'GET_INVITATIONS_FAILURE',
                    payload: error.message
                });
            }
        }, 1000);
    }
}

export const getDetailInvitation = (id) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_INVITATION_REQUEST'})
        setTimeout(async () => {
            try {
                const response = await api.get('/invitations/'+4)
                dispatch({
                    type: 'GET_DETAIL_INVITATION_SUCCESS',
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