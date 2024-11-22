import { useEffect, useState } from 'react'
import './eventDetail.scss'
import { useDebounce } from 'utils/hooks'
import { PopupDetailInvitation, PopupCheckInForm, Table } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { getInvitations } from 'store/actions/invitation'

function EventDetail() {
    /** data */
    const dispatch = useDispatch()
    const { invitations } = useSelector(state => state.invitation)
    const [search, setSearch] = useState('')
    const dobouncedSearch = useDebounce(search)
    const [openForm, setOpenForm] = useState(false)
    const [openDetailInvitation, setOpenDetailInvitation] = useState(false)
    const [data, setData] = useState(null)
    const [activeTab, setActiveTab] = useState(1)
    const [headerColumns, setHeaderColumns] = useState([
        {id: 'no', name: '', width: '2%'},
        {id: 'name', name: 'Nama', width: '15%'},
        {id: 'attendance_status', name: 'Konfirmasi Kehadiran', width: '10%', justifyContent: 'center', isCustomTd: true},
        {id: 'guest_count', name: 'Total Tamu', width: '10%', justifyContent: 'center'},
        {id: 'attendance', name: 'Kehadiran Di Tempat', width: '10%', justifyContent: 'center', isCustomTd: true},
        {id: 'check_in_time', name: 'Check In Time', width: '10%', justifyContent: 'center'},
        {id: 'action', name: '', width: '5%', isCustomTd: true}
    ])
    /** end data */

    /** lifecycle */
    useEffect(() => {
        dispatch(getInvitations(dobouncedSearch))
    }, [dispatch, dobouncedSearch])

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]
        if (openForm && body) {
            body.style.overflow = 'hidden'
        }

        return () => {
            if (body) body.style.overflow = 'visible'
        }
    }, [openForm])
    /** end lifecycle */

    /** methods */
    const handleSortOrder = (id) => {
        let newHeaderColumns = [...headerColumns]
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
        console.log(type)
        if (type === 'open-confirm-popup') {
            setData(data)
            setOpenForm(true)
        } else if (type === 'open-detail-popup') {
            setOpenDetailInvitation(true)
            setData(data)
        }
    };
    /** end methods */

    /** component */
    function attendanceIcon(item, onTdClick, colId) {
        return (
            <div className='ai-table__td-actions'>
                <div
                    className={`ai-table__td-actions__icon ${item[colId] === true ? 'success' : (item[colId] === false ? 'delete' : 'flat')}`}
                    onClick={() => onTdClick((colId === 'attendance') && (item[colId] === null) ? 'open-confirm-popup' : '', item)}
                    style={{ cursor: (colId === 'attendance') && (item[colId] === null) ? 'pointer' : 'default' }}
                >
                    {(item[colId] === true) ? (
                        <i className="far fa-check-circle" />
                    ) : ((item[colId] === false) ? (
                        <i className="fas fa-times" />
                    ) : (
                        <i className="fas fa-question" />
                    ))}
                </div>
            </div>
        )
    }

    function actionsIcon(item, onTdClick) {
        let icons = [
            {id: 'view', type: 'open-detail-popup', icon: (<i className="far fa-eye" />)},
            {id: 'edit', type: 'open-confirm-popup', icon: (<i className="fas fa-pencil-alt" />)},
            {id: 'delete', type: 'open-delete-popup', icon: (<i className="fas fa-trash-alt" />)},
        ]
        if (item.attendance === null) icons = icons.filter(icon => icon.id !== 'edit')

        return (
            <div className='ai-table__td-actions' style={{ justifyContent: 'flex-end' }}>
                {icons.map((icon) => (
                    <div
                        key={icon.id}
                        className={`ai-table__td-actions__icon ${icon.id}`}
                        onClick={() => onTdClick(icon.type, item)}
                    >
                        {icon.icon}
                    </div>
                ))}
            </div>
        )
    }

    function renderCustomTd(item, onTdClick, colId) {
        if (colId && (colId).includes('attendance')) {
            return attendanceIcon(item, onTdClick, colId)
        }
        return actionsIcon(item, onTdClick)
    };
    /** end component */

    return (
        <>
            <div className='ai-event-detail__container'>
                <div className='ai-event-detail__container-content'>
                    <div className='ai-event-detail__header'>
                        <h1 className='ai-event-detail__header--title'>
                            Akad Nikah
                        </h1>
                        <div className='ai-event-detail__header-info'>
                            <p className='ai-event-detail__header--description'>
                                24 Desember 2024
                            </p>
                            <div className='ai-event-detail__header-times'>
                                <span>20:20 - 21:20</span>
                                <span>20:20 - 21:20</span>
                                <span>20:20 - 21:20</span>
                            </div>
                        </div>
                    </div>

                    <div className='ai-event-detail__tabs'>
                        <button
                            onClick={() => setActiveTab(prev => prev = 1)}
                            className={`ai-event-detail__tab ${activeTab === 1 ? 'active' : ''}`}
                        >
                            <p>Undangan</p>
                        </button>
                        <button
                            onClick={() => setActiveTab(prev => prev = 2)}
                            className={`ai-event-detail__tab ${activeTab === 2 ? 'active' : ''}`}
                        >
                            <p>Non Undangan (Onsite)</p>
                        </button>
                    </div>

                    <div className='ai-event-detail__guests-info'>
                        <div>
                            <p>Total Undangan/Tamu Hadir</p>
                            <p>200/400</p>
                        </div>
                        <div>
                            <p>Total Undangan/Tamu Tidak Hadir</p>
                            <p>200/400</p>
                        </div>
                        <div>
                            <p>Total Undangan/Tamu Keseluruhan</p>
                            <p>200/400</p>
                        </div>
                    </div>

                    <Table
                        search={search}
                        placeholderFind={'Cari Tamu...'}
                        headerColumns={headerColumns}
                        bodyData={invitations}
                        renderCustomTd={renderCustomTd}
                        onChangeSearch={setSearch}
                        onTdClick={handleTdClick}
                        // handleOpenForm={handleOpenForm}
                        handleSortOrder={handleSortOrder}
                    />
                </div>
            </div>

            {openDetailInvitation && (
                <PopupDetailInvitation
                    open={openDetailInvitation}
                    setOpen={setOpenDetailInvitation}
                    detailData={data}
                />
            )}

            {openForm && (
                <PopupCheckInForm
                    open={openForm}
                    setOpen={setOpenForm}
                    eventEdit={data}
                />
            )}
        </>
    )
}

export default EventDetail