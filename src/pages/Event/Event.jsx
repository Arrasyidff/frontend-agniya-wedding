import { useEffect, useState } from 'react'
import './event.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents, deleteEvent } from '@store/actions/event'
import { getFullDate } from '@helpers/dateHelper'
import { Loading, PopupDelete, PopupEventForm, PopupSuccess, Table } from '@components'
import { useDebounce } from 'utils/hooks'

function Event() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {events, loading, isSuccess} = useSelector(state => state.event)
    const [openPopupDelete, setOpenPopupDelete] = useState(false)
    const [openPopupSuccess, setOpenPopupSuccess] = useState(false)
    const [openMessage, setOpenMessage] = useState(true)
    const [openForm, setOpenForm] = useState(false)
    const [event, setEvent] = useState(null)
    const [search, setSearch] = useState('')
    const dobouncedSearch = useDebounce(search)
    const [headerColumns, setHeaderColumns] = useState([
        {id: 'no', name: '', width: '2%'},
        {id: 'event_name', name: 'Nama Acara', width: '20%'},
        {id: 'event_date_format', name: 'Tanggal', width: '15%', justifyContent: 'center'},
        {id: 'event_time', name: 'Jam', width: '15%', isCustomTd: true, justifyContent: 'center'},
        {id: 'total_invitations', name: 'Total tamu', width: '15%', justifyContent: 'center'},
        {id: 'action', name: '', width: '48%', isCustomTd: true}
    ])

    const bodyData = ([...events]).map(invitation => {
        invitation.event_date_format = getFullDate(invitation.event_date)
        return invitation
    })

    useEffect(() => {
        dispatch(getEvents(dobouncedSearch))
    }, [dispatch, dobouncedSearch])

    const handleOpenForm = () => {
        setOpenForm(true)
    }

    const handleOpenDeletePopup = (payload) => {
        setOpenPopupDelete(true)
        setEvent(payload)
    }

    const handleDeleteEvent = async (payload) => {
        let isDeleted = false
        setOpenPopupDelete(false)
        if (payload) {
            isDeleted = await dispatch(deleteEvent(event.id))
            if (isDeleted) {
                setOpenMessage('berhasil di hapus')
                setOpenPopupSuccess(true)
            }
        }
    }

    const handleSortOrder = (id) => {
        let newHeaderColumns = JSON.parse(JSON.stringify(headerColumns))
        newHeaderColumns = newHeaderColumns.map(col => {
            if (col.id === id) {
                if (!col?.sort) col.sort = 'asc'
                else if (col.sort === 'asc') col.sort = 'desc'
                else if (col.sort === 'desc') col.sort = 'asc'
            } else {
                col.sort = null
            }
            return col
        })
        setHeaderColumns(newHeaderColumns)
    }

    const handleTdClick = (type, data) => {
        if (type === 'open-detail-popup') {
            navigate('/event/'+data.id)
        } else if (type === 'open-delete-popup') {
            handleOpenDeletePopup(data)
        }
    }

    const renderCustomTd = (data, onTdClick, colId) => {
        if (colId === 'event_time') {
            return (
                <div className='ai-events__event-times'>
                    {data.event_time.map((time, i) => (
                        <p key={i} className='ai-events__event-time'>{time.start} - {time.end}</p>
                    ))}
                </div>
            )
        }
        return (
            <div className='ai-table__td-actions justify-end'>
                <div
                    className='ai-table__td-actions__icon view'
                    onClick={() => onTdClick('open-detail-popup', data)}
                >
                    <i className="far fa-eye" />
                </div>
                <div
                    className='ai-table__td-actions__icon delete'
                    onClick={() => onTdClick('open-delete-popup', data)}
                >
                    <i className="fas fa-trash-alt" />
                </div>
            </div>
        )
    }

    return (
        <>
            {loading && <Loading is_fullscreen={true} />}

            <div className='ai-events__container'>
                <div className='ai-events__container-content'>
                    <Table
                        search={search}
                        placeholderFind={'Cari Acara...'}
                        headerColumns={headerColumns}
                        bodyData={bodyData}
                        renderCustomTd={renderCustomTd}
                        onChangeSearch={setSearch}
                        onTdClick={handleTdClick}
                        handleOpenForm={handleOpenForm}
                        handleSortOrder={handleSortOrder}
                    />
                </div>
            </div>

            {openForm && (
                <PopupEventForm
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

            {(isSuccess && openPopupSuccess) && (
                <PopupSuccess
                    detailName={event.event_name}
                    description={openMessage}
                    onEvent={setOpenPopupSuccess}
                />
            )}
        </>
    )
}

export default Event