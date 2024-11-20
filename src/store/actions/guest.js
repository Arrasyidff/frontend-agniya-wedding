// import api from '../../api'

export const getGuests = (search) => {
    return async (dispatch, getState) => {
        dispatch({ type: 'GET_GUESTS_REQUEST' })
        setTimeout(async () => {
            try {
                let response = [
                    {
                        "id": Date.now(),
                        "name": 'ARRASYID FADEL FATONSYAH',
                        'email': 'arfafa@mail.com',
                        'phone_number': '089635164141',
                        'acquaintance_from': 'Keluarga Pak Haji Udin',
                        'address': 'JL. MERTA AGUNG NO. 55',
                        'additional_notes': 'JL. MERTA AGUNG NO. 55'
                    },
                    {
                        'id': Date.now()+Math.random(),
                        "name": 'ARRASYID FADEL FATONSYAH',
                        'email': 'arfafa@mail.com',
                        'phone_number': '089635164141',
                        'acquaintance_from': 'Keluarga Pak Haji Udin',
                        'address': 'JL. MERTA AGUNG NO. 55',
                        'additional_notes': 'JL. MERTA AGUNG NO. 55'
                    },
                    {
                        'id': Date.now()+Math.random(),
                        "name": 'ARRASYID FADEL FATONSYAH',
                        'email': 'arfafa@mail.com',
                        'phone_number': '089635164141',
                        'acquaintance_from': 'Keluarga Pak Haji Udin',
                        'address': 'JL. MERTA AGUNG NO. 55',
                        'additional_notes': 'JL. MERTA AGUNG NO. 55'
                    },
                    {
                        'id': Date.now()+Math.random(),
                        "name": 'ARRASYID FADEL FATONSYAH',
                        'email': 'arfafa@mail.com',
                        'phone_number': '089635164141',
                        'acquaintance_from': 'Keluarga Pak Haji Udin',
                        'address': 'JL. MERTA AGUNG NO. 55',
                        'additional_notes': 'JL. MERTA AGUNG NO. 55'
                    },
                    {
                        'id': Date.now()+Math.random(),
                        "name": 'ARRASYID FADEL FATONSYAH',
                        'email': 'arfafa@mail.com',
                        'phone_number': '089635164141',
                        'acquaintance_from': 'Keluarga Pak Haji Udin',
                        'address': 'JL. MERTA AGUNG NO. 55',
                        'additional_notes': 'JL. MERTA AGUNG NO. 55'
                    },
                    {
                        'id': Date.now()+Math.random(),
                        "name": 'ARRASYID FADEL FATONSYAH',
                        'email': 'arfafa@mail.com',
                        'phone_number': '089635164141',
                        'acquaintance_from': 'Keluarga Pak Haji Udin',
                        'address': 'JL. MERTA AGUNG NO. 55',
                        'additional_notes': 'JL. MERTA AGUNG NO. 55'
                    },
                    {
                        'id': Date.now()+Math.random(),
                        "name": 'ARRASYID FADEL FATONSYAH',
                        'email': 'arfafa@mail.com',
                        'phone_number': '089635164141',
                        'acquaintance_from': 'Keluarga Pak Haji Udin',
                        'address': 'JL. MERTA AGUNG NO. 55',
                        'additional_notes': 'JL. MERTA AGUNG NO. 55'
                    },
                    {
                        'id': Date.now()+Math.random(),
                        "name": 'ARRASYID FADEL FATONSYAH',
                        'email': 'arfafa@mail.com',
                        'phone_number': '089635164141',
                        'acquaintance_from': 'Keluarga Pak Haji Udin',
                        'address': 'JL. MERTA AGUNG NO. 55',
                        'additional_notes': 'JL. MERTA AGUNG NO. 55'
                    },
                    {
                        'id': Date.now()+Math.random(),
                        "name": 'ARRASYID FADEL FATONSYAH',
                        'email': 'arfafa@mail.com',
                        'phone_number': '089635164141',
                        'acquaintance_from': 'Keluarga Pak Haji Udin',
                        'address': 'JL. MERTA AGUNG NO. 55',
                        'additional_notes': 'JL. MERTA AGUNG NO. 55'
                    },
                ]
                if (search) {
                    search = search.toLowerCase()
                    response = response.filter(item => {
                        return (
                            (item.name.toLowerCase()).includes(search)
                        )
                    })
                }
                dispatch({
                    type: 'GET_GUESTS_SUCCESS',
                    payload: response
                })
                // const response = await api.get('/guests')
                // dispatch({
                //     type: 'GET_GUESTS_SUCCESS',
                //     payload: response.data.data
                // })
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
        let isSuccess = false
        dispatch({type: 'GET_GUESTS_REQUEST'})
        try {
            setTimeout(async () => {
                const oldGuests = getState().guest.guests
                const newGuest = {
                    id: Date.now(), name, email, phone_number, acquaintance_from, address, additional_notes
                }
                const newGuests = [...oldGuests, newGuest]
                dispatch({
                    type: 'GET_GUESTS_SUCCESS',
                    payload: newGuests
                })

                /** api */
                // await api.post('/guests', { name, email, phone_number, acquaintance_from, address, additional_notes })
                // const response = await api.get('/guests')
                // dispatch({
                //     type: 'GET_GUESTS_SUCCESS',
                //     payload: response.data.data
                // })
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

export const updateGuest = ({ id, name, email, phone_number, acquaintance_from, address, additional_notes }) => {
    return async (dispatch, getState) => {
        let isSuccess = false
        dispatch({type: 'GET_GUESTS_REQUEST'})
        try {
            setTimeout(async () => {
                const oldGuests = getState().guest.guests
                oldGuests.forEach((guest, i) => {
                    if (guest.id === id) {
                        oldGuests[i] = {...guest, name, email, phone_number, acquaintance_from, address, additional_notes}
                    }
                })
                dispatch({
                    type: 'GET_GUESTS_SUCCESS',
                    payload: oldGuests
                })

                // await api.patch('/guests', { id, name, email, phone_number, acquaintance_from, address, additional_notes })
                // const response = await api.get('/guests')
                // dispatch({
                //     type: 'GET_GUESTS_SUCCESS',
                //     payload: response.data.data
                // })
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
                let oldGuests = JSON.parse(JSON.stringify(getState().guest.guests))
                oldGuests = oldGuests.filter(guest => guest.id !== id)
                dispatch({
                    type: 'GET_GUESTS_SUCCESS',
                    payload: oldGuests
                })
                // await api.delete('/guests/'+id)
                // const response = await api.get('/guests')
                // dispatch({
                //     type: 'GET_GUESTS_SUCCESS',
                //     payload: response.data.data
                // })
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