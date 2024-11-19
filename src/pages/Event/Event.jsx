import { useEffect, useState } from 'react'
import './event.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getInvitations, deleteInvitation } from '@store/actions/invitation'
import { getFullDate } from '@helpers/dateHelper'
import { Loading, PopupDelete, PopupEventForm, Table } from '@components'
import { getTimeFromTimestamp } from 'helpers/dateHelper'

function Event() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {invitations, loading} = useSelector(state => state.invitation)
    const [openPopupDelete, setOpenPopupDelete] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const [event, setEvent] = useState(null)

    const headerColumns = [
        {id: 'no', name: '', width: '2%'},
        {id: 'event_name', name: 'Nama Acara', width: '20%'},
        {id: 'event_date_format', name: 'Tanggal', width: '20%'},
        {id: 'event_time_format', name: 'Jam', width: '20%'},
        {id: 'total_invitations', name: 'Total tamu', width: '25%'},
        {id: 'action', name: '', width: '10%', isCustomTd: true}
    ];

    const bodyData = (JSON.parse(JSON.stringify(invitations))).map(invitation => {
        invitation.event_date_format = getFullDate(invitation.event_date)
        invitation.event_time_format = getTimeFromTimestamp(invitation.event_date)
        return invitation
    })

    useEffect(() => {
        dispatch(getInvitations())
    }, [dispatch])

    const handleOpenForm = () => {
        setOpenForm(true)
    }

    const handleOpenDeletePopup = (payload) => {
        setOpenPopupDelete(true)
        setEvent(payload)
    }

    const handleDeleteEvent = (payload) => {
        setOpenPopupDelete(false)
        if (payload) dispatch(deleteInvitation(event.id))
        setEvent(null)
    }

    const handleTdClick = (type, data) => {
        if (type === 'open-detail-popup') {
            navigate('/event/'+data.id)
        } else if (type === 'open-delete-popup') {
            handleOpenDeletePopup(data)
        }
    };

    const renderCustomTd = (data, onTdClick) => {
        return (
            <div className='ai-table__td-actions'>
                <div
                    className='ai-table__td-actions__icon view'
                    onClick={() => onTdClick('open-detail-popup', data)}
                >
                    <i className="far fa-eye" />
                </div>
                <div className='ai-table__td-actions__icon delete'>
                    <i
                        className="fas fa-trash-alt"
                        onClick={() => onTdClick('open-delete-popup', data)}
                    />
                </div>
            </div>
        );
    };

    return (
        <>
            {loading && <Loading is_fullscreen={true} />}

            <div className='ai-events__container'>
                <div className='ai-events__container-content'>
                    <Table
                        placeholderFind={'Cari Acara...'}
                        headerColumns={headerColumns}
                        bodyData={bodyData}
                        renderCustomTd={renderCustomTd}
                        onTdClick={handleTdClick}
                        handleOpenForm={handleOpenForm}
                    />
                </div>
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