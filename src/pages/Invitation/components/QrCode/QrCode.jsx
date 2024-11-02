import './qrcode.scss'
import { Popup } from '@components/'
import qrCodeSeparator from '@assets/qr_code_separator.png'
import { QRCodeSVG } from 'qrcode.react';

function QrCode({ invitation, openPopup, setOpenPopup }) {
    // const getDayFromTimestamp = (timestamp) => {
    //     const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    //     return days[new Date(+timestamp).getDay()]
    // }

    // const getMonthFromTimestamp = (timestamp) => {
    //     const months = [
    //         'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
    //         'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    //     ];
    //     return months[new Date(+timestamp).getMonth()];
    // }

    // const getYearFromTimestamp = (timestamp) => new Date(+timestamp).getFullYear();

    // const getFullDate = (timestamp) => {
    //     const date = new Date(+timestamp)

    //     return `${getDayFromTimestamp(timestamp)}, ${date.getDate()} ${getMonthFromTimestamp(timestamp)} ${getYearFromTimestamp(timestamp)}`
    // }

    // const getTimeFromTimestamp = (timestamp) => {
    //     const date = new Date(+timestamp)
    //     const hours = date.getHours().toString().padStart(2, '0');
    //     const minutes = date.getMinutes().toString().padStart(2, '0');
    //     return `${hours}.${minutes} WITA`
    // }

    // const handleCloseQrQode = () => {
    //     const qrCodeSection = document.querySelector('.ai-qrcode__container')
    //     if (qrCodeSection) {
    //         qrCodeSection.style.bottom = '-100vh';
    //     }

    //     const qrCodeOverlay = document.querySelector('.ai-qrcode--overlay')
    //     if (qrCodeOverlay) {
    //         qrCodeOverlay.style.display = 'none'
    //     }

    //     const aiContainer = document.querySelector('.ai__container')
    //     if (aiContainer) {
    //         aiContainer.style.overflowY = 'scroll'
    //     }
    // }

    return (
        <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            title={'Check In.'}
            description={`Silahkan tunjukkan QR Code ini kepada penerima tamu undangan di lokasi pada acara “${invitation?.invitation?.event_name.toUpperCase()}”. Scan QR Code digunakan untuk mencatat kehadiran anda.`}
            paddingSide={'1.25rem'}
        >
            <div className='ai-qrcode__container' style={{ padding: '0 1.25rem' }}>
                <div className='ai-qrcode--image' />
                <img className='ai-qrcode--separator' src={qrCodeSeparator} alt="" srcset="" />
                <div className='ai-qrcode__qr-code'>
                    <QRCodeSVG
                        value={'http://localhost:3000/invitation/1'}
                        title={"AI Wedding"}
                        level={"L"}
                    />
                </div>
            </div>
        </Popup>
    )
}

export default QrCode