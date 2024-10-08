import api from '../../api'

export const getWishes = (id) => {
    return async (dispatch, getState) => {
        dispatch({ type: 'GET_WISHES_REQUEST' })
        try {
            const response = await api.get('/wishes')
            dispatch({
                type: 'GET_WISHES_SUCCESS',
                payload: response.data.data
            })
        } catch (error) {
            dispatch({
                type: 'GET_WISHES_FAILURE',
                payload: error.message
            });
        }
    }
}

export const createWish = ({ guest_id, wish }) => {
    return async (dispatch, getState) => {
        try {
            await api.post('/wishes', { guest_id, wish })
            const response = await api.get('/wishes')
            dispatch({
                type: 'GET_WISHES_SUCCESS',
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