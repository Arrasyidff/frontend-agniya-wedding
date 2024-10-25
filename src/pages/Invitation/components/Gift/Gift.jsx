import './gift.scss'
import bca from '@assets/bca.png'

function Gift() {
    return (
        <section id='ai-gift' className='ai-gift__container'>
            <h1 className='ai-gift--title'>TANDA KASIH (E-GIFT)</h1>
            <p className='ai-gift--description'>Doa dan Restu keluarga, sahabat, serta rekan-rekan adalah anugerah yang sangat berharga bagi kami. Sebagai bentuk kasih, juga tanpa mengurangi rasa hormat, Anda dapat memberikan kado secara melalui</p>
            <img src={bca} alt="" />
            <p className='ai-gift--person'>Aghniyarrizqi Iara Fadhilla</p>
            <button>Copy No. Rekening</button>

            <div className='ai-gift__cover'></div>

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