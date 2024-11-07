import { useEffect, useState } from 'react'
import './guest.scss'
import { PopupDelete, PopupGuestForm, Loading, Table } from '@components'
import { useSelector, useDispatch } from 'react-redux'
import { getGuests, deleteGuest } from '@store/actions/guest'

function Guest() {
    const dispatch = useDispatch()
    const {guests, loading} = useSelector(state => state.guest)
    const [openForm, setOpenForm] = useState(false)
    const [openPopupDelete, setOpenPopupDelete] = useState(false)
    const [guestEdit, setGuestEdit] = useState(null)

    useEffect(() => {
        dispatch(getGuests());
    }, [dispatch])

    const handleOpenForm = () => {
        setGuestEdit(null)
        setOpenForm(true)
    }

    const handleOpenEditForm = (payload) => {
        setGuestEdit(payload)
        setOpenForm(true)
    }

    const handleOpenDeletePopup = (payload) => {
        setGuestEdit(payload)
        setOpenPopupDelete(true)
    }

    const handleDeleteGuest = (payload) => {
        setOpenPopupDelete(false)
        if (payload === true) dispatch(deleteGuest(guestEdit.id))
    }

    const headerColumns = [
        {id: 'no', name: 'No.', width: '3%'},
        {id: 'name', name: 'Nama', width: '10%'},
        {id: 'email', name: 'Email', width: '10%'},
        {id: 'phone_number', name: 'HP', width: '10%'},
        {id: 'acquaintance_from', name: 'Kenalan dari pihak', width: '10%'},
        {id: 'address', name: 'Alamat', width: '10%'},
        {id: 'additional_notes', name: 'Informarsi Tambahan', width: '10%'},
        {id: 'action', name: '', width: '1.5%', isCustomTd: true}
    ];

    const handleTdClick = (type, guestEdit) => {
        if (type === 'open-edit-popup') {
            handleOpenEditForm(guestEdit)
        } else if (type === 'open-delete-popup') {
            handleOpenDeletePopup(guestEdit)
        }
    };

    const renderCustomTd = (guestEdit, onTdClick) => {
        return (
            <div className='ai-guest__td-actions'>
                <div className='ai-guest__td-actions__icon'>
                    <i
                        className="fas fa-pencil-alt"
                        onClick={() => onTdClick('open-edit-popup', guestEdit)}
                    />
                </div>
                <div className='ai-guest__td-actions__icon'>
                    <i
                        className="fas fa-trash-alt"
                        onClick={() => onTdClick('open-delete-popup', guestEdit)}
                    />
                </div>
            </div>
        );
    };

    return (
        <>
            {loading && <Loading is_fullscreen={true} />}
            
            <div className='ai-guest__container'>
                <div className='ai-guest__actions'>
                    <button
                        className='ai-guest--btn-create'
                        onClick={() => handleOpenForm(true)}
                    >Tambah Tamu
                    </button>
                </div>

                <Table
                    headerColumns={headerColumns}
                    bodyData={guests}
                    renderCustomTd={renderCustomTd}
                    onTdClick={handleTdClick}
                />
            </div>

            {openForm && (
                <PopupGuestForm
                    guestEdit={guestEdit}
                    open={openForm}
                    setOpen={setOpenForm}
                />
            )}

            {openPopupDelete && (
                <PopupDelete
                    onEvent={handleDeleteGuest}
                    detailName={guestEdit.name}
                />
            )}
        </>
    )
}

export default Guest