// import api from '../../api'

export const createEvent = ({ event_name, event_date, event_time }) => {
    return async (dispatch, getState) => {
        let isSuccess = false
        dispatch({type: 'GET_EVENT_REQUEST'})
        try {
            setTimeout(async () => {
                const oldEvents = [...getState().event.events]
                const newEvent = {
                    id: Date.now(),
                    event_name,
                    event_date: Date.now(),
                    event_time
                }
                const newEvents = [...oldEvents, newEvent]
                dispatch({
                    type: 'GET_EVENTS_SUCCESS',
                    payload: newEvents
                })
                // await api.post('/invitations', { event_name, event_date, event_time })
                // const response = await api.get('/invitations')
                // dispatch({
                //     type: 'GET_INVITATIONS_SUCCESS',
                //     payload: response.data.data
                // })
            }, 1000);
            isSuccess = true
        } catch (error) {
            dispatch({
                type: 'GET_EVENT_FAILURE',
                payload: error.message
            });
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
                let response = [
                    {
                        "id": Date.now()+Math.random(),
                        "event_name": 'Akad Nikah',
                        "event_date": Date.now(),
                        'event_time': [
                            {start: '14:50', end: '15:00'}
                        ],
                        'total_invitations': 100,
                    },
                    {
                        "id": Date.now()+Math.random(),
                        "event_name": 'Akad Nikah',
                        "event_date": Date.now(),
                        'event_time': [
                            {start: '14:50', end: '15:00'},
                            {start: '14:50', end: '15:00'},
                        ],
                        'total_invitations': 100,
                    },
                    {
                        "id": Date.now()+Math.random(),
                        "event_name": 'Resepsi',
                        "event_date": Date.now(),
                        'event_time': [
                            {start: '14:50', end: '15:00'}
                        ],
                        'total_invitations': 100,
                    },
                ]
                if (search) {
                    search = search.toLowerCase()
                    response = response.filter(item => {
                        return (
                            (item.event_name.toLowerCase()).includes(search)
                        )
                    })
                }
                dispatch({
                    type: 'GET_EVENTS_SUCCESS',
                    payload: response
                })
                // const response = await api.get('/invitations')
                // dispatch({
                //     type: 'GET_INVITATIONS_SUCCESS',
                //     payload: response.data.data
                // })
            } catch (error) {
                dispatch({
                    type: 'GET_EVENT_FAILURE',
                    payload: error.message
                });
            }
        }, 1000);
    }
}


export const deleteEvent = (id) => {
    return async (dispatch, getState) => {
        dispatch({type: 'GET_EVENT_REQUEST'})
        setTimeout(async () => {
            try {
                let newEvents = [...getState().event.events]
                newEvents = newEvents.filter(event => event.id !== id)
                dispatch({
                    type: 'GET_EVENTS_SUCCESS',
                    payload: newEvents
                })
                // await api.delete('/invitations/'+id)
                // const response = await api.get('/invitations')
                // dispatch({
                //     type: 'GET_INVITATIONS_SUCCESS',
                //     payload: response.data.data
                // })
            } catch (error) {
                dispatch({
                    type: 'GET_EVENT_FAILURE',
                    payload: error.message
                });
            }
        }, 1000);
    }
}