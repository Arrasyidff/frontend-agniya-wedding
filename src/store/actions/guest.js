import api from '../../api'

export const getGuests = (id) => {
    return async (dispatch, getState) => {
        dispatch({ type: 'GET_GUESTS_REQUEST' })
        setTimeout(async () => {
            try {
                const response = await api.get('/guests')
                dispatch({
                    type: 'GET_GUESTS_SUCCESS',
                    payload: response.data.data
                })
            } catch (error) {
                dispatch({
                    type: 'GET_GUESTS_FAILURE',
                    payload: error.message
                });
            }
        }, 1000);
    }
}

export const createGuest = ({ name, email, phone_number, acquaintance_from, address, additional_notes }) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_GUESTS_REQUEST'})
        try {
            setTimeout(async () => {
                await api.post('/guests', { name, email, phone_number, acquaintance_from, address, additional_notes })
                const response = await api.get('/guests')
                dispatch({
                    type: 'GET_GUESTS_SUCCESS',
                    payload: response.data.data
                })
            }, 1000);
        } catch (error) {
            dispatch({
                type: 'GET_GUESTS_FAILURE',
                payload: error.message
            });
        }
    }
}

export const updateGuest = ({ id, name, email, phone_number, acquaintance_from, address, additional_notes }) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_GUESTS_REQUEST'})
        try {
            setTimeout(async () => {
                await api.patch('/guests', { id, name, email, phone_number, acquaintance_from, address, additional_notes })
                const response = await api.get('/guests')
                dispatch({
                    type: 'GET_GUESTS_SUCCESS',
                    payload: response.data.data
                })
            }, 1000);
        } catch (error) {
            dispatch({
                type: 'GET_GUESTS_FAILURE',
                payload: error.message
            });
        }
    }
}

export const deleteGuest = (id) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_GUESTS_REQUEST'})
        try {
            setTimeout(async () => {
                await api.delete('/guests/'+id)
                const response = await api.get('/guests')
                dispatch({
                    type: 'GET_GUESTS_SUCCESS',
                    payload: response.data.data
                })
            }, 1000);
        } catch (error) {
            dispatch({
                type: 'GET_GUESTS_FAILURE',
                payload: error.message
            });
        }
    }
}