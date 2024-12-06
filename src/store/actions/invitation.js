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

export const getInvitations = (search=null, sort=null) => {
    return async (dispatch) => {
        dispatch({type: 'GET_INVITATION_REQUEST'})
        try {
            setTimeout(async () => {
                let reqQuery = {}
                if (search) reqQuery['search'] = search.toLowerCase()
                if (sort) {
                    reqQuery['sort_key'] = sort.key
                    reqQuery['sort_order'] = sort.order
                }
                    
                let apiGet = '/invitations'
                if (Object.keys(reqQuery).length !== 0) {
                    let i = 0
                    for (const key in reqQuery) {
                        let query = `${key}=${reqQuery[key]}`
                        if (i === 0) query = '?'+query
                        else query = '&'+query
                        apiGet += query
                        i++
                    }
                }
                const response = await api.get(apiGet)
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