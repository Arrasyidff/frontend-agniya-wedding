import './gift.scss'
import giftBackground from '@assets/gift_background.png'

function Gift() {
    return (
        <section id='ai-gift' className='ai-gift__container'>
            <div className='ai-gift__thanks'>
                <h1>TANDA KASIH (E-GIFT)</h1>
                <p>Doa dan Restu keluarga, sahabat, serta rekan-rekan adalah anugerah yang sangat berharga bagi kami. Sebagai bentuk kasih, juga tanpa mengurangi rasa hormat, Anda dapat memberikan kado secara melalui</p>
                <button className='ai-gift--btn'>AMPLOP DIGITAL</button>
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
    )
}

export default Gift