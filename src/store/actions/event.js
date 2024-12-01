import api from '../../api'

export const createEvent = ({ event_name, event_date, event_time }) => {
    return async (dispatch, getState) => {
        let isSuccess = false
        dispatch({type: 'GET_EVENT_REQUEST'})
        try {
            setTimeout(async () => {
                await api.post('/invitations', { event_name, event_date, event_time })
                const response = await api.get('/invitations')
                dispatch({
                    type: 'GET_EVENTS_SUCCESS',
                    payload: response.data.data
                })
            }, 1000)
            isSuccess = true
        } catch (error) {
            dispatch({
                type: 'GET_EVENT_FAILURE',
                payload: error.message
            })
            isSuccess = false
        }
        return isSuccess
    }
}

export const getEvents = (search) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_EVENT_REQUEST'})
        setTimeout(async () => {
            try {
                let reqQuery = {}
                if (search) reqQuery['search'] = search.toLowerCase()
                    
                let apiGet = '/invitations'
                if (Object.keys(reqQuery).length !== 0) {
                    let i = 0
                    for (const key in reqQuery) {
                        let query = `${key}=${reqQuery[key]}`
                        if (i === 0) query = '?'+query
                        apiGet += query
                        i++
                    }
                }

                const response = await api.get(apiGet)
                dispatch({
                    type: 'GET_EVENTS_SUCCESS',
                    payload: response.data.data
                })
            } catch (error) {
                dispatch({
                    type: 'GET_EVENT_FAILURE',
                    payload: error.message
                })
            }
        }, 1000)
    }
}

export const getEvent = (id) => {
    return (dispatch, getState) => {
        try {
            setTimeout(async () => {
                const response = await api.get('invitations/2')
                dispatch({
                    type: 'GET_DETAIL_EVENT_SUCCESS',
                    payload: response.data.data
                })
            }, 1000)
        } catch (error) {
            dispatch({
                type: 'GET_EVENT_FAILURE',
                payload: error.message
            })
        }
    }
}

export const deleteEvent = (id) => {
    return async (dispatch, getState) => {
        let isSuccess = false
        dispatch({type: 'GET_EVENT_REQUEST'})
        try {
            setTimeout(async () => {
                await api.delete('/invitations/'+id)
                const response = await api.get('/invitations')
                dispatch({
                    type: 'GET_EVENTS_SUCCESS',
                    payload: response.data.data
                })
            }, 1000)
            isSuccess = true
        } catch (error) {
            dispatch({
                type: 'GET_EVENT_FAILURE',
                payload: error.message
            })
            isSuccess = false
        }
        return isSuccess
    }
}