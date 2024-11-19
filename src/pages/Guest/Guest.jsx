import { useEffect, useState } from 'react'
import './guest.scss'
import { PopupDelete, PopupSuccess, PopupGuestForm, Loading, Table } from '@components'
import { useSelector, useDispatch } from 'react-redux'
import { getGuests, deleteGuest } from '@store/actions/guest'
import { useDebounce } from 'utils/hooks'

function Guest() {
    const dispatch = useDispatch()
    const {guests, loading, isSuccess} = useSelector(state => state.guest)
    const [openForm, setOpenForm] = useState(false)
    const [openPopupSuccess, setOpenPopupSuccess] = useState(false)
    const [openMessage, setOpenMessage] = useState(true)
    const [openPopupDelete, setOpenPopupDelete] = useState(false)
    const [guestEdit, setGuestEdit] = useState(null)
    const [isDetailMode, setIsDetailMode] = useState(null)
    const [search, setSearch] = useState('')
    const dobouncedSearch = useDebounce(search)
    const [headerColumns, setHeaderColumns] = useState([
        {id: 'no', name: '', width: '2%'},
        {id: 'name', name: 'Nama', width: '25%'},
        {id: 'phone_number', name: 'HP', width: '15%'},
        {id: 'acquaintance_from', name: 'Kenalan dari pihak?', width: '15%'},
        {id: 'address', name: 'Alamat', width: '30%'},
        {id: 'action', name: '', width: '10%', isCustomTd: true}
    ])

    useEffect(() => {
        dispatch(getGuests(search))
    }, [dispatch, dobouncedSearch])

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]
        if ((openForm || openPopupDelete || openForm) && body) {
            body.style.overflow = 'hidden'
        }

        return () => {
            if (body) body.style.overflow = 'visible'
        }
    }, [openPopupSuccess, openPopupDelete, openForm])

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

    const handleDeleteGuest = (payload) => {
        setOpenPopupDelete(false)
        if (payload === true) {
            setOpenMessage('berhasil di hapus')
            setOpenPopupSuccess(true)
            dispatch(deleteGuest(guestEdit.id))
        }
    }

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
            <div className='ai-table__td-actions'>
                <div
                    className='ai-table__td-actions__icon view'
                    onClick={() => onTdClick('open-detail-popup', guestEdit)}
                >
                    <i className="far fa-eye" />
                </div>
                <div
                    className='ai-table__td-actions__icon edit'
                    onClick={() => onTdClick('open-edit-popup', guestEdit)}
                >
                    <i className="fas fa-pencil-alt" />
                </div>
                <div
                    className='ai-table__td-actions__icon delete'
                    onClick={() => onTdClick('open-delete-popup', guestEdit)}
                >
                    <i className="fas fa-trash-alt" />
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
                        search={search}
                        placeholderFind={'Cari Tamu...'}
                        headerColumns={headerColumns}
                        bodyData={guests}
                        renderCustomTd={renderCustomTd}
                        onChangeSearch={setSearch}
                        onTdClick={handleTdClick}
                        handleOpenForm={handleOpenForm}
                        handleSortOrder={handleSortOrder}
                    />
                </div>
            </div>

            {openForm && (
                <PopupGuestForm
                    open={openForm}
                    guestEdit={guestEdit}
                    isDetailMode={isDetailMode}
                    setOpen={setOpenForm}
                />
            )}

            {openPopupDelete && (
                <PopupDelete
                    title={'Hapus Tamu?'}
                    detailName={guestEdit?.name}
                    onEvent={handleDeleteGuest}
                />
            )}

            {(isSuccess && openPopupSuccess) && (
                <PopupSuccess
                    detailName={guestEdit?.name}
                    description={openMessage}
                    onEvent={setOpenPopupSuccess}
                />
            )}
        </>
    )
}

export default Guest