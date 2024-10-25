import './qrcode.scss'
import qrCodeBackground from '@assets/qr_code_background.png'
import wishBackground from '@assets/background_wish.png'
import qrCode from '@assets/qr_code.png'

function QrCode() {
    const handleCloseQrQode = () => {
        const qrCodeSection = document.querySelector('.ai-qrcode__container')
        if (qrCodeSection) {
            qrCodeSection.style.bottom = '-100vh';
        }
    }

    return (
        <div className='ai-qrcode__container' onClick={handleCloseQrQode}>
            <div className='ai-qrcode__cover'>
                <img className='ai-qrcode--cover' src={wishBackground} alt="" srcset="" />
            </div>
            <div className='ai-qrcode__content'>
                <img src={qrCodeBackground} alt="" />
                <div className='ai-qrcode__content-detail'>
                    <div className='ai-qrcode__content-detail__guest'>
                        <h1>KEPADA YTH.</h1>
                        <p>BAPAK/IBU/SAUDARA/I</p>

                        <h1 className='ai-qrcode__content-detail__guest--name'>BPK. ARRASYID FADEL FATONSYAH</h1>

                        <p>DI TEMPAT</p>
                    </div>

                    <div className='ai-qrcode__content-detail__event'>
                        <h1>ACARA :</h1>
                        <p>Selasa, 24 Desember 2024</p>
                        <p>Pukul 12:00 WITA - Selesai</p>
                    </div>

                    <div className='ai_qrcode__code'>
                        <img src={qrCode} alt="" />
                    </div>
                </div>
            </div>
            <div className='ai-qrcode__footer'>
                Copyright ©2024-Arkhadesignfeed. All Right Reserved.
            </div>
        </div>
    )
}

export default QrCode