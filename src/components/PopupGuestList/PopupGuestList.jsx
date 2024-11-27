import React, { useEffect, useState, useMemo } from 'react'
import './popupGuestList.scss'
import { PopupFormWrapper, Table } from '@components'
import { useSelector, useDispatch } from 'react-redux'
import { useDebounce } from 'utils/hooks'
import { getGuests } from '@store/actions/guest'
import { createInvitations } from '@store/actions/invitation'

function PopupGuestList({
    open,
    setOpen
}) {
    /** data */
    const dispatch = useDispatch()
    const {guests} = useSelector(state => state.guest)
    const guestsFormat = useMemo(() => {
        return guests.map(guest => {
            guest['isCheck'] = false
            return guest
        })
    }, [guests])
    const [guestsData, setGuestsData] = useState(guestsFormat)
    const [search, setSearch] = useState('')
    const dobouncedSearch = useDebounce(search)
    const [session, setSession] = useState(null)
    const [headerColumns, setHeaderColumns] = useState([
        {id: 'no', name: '', width: '2%'},
        {id: 'name', name: 'Nama', width: '25%'},
        {id: 'phone_number', name: 'HP', width: '15%', justifyContent: 'center'},
        {id: 'acquaintance_from', name: 'Kenalan dari pihak?', width: '15%'},
        {id: 'address', name: 'Alamat', width: '15%'},
        {id: 'action', name: '', width: '10%', isCustomTd: true}
    ])
    /** end data */

    /** lifecycles */
    useEffect(() => {
        dispatch(getGuests(dobouncedSearch))
    }, [dispatch, dobouncedSearch])

    useEffect(() => {
        setGuestsData(guestsFormat)
    }, [guestsFormat])
    /** end lifecycles */

    /** methods */
    const handleOnChangeSession = (payload) => {
        setSession(prev => prev = payload)
    }

    const handleOnSubmit = () => {
        const payload = ([...guestsData]).filter(guest => {
            if (guest.isCheck) guest.session = session.name
            return guest.isCheck === true
        })
        dispatch(createInvitations(payload))
        setOpen(false)
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
        setGuestsData(prev => {
            return prev.map(guest => {
                if (guest.id === data.id) {
                    if (type === 'add-guest') {
                        guest.isCheck = true
                    } else if (type === 'remove-guest') {
                        guest.isCheck = false
                    }
                }
                return guest
            })
        })
    };
    /** end methods */

    /** components */
    function actionsIcon(item, onTdClick) {
        return (
            <div className='ai-table__td-actions' style={{ justifyContent: 'flex-end' }}>
                <button
                    className={`ai-table__td-actions__icon ${item.isCheck ? 'success' : 'add'}`}
                    onClick={() => onTdClick(item.isCheck ? 'remove-guest' : 'add-guest', item)}
                >
                    {item.isCheck ? (
                        <i className="far fa-check-circle" />
                    ) : (
                        <i className="fas fa-plus"></i>
                    )}
                </button>
            </div>
        )
    }
    const renderCustomTd = (data, onTdClick) => {
        return actionsIcon(data, onTdClick)
    };
    /** end components */

    return (
        <PopupFormWrapper
            open={open}
            setOpen={setOpen}
            titleForm="Tambah Undangan"
            width='1200px'
            handleOnSubmit={handleOnSubmit}
        >
            <div className='ai-popup-guest-list__container'>
                <Table
                    search={search}
                    placeholderFind={'Cari Tamu...'}
                    headerColumns={headerColumns}
                    bodyData={guestsData}
                    renderCustomTd={renderCustomTd}
                    onChangeSearch={setSearch}
                    onTdClick={handleTdClick}
                    // handleOpenForm={handleOpenForm}
                    handleSortOrder={handleSortOrder}
                    handleSelect={{
                        placeholder: 'Pilih Sesi',
                        value: session,
                        options: [
                            {id: 1, name: '14:00 - 15:00'},
                            {id: 2, name: '16:00 - 18:00'},
                        ],
                        onChange: handleOnChangeSession
                    }}
                />
            </div>
        </PopupFormWrapper>
    )
};

export default PopupGuestList