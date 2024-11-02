import { useState } from 'react'
import './gift.scss'
import giftBackground from '@assets/gift_background.png'
import atm from '@assets/atm.png'
import microchip from '@assets/microchip.png'
import backgroundPopup from '@assets/background_overlay.png'

function Gift() {
    const [openGift, setOpenGift] = useState(false)

    const accounts = [
        {id: 'bca', no: '12345678910123', name: 'AGHNIYARRIZQI IARA FADHILLA'},
        {id: 'mandiri', no: '12345678910123', name: 'AGHNIYARRIZQI IARA FADHILLA'},
        {id: 'dana', no: '12345678910123', name: 'AGHNIYARRIZQI IARA FADHILLA'},
    ]
    const handleShowGiftCard = () => {
        setOpenGift(!openGift)

        const aiGiftPopup = document.querySelector('.ai-gift__popup')
        if (aiGiftPopup) {
            const aiContainer = document.querySelector('.ai__container')
            const aiPopupOverlay = document.querySelector('.ai-gift__popup-overlay')
            const aiGiftPopupCards = document.querySelector('.ai-gift__popup-cards')
            if (aiGiftPopupCards) {
                aiGiftPopupCards.scrollTop = 0
            }
            
            if (openGift) {
                aiGiftPopup.style.bottom = '0'
                if (aiContainer) {
                    aiContainer.style.overflowY = 'hidden'
                }
                if (aiPopupOverlay) {
                    aiPopupOverlay.style.display = 'block'
                }
            } else {
                aiGiftPopup.style.bottom = '-120vh'
                if (aiContainer) {
                    aiContainer.style.overflowY = 'scroll'
                }
                if (aiPopupOverlay) {
                    aiPopupOverlay.style.display = 'none'
                }
            }
        }
    }

    return (
        <>
            <div className='ai-gift__popup-overlay' />
            <section id='ai-gift' className='ai-gift__container'>
                <div className='ai-gift__thanks'>
                    <h1>TANDA KASIH (E-GIFT)</h1>
                    <p>Doa dan Restu keluarga, sahabat, serta rekan-rekan adalah anugerah yang sangat berharga bagi kami. Sebagai bentuk kasih, juga tanpa mengurangi rasa hormat, Anda dapat memberikan kado secara melalui</p>
                    <button className='ai-gift--btn' onClick={() => handleShowGiftCard()}>AMPLOP DIGITAL</button>
                </div>

                <div className='ai-gift__popup'>
                    <div className='ai-gift__popup-sub'>
                        <img className='ai-gift__popup--background' src={backgroundPopup} alt="" />

                        <div className="ai-gift__popup-header">
                            <div className='ai-gift__popup-header__text'>
                                <h1>Wedding Gift.</h1>
                                <p>Silahkan transfer hadiah melalui nomor rekening maupun dompet digital berikut :</p>
                            </div>
                            <i className="far fa-times-circle" onClick={() => handleShowGiftCard()}></i>
                        </div>

                        <div className='ai-gift__popup-cards'>
                            {accounts.map(account => (
                                <div key={account.id} className='ai-gift__popup-card'>
                                    <img className='ai-gift__popup-card--background' src={atm} alt="" />

                                    <div className='ai-gift__popup-card__content'>
                                        <p className='ai-gift__popup-card__content--id'>{account.id}</p>
                                        <div className='ai-gift__popup-card__content-detail'>
                                            <img src={microchip} alt="" />
                                            <p>{account.no}</p>
                                            <p>{account.name}</p>
                                        </div>
                                        <button className='ai-gift__popup-card__content--copy'>Copy</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='ai-gift__cover'>
                    <img src={giftBackground} alt="" />
                </div>

                <div className='ai-gift__thanks'>
                    <h1>THANK YOU</h1>
                    <p>Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dalam hari bahagia ini. Terima kasih atas segala ucapan, doa, dan perhatian yang diberikan</p>
                    <p className='ai-gift__thanks--seeyou'>See you on Our Wedding Day!</p>
                </div>

                <div className='ai-gift__footer'>
                    <p>Copyright ©2024-Arkhadesignfeed. All Right Reserved.</p>
                </div>
            </section>
        </>
    )
}

export default Gift