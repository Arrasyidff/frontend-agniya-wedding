import './brides.scss'
import brideFlower from '@assets/brides_flower.png'
import backgroundGradient from '@assets/background_gradient.png'

function Brides() {
  return (
    <section className='ai-brides__container'>
        <img className='ai-brides--background-gradient' src={backgroundGradient} alt="" srcSet="" />
        <div className='ai-brides__bride-container'>
            <div className='ai-brides__bride-image'>
            </div>
            <div className='ai-brides__bride-detail'>
                <h1 className='ai-brides__bride-detail--nickname'>AGHNIYA</h1>
                <span className='ai-brides__bride-detail--separator'></span>
                <h1 className='ai-brides__bride-detail--fullname'>
                    AGHNIYARRIZQI IARA FADHILLA
                </h1>
                <span className='ai-brides__bride-detail--from'>PUTRI DARI :</span>
                <h1 className='ai-brides__bride-detail--parent-name'>BPK. H. MUKHLIS WAHYUDIN</h1>
                <span className='ai-brides__bride-detail--parent-separator'>&</span>
                <h1 className='ai-brides__bride-detail--parent-name'>IBU. SRI UTAMI</h1>
            </div>
        </div>
        <img className='ai-brides--bride-flower' src={brideFlower} alt="" />
        <div className='ai-brides__bride-container'>
            <div className='ai-brides__bride-detail'>
                <h1 className='ai-brides__bride-detail--nickname'>IZZUL</h1>
                <span className='ai-brides__bride-detail--separator'></span>
                <h1 className='ai-brides__bride-detail--fullname'>
                    MUHAMMAD DZULFIQAR NOOR
                </h1>
                <span className='ai-brides__bride-detail--from'>PUTRA DARI :</span>
                <h1 className='ai-brides__bride-detail--parent-name'>BPK. RUDY WIDYATMIKO</h1>
                <span className='ai-brides__bride-detail--parent-separator'>&</span>
                <h1 className='ai-brides__bride-detail--parent-name'>IBU. SITI NURHAYATI</h1>
            </div>
            <div className='ai-brides__bride-image'>
            </div>
        </div>
    </section>
  )
}

export default Brides