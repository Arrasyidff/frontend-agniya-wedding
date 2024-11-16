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
    const [isDetailMode, setIsDetailMode] = useState(null)

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
        {id: 'no', name: '', width: '2%'},
        {id: 'name', name: 'Nama', width: '25%'},
        {id: 'phone_number', name: 'HP', width: '15%'},
        {id: 'acquaintance_from', name: 'Kenalan dari pihak?', width: '15%'},
        {id: 'address', name: 'Alamat', width: '30%'},
        {id: 'action', name: '', width: '10%', isCustomTd: true}
    ];

    const handleTdClick = (type, guestEdit) => {
        setIsDetailMode(false)
        if ((type === 'open-edit-popup') || (type === 'open-detail-popup')) {
            handleOpenEditForm(guestEdit)
            if (type === 'open-detail-popup') {
                setIsDetailMode(true)
            }
        } else if (type === 'open-delete-popup') {
            handleOpenDeletePopup(guestEdit)
        }
    };

    const renderCustomTd = (guestEdit, onTdClick) => {
        return (
            <div className='ai-guest__td-actions'>
                <div
                    className='ai-guest__td-actions__icon view'
                    onClick={() => onTdClick('open-detail-popup', guestEdit)}
                >
                    <i className="far fa-eye" />
                </div>
                <div
                    className='ai-guest__td-actions__icon edit'
                    onClick={() => onTdClick('open-edit-popup', guestEdit)}
                >
                    <i className="fas fa-pencil-alt" />
                </div>
                <div className='ai-guest__td-actions__icon delete'>
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
                <div className='ai-guest__container-content'>
                    <Table
                        headerColumns={headerColumns}
                        bodyData={guests}
                        renderCustomTd={renderCustomTd}
                        onTdClick={handleTdClick}
                        handleOpenForm={handleOpenForm}
                    />
                </div>
            </div>

            {openForm && (
                <PopupGuestForm
                    guestEdit={guestEdit}
                    open={openForm}
                    setOpen={setOpenForm}
                    isDetailMode={isDetailMode}
                />
            )}

            {openPopupDelete && (
                <PopupDelete
                    onEvent={handleDeleteGuest}
                    title={'Hapus Tamu?'}
                    detailName={guestEdit.name}
                />
            )}
        </>
    )
}

export default Guest