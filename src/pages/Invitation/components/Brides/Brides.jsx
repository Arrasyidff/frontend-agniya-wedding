import './brides.scss'
import brideFlower from '@assets/brides_flower.png'
// import backgroundGradient from '@assets/background_gradient.png'

function Brides() {
  return (
    <section id='ai-brides' className='ai-brides__container'>
        {/* <img className='ai-brides--background-gradient' src={backgroundGradient} alt="" srcSet="" /> */}
        <div className='ai-brides__bride-container'>
            <div className='ai-brides__bride-image'></div>
            <div className='ai-brides__bride-detail'>
                <div className='ai-brides__bride-detail__nickname'>
                    <h1>Aghniya</h1>
                    <span></span>
                </div>
                <div className='ai-brides__bride-detail__info'>
                    <h1 className='ai-brides__bride-detail__info--name'>
                        Aghniyarrizqi Iara Fadhilla
                    </h1>
                    <p>Son of</p>
                    <h1 className='ai-brides__bride-detail__info--name'>
                        Bpk. H. Mukhlis Wahyudin
                    </h1>
                    <h1 className='ai-brides__bride-detail__info--name'>
                        Ibu. Sri Utami
                    </h1>
                </div>
            </div>
        </div>
        <img className='ai-brides--bride-flower' src={brideFlower} alt="" />
        <div className='ai-brides__bride-container'>
            <div className='ai-brides__bride-detail'>
                <div className='ai-brides__bride-detail__nickname'>
                    <h1>Izzul</h1>
                    <span></span>
                </div>
                <div className='ai-brides__bride-detail__info'>
                    <h1 className='ai-brides__bride-detail__info--name'>
                        Muhammad Dzulfiqar Noor
                    </h1>
                    <p>Son of</p>
                    <h1 className='ai-brides__bride-detail__info--name'>
                        Bpk. Rudy Widyatmiko
                    </h1>
                    <h1 className='ai-brides__bride-detail__info--name'>
                        Ibu. Siti Nurhayati
                    </h1>
                </div>
            </div>
            <div className='ai-brides__bride-image'></div>
        </div>
    </section>
  )
}

export default Brides