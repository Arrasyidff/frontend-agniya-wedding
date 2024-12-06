import { useEffect, useState } from 'react'
import './guest.scss'
import { Loading, Table } from '@components'
import { useSelector, useDispatch } from 'react-redux'
import { getInvitations } from '@store/actions/invitation'
import { useDebounce } from 'utils/hooks'

function Guest() {
    /** data */
    const dispatch = useDispatch()
    const {invitations, loading} = useSelector(state => state.invitation)
    const [search, setSearch] = useState('')
    const dobouncedSearch = useDebounce(search)
    const [sort, setSort] = useState(null)
    const [headerColumns, setHeaderColumns] = useState([
        {id: 'no', name: '', width: '2%'},
        {id: 'name', name: 'Nama', width: '25%'},
        {id: 'phone_number', name: 'HP', width: '15%', justifyContent: 'center'},
        {id: 'guest_count', name: 'Jumlah Tamu', width: '15%', justifyContent: 'center'},
        {id: 'attendance', name: 'Konfirmasi Kehadiran', width: '15%', justifyContent: 'center', isCustomTd: true},
        {id: 'wish', name: 'Ucapan Harapan', width: '30%'},
    ])
    /** end data */

    /** lifecycle */
    useEffect(() => {
        dispatch(getInvitations(dobouncedSearch, sort))
    }, [dispatch, dobouncedSearch, sort])
    /** end lifecycle */

    /** methods */
    const handleSortOrder = (id) => {
        let newHeaderColumns = [...headerColumns]
        newHeaderColumns = newHeaderColumns.map(col => {
            if (col.id === id) {
                let sort = ''
                if (!col?.sort) sort = 'asc'
                else if (col.sort === 'asc') sort = 'desc'
                else if (col.sort === 'desc') sort = 'asc'

                col.sort = sort
                setSort({key: col.id, order: sort})
            } else {
                col.sort = null
            }
            return col
        })
        setHeaderColumns(newHeaderColumns)
    }

    const renderCustomTd = (data, onTdClick, colId) => {
        if (colId === 'attendance') {
            return (
                <div className='ai-table__td-actions'>
                    <div className={`ai-table__td-actions__icon ${data.attendance === true ? 'success' : 'delete'}`}>
                        {(data.attendance === true) ?
                            (<i className='far fa-check-circle' />) :
                            (<i className="fas fa-times" />)
                        }
                    </div>
                </div>
            )
        }
        return ''
    }
    /** end methods */

    return (
        <>
            {loading && <Loading is_fullscreen={true} />}
            
            <div className='ai-guest__container'>
                <div className='ai-guest__container-content'>
                    <Table
                        search={search}
                        placeholderFind={'Cari Tamu...'}
                        headerColumns={headerColumns}
                        bodyData={invitations}
                        onChangeSearch={setSearch}
                        handleSortOrder={handleSortOrder}
                        renderCustomTd={renderCustomTd}
                    />
                </div>
            </div>
        </>
    )
}

export default Guest