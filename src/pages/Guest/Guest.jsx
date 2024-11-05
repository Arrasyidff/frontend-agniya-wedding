import { useEffect, useState } from 'react'
import './guest.scss'
import { PopupDelete, PopupGuestForm, Loading } from '@components'
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

                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>HP</th>
                            <th>Kenalan dari pihak</th>
                            <th>Alamat</th>
                            <th>Informasi Tambahan</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {guests.map((guest, i) => (
                            <tr key={guest.id}>
                                <td>{ i+1 }</td>
                                <td>{ guest.name }</td>
                                <td>{ guest.email }</td>
                                <td>{ guest.phone_number }</td>
                                <td>{ guest.acquaintance_from }</td>
                                <td>{ guest.address }</td>
                                <td>{ guest.additional_notes }</td>
                                <td>
                                    <div className='ai-guest__td-actions'>
                                        <i onClick={() => handleOpenEditForm(guest)} className="fas fa-pencil-alt"></i>
                                        <i onClick={() => handleOpenDeletePopup(guest)} className="fas fa-trash-alt"></i>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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