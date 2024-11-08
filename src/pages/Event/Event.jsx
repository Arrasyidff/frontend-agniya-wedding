import { useEffect, useState } from 'react'
import './event.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getInvitations, deleteInvitation } from '@store/actions/invitation'
import { getFullDate } from '@helpers/dateHelper'
import { Loading, PopupDelete, PopupEventForm } from '@components'

function Event() {
    const dispatch = useDispatch()
    const {invitations, loading} = useSelector(state => state.invitation)
    const [openPopupDelete, setOpenPopupDelete] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const [event, setEvent] = useState(null)

    useEffect(() => {
        dispatch(getInvitations())
    }, [dispatch])

    const handleOpenDeletePopup = (payload) => {
        setOpenPopupDelete(true)
        setEvent(payload)
    }

    const handleDeleteEvent = (payload) => {
        setOpenPopupDelete(false)
        if (payload) dispatch(deleteInvitation(event.id))
        setEvent(null)
    }

    return (
        <>
            {loading && <Loading is_fullscreen={true} />}

            <div className='ai-events__container'>
                <div
                    onClick={() => setOpenForm(true)}
                    className="ai-events__item add-mode"
                >
                    <div className='ai-events__item-add-icon'>
                        <i className="fas fa-plus"></i>
                    </div>
                </div>

                {invitations.map(item => (
                    <div key={item.id} className="ai-events__item">
                        <h1 className='ai-events__item--title'>{item.event_name}</h1>
                        <div className='ai-events__item-body'>
                            <p>{getFullDate(item.event_date)}</p>
                            <p>{item.total_invitations} Undangan</p>
                        </div>
                        <div className='ai-events__item-actions'>
                            <div className="ai-events__item-actions__icon-wrapper">
                                <i className="fas fa-calendar-week"></i>
                            </div>
                            <div className="ai-events__item-actions__icon-wrapper"
                                onClick={() => handleOpenDeletePopup(item)}
                            >
                                <i className="fas fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {openForm && (
                <PopupEventForm
                    eventEdit={event}
                    open={openForm}
                    setOpen={setOpenForm}
                />
            )}

            {openPopupDelete && (
                <PopupDelete
                    onEvent={handleDeleteEvent}
                    title={'Hapus Acara?'}
                    detailName={event.event_name}
                />
            )}
        </>
    )
}

export default Event