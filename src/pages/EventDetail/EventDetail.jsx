import { useEffect, useState } from 'react';
import './eventDetail.scss'
import { Loading, PopupGuestTable, Table } from '@components'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getDetailInvitation } from '@store/actions/invitation'
import { getFullDate, getTimeFromTimestamp } from 'helpers/dateHelper';

function EventDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {detailInvitation, loading} = useSelector(state => state.invitation)
    const [openPopupGuest, setOpenPopupGuest] = useState(false)
    const headerColumns = [
        {id: 'no', name: 'No.', width: '3%'},
        {id: 'name', name: 'Nama', width: '10%'},
        {id: 'attendance_status', name: 'Akan hadir?', width: '10%'},
        {id: 'guest_count', name: 'Berapa orang?', width: '10%'},
        {id: 'phone_number', name: 'HP', width: '10%'},
        {id: 'check_in_time', name: 'Waktu Check In', width: '10%'},
        {id: 'action', name: '', width: '1.5%', isCustomTd: true}
    ];

    useEffect(() => {
        dispatch(getDetailInvitation(id))
    }, [dispatch])

    const bodyData = () => {
        return detailInvitation.guest_invitations.map((item, i) => {

            return {
                no: (i+1),
                id: item.id,
                name: item.guest.name,
                attendance_status: item.attendance_status,
                guest_count: item.guest_count,
                phone_number: item.guest.phone_number,
                check_in_time: item.check_in_time,
                action: ''
            }
        })
    }

    const mockingData = [
        {id: 'no', 'no': 'test'},
        {id: 'name', 'name': 'test'},
        {id: 'attendance_status', 'attendance_status': 'test'},
        {id: 'guest_count', 'guest_count': 'test'},
        {id: 'phone_number', 'phone_number': 'test'},
        {id: 'check_in_time', 'check_in_time': 'test'},
        {id: 'action', 'action': 'test'}
    ];

    const handleCountIsPresentGuest = (isPresentCheck=false) => {
        if (!detailInvitation) return 0

        let guest_invitations = detailInvitation.guest_invitations
        return guest_invitations.filter(item => (item.attendance_status === isPresentCheck)).length
    }

    const handleTdClick = (data) => {
        navigate('/invitation/'+data.id)
    };

    const renderCustomTd = (data, onTdClick) => {
        return (
            <div className='ai-event-detail__table__td-actions'>
                <div
                    onClick={() => onTdClick(data)}
                    className='ai-event-detail__table__td-actions__icon'>
                    <i className="far fa-envelope" />
                </div>
            </div>
        );
    };

    if (loading || !detailInvitation) return <Loading is_fullscreen={true} />

    return (
        <>
            <div className='ai-event-detail__container'>
                <h1 className='ai-event-detail--title'>
                    {detailInvitation.invitation.event_name}
                </h1>
                <p className='ai-event-detail--description'>
                    {getFullDate(detailInvitation.invitation.event_date)}, pukul {getTimeFromTimestamp(detailInvitation.invitation.event_date)} hingga selesai.
                </p>

                <div className='ai-event-detail__cards'>
                    <div className='ai-event-detail__card'>
                        <h1>Hadir</h1>
                        <h1>{handleCountIsPresentGuest(true)}</h1>
                    </div>
                    <div className='ai-event-detail__card'>
                        <h1>Tidak Hadir</h1>
                        <h1>{handleCountIsPresentGuest(false)}</h1>
                    </div>
                    <div className='ai-event-detail__card'>
                        <h1>Total Undangan</h1>
                        <h1>{detailInvitation.guest_invitations.length}</h1>
                    </div>
                </div>

                <div className='ai-event-detail__actions'>
                    <button onClick={() => setOpenPopupGuest(true)}>Tambah Undangan</button>
                </div>

                <div className='ai-event-detail__table'>
                    <Table
                        headerColumns={headerColumns}
                        bodyData={bodyData()}
                        renderCustomTd={renderCustomTd}
                        onTdClick={handleTdClick}
                    />
                </div>
            </div>

            <PopupGuestTable
                open={openPopupGuest}
                setOpen={setOpenPopupGuest}
            />
        </>
    )
}

export default EventDetail