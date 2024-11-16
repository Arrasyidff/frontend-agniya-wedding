import './popupGuestTable.scss'
import { PopupFormWrapper, Table } from '@components'

function PopupGuestTable({ open, setOpen }) {
    const headerColumns = [
        {id: 'no', name: 'No.', width: '3%'},
        {id: 'name', name: 'Nama', width: '10%'},
        {id: 'attendance_status', name: 'Akan hadir?', width: '10%'},
        {id: 'guest_count', name: 'Berapa orang?', width: '10%'},
        {id: 'phone_number', name: 'HP', width: '10%'},
        {id: 'check_in_time', name: 'Waktu Check In', width: '10%'},
        {id: 'action', name: '', width: '1.5%', isCustomTd: true}
    ];

    const mockingData = [
        {id: 'no', 'no': 'test'},
        {id: 'name', 'name': 'test'},
        {id: 'attendance_status', 'attendance_status': 'test'},
        {id: 'guest_count', 'guest_count': 'test'},
        {id: 'phone_number', 'phone_number': 'test'},
        {id: 'check_in_time', 'check_in_time': 'test'},
        {id: 'action', 'action': 'test'},
        {id: 'no', 'no': 'test'},
        {id: 'name', 'name': 'test'},
        {id: 'attendance_status', 'attendance_status': 'test'},
        {id: 'guest_count', 'guest_count': 'test'},
        {id: 'phone_number', 'phone_number': 'test'},
        {id: 'check_in_time', 'check_in_time': 'test'},
        {id: 'action', 'action': 'test'}
    ];

    const handleTdClick = (type, guestEdit) => {
        if (type === 'open-edit-popup') {
            // handleOpenEditForm(guestEdit)
        } else if (type === 'open-delete-popup') {
            // handleOpenDeletePopup(guestEdit)
        }
    };

    const renderCustomTd = (guestEdit, onTdClick) => {
        return (
            <div className='ai-event-detail__table__td-actions'>
                <div className='ai-event-detail__table__td-actions__icon'>
                    <i className="far fa-envelope" />
                </div>
            </div>
        );
    };

    return (
        <PopupFormWrapper
            open={open}
            setOpen={setOpen}
            titleForm={'Tambah Undangan'}
            width='1000px'
            // handleOnSubmit={handleOnSubmit}
        >
            <div className='ai-popup-guest-table__container'>
                <Table
                    headerColumns={headerColumns}
                    bodyData={mockingData}
                    renderCustomTd={renderCustomTd}
                    handleTdClick={handleTdClick}
                />
            </div>
        </PopupFormWrapper>
    )
}

export default PopupGuestTable