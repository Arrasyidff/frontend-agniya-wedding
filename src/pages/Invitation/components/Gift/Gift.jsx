import './gift.scss'
import { Popup } from '@components'
import giftBackground from '@assets/gift_background.png'
import atm from '@assets/atm.png'
import microchip from '@assets/microchip.png'

function Gift({ openGift, setOpenGift }) {
    const accounts = [
        {id: 'bca', no: '12345678910123', name: 'AGHNIYARRIZQI IARA FADHILLA'},
        {id: 'mandiri', no: '12345678910123', name: 'AGHNIYARRIZQI IARA FADHILLA'},
        {id: 'dana', no: '12345678910123', name: 'AGHNIYARRIZQI IARA FADHILLA'},
    ]

    return (
        <>
            <section id='ai-gift' className='ai-gift__container'>
                <section className='ai-gift__thanks'>
                    <h1>TANDA KASIH (E-GIFT)</h1>
                    <p>Doa dan Restu keluarga, sahabat, serta rekan-rekan adalah anugerah yang sangat berharga bagi kami. Sebagai bentuk kasih, juga tanpa mengurangi rasa hormat, Anda dapat memberikan kado secara melalui</p>
                    <button className='ai-gift--btn' onClick={() => setOpenGift(!openGift)}>AMPLOP DIGITAL</button>
                </section>

                <section className='ai-gift__cover'>
                    <img src={giftBackground} alt="" />
                </section>

                <section className='ai-gift__footer-section'>
                    <section className='ai-gift__thanks'>
                        <h1>THANK YOU</h1>
                        <p>Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dalam hari bahagia ini. Terima kasih atas segala ucapan, doa, dan perhatian yang diberikan</p>
                        <p className='ai-gift__thanks--seeyou'>See you on Our Wedding Day!</p>
                    </section>
                    <div className='ai-gift__footer'>
                        <p>Copyright ©2024-Arkhadesignfeed. All Right Reserved.</p>
                    </div>
                </section>
            </section>

            <Popup
                openPopup={openGift}
                setOpenPopup={setOpenGift}
                title={'Wedding Gift.'}
                description={`Silahkan transfer hadiah melalui nomor rekening maupun dompet digital berikut :`}
                paddingSide={'1.25rem'}
            >
                <div className='ai-gift__popup' style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
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
            </Popup>
        </>
    )
}

export default Gift