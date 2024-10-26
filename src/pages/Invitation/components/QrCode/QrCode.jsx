import './qrcode.scss'
import qrCodeBackground from '@assets/qr_code_background.png'
import { QRCodeSVG } from 'qrcode.react';

function QrCode({ invitation }) {
    const getDayFromTimestamp = (timestamp) => {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        return days[new Date(+timestamp).getDay()]
    }

    const getMonthFromTimestamp = (timestamp) => {
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        return months[new Date(+timestamp).getMonth()];
    }

    const getYearFromTimestamp = (timestamp) => new Date(+timestamp).getFullYear();

    const getFullDate = (timestamp) => {
        const date = new Date(+timestamp)

        return `${getDayFromTimestamp(timestamp)}, ${date.getDate()} ${getMonthFromTimestamp(timestamp)} ${getYearFromTimestamp(timestamp)}`
    }

    const getTimeFromTimestamp = (timestamp) => {
        const date = new Date(+timestamp)
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}.${minutes} WITA`
    }

    const handleCloseQrQode = () => {
        const qrCodeSection = document.querySelector('.ai-qrcode__container')
        if (qrCodeSection) {
            qrCodeSection.style.bottom = '-100vh';
        }

        const qrCodeOverlay = document.querySelector('.ai-qrcode--overlay')
        if (qrCodeOverlay) {
            qrCodeOverlay.style.display = 'none'
        }

        const aiContainer = document.querySelector('.ai__container')
        if (aiContainer) {
            aiContainer.style.overflowY = 'scroll'
        }
    }

    return (
        <>
            <div className='ai-qrcode--overlay'></div>
            <div className='ai-qrcode__container'>
                <div className='ai-qrcode__header'>
                    <div className='ai-qrcode__header-left'>
                        <i className="fas fa-check-circle"></i>
                        <p>CHECK-IN</p>
                    </div>
                    <div className='ai-qrcode__header-right'>
                        <i onClick={() => handleCloseQrQode()} className="fas fa-times"></i>
                    </div>
                </div>
                <div className='ai-qrcode__content'>
                    <img src={qrCodeBackground} alt="" />
                    <div className='ai-qrcode__content-detail'>
                        <div className='ai-qrcode__content-detail__guest'>
                            <h1>KEPADA YTH.</h1>
                            <p>BAPAK/IBU/SAUDARA/I</p>

                            <h1 className='ai-qrcode__content-detail__guest--name'>
                                {invitation?.guest?.name}
                            </h1>

                            <p>DI TEMPAT</p>
                        </div>

                        <div className='ai-qrcode__content-detail__event'>
                            <h1>ACARA :</h1>
                            {/* <p>Selasa, 24 Desember 2024</p> */}
                            <p>{ getFullDate(invitation?.invitation.event_date) }</p>
                            <p>Pukul { getTimeFromTimestamp(invitation?.invitation.event_date) } - Selesai</p>
                        </div>

                        <div className='ai_qrcode__code'>
                            <QRCodeSVG
                                level='L'
                                size={280}
                                value={invitation?.id}
                            />
                        </div>

                        <p className='ai-qrcode__content-description'>
                            Silakan tunjukkan QR Code ini kepada 
                            penerima tamu undangan di lokasi acara. 
                            Scan QR Code digunakan untuk mencatat 
                            kehadiran anda
                        </p>
                    </div>

                    <div className='ai-qrcode__footer'>
                        Copyright ©2024-Arkhadesignfeed. All Right Reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default QrCode