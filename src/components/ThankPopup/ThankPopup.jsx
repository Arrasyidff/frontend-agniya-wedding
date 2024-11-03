import './thankPopup.scss'
import thankIcon from '@assets/thank_icon.png'
import noteIcon from '@assets/note_icon.png'

function ThankPopup({open, setOpen, isConfirmRsvp, isRejectRsvp, isWish}) {
    if (!open) return

    return (
        <div className='ai-thank-popup__container'>
            {isWish && (
                <div className='ai-thank-popup__content slide-top'>
                    <img src={thankIcon} alt="" srcset="" />
                    <h1>THANK YOU!</h1>
                    <p>Terima kasih telah mengisi form wish. Kami menghargai harapan dan dukungan Anda!</p>
                    <div className='ai-thank-popup__content-close' onClick={() => setOpen(!open)}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            )}

            {(isConfirmRsvp || isRejectRsvp) && (
                <div className='ai-thank-popup__content-reject slide-top'>
                    <img src={noteIcon} alt="" srcset="" />
                    <h1>THANK YOU!</h1>
                    {
                        isConfirmRsvp ? (
                            <p>Terima kasih telah mengonfirmasi kehadiran! Kami sangat menantikan kehadiran Anda di acara kami.</p>
                        ) : (
                            <p>Terima kasih telah memberi kabar. Kami akan merindukan kehadiran Anda di acara kami.</p>
                        )
                    }
                    <div className='ai-thank-popup__content-close' onClick={() => setOpen(!open)}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ThankPopup