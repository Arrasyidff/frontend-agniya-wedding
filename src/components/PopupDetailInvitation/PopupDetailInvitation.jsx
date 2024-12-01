import React from 'react'
import './popupDetailInvitation.scss'
import { PopupFormWrapper } from '@components'

function PopupDetailInvitation({
    open,
    setOpen,
    // detailData,
}) {
    return (
        <PopupFormWrapper
            open={open}
            setOpen={setOpen}
            titleForm="Detail Undangan"
            isDetailMode={true}
            width='600px'
        >
            <div className='ai-popup-detail-invitation__container'>
                <div className='ai-popup-detail-invitation__field'>
                    <p>Nama</p>
                    <p>ARRASYID FADEL FATONSYAH</p>
                </div>
                <div className='ai-popup-detail-invitation__field'>
                    <p>Email</p>
                    <p>arfafa@mail.com</p>
                </div>
                <div className='ai-popup-detail-invitation__field'>
                    <p>Hp</p>
                    <p>089635164141</p>
                </div>
                <div className='ai-popup-detail-invitation__field'>
                    <p>Kenalan dari pihak?</p>
                    <p>Keluarga Pak Haji Udin</p>
                </div>
                <div className='ai-popup-detail-invitation__field'>
                    <p>Alamat</p>
                    <p>JL. MERTA AGUNG NO. 55</p>
                </div>
                <div className='ai-popup-detail-invitation__field'>
                    <p>Tambahan Informasi</p>
                    <p>JL. MERTA AGUNG NO. 55</p>
                </div>
                <div className='ai-popup-detail-invitation__field'>
                    <p>Konfirmasi Kehadiran</p>
                    <p>Hadir</p>
                </div>
                <div className='ai-popup-detail-invitation__field'>
                    <p>Kehadiran</p>
                    <p>Hadir</p>
                </div>
                <div className='ai-popup-detail-invitation__field'>
                    <p>Sesi</p>
                    <p>14:50</p>
                </div>
                <div className='ai-popup-detail-invitation__field'>
                    <p>Check In Time</p>
                    <p>14:50</p>
                </div>
            </div>
        </PopupFormWrapper>
    )
}

export default PopupDetailInvitation