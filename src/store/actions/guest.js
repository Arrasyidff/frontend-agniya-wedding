import api from '../../api'

export const createGuest = ({ name, email, phone_number, acquaintance_from, address, additional_notes }) => {
    return async (dispatch, getState) => {
        let isSuccess = false
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
            isSuccess = true
        } catch (error) {
            dispatch({
                type: 'GET_GUESTS_FAILURE',
                payload: error.message
            });
            isSuccess = false
        }
        return isSuccess
    }
}

export const getGuests = (search) => {
    return async (dispatch, getState) => {
        dispatch({ type: 'GET_GUESTS_REQUEST' })
        try {
            setTimeout(async () => {
                let reqQuery = {}
                if (search) reqQuery['search'] = search.toLowerCase()
                    
                let apiGet = '/guests'
                if (Object.keys(reqQuery).length !== 0) {
                    let i = 0;
                    for (const key in reqQuery) {
                        let query = `${key}=${reqQuery[key]}`
                        if (i === 0) query = '?'+query
                        apiGet += query
                        i++
                    }
                }

                const response = await api.get(apiGet)
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
        let isSuccess = false
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
            isSuccess = true
        } catch (error) {
            dispatch({
                type: 'GET_GUESTS_FAILURE',
                payload: error.message
            });
            isSuccess = false
        }
        return isSuccess
    }
}

export const deleteGuest = (id) => {
    return async (dispatch, getState) => {
        let isSuccess = false
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
            isSuccess = true
        } catch (error) {
            dispatch({
                type: 'GET_GUESTS_FAILURE',
                payload: error.message
            });
        }
        return isSuccess
    }
}