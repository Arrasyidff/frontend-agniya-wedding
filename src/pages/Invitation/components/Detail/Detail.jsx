import './detail.scss'
import logoImg from '@assets/logo.png'
import date from '@assets/date_icon.png'
import point from '@assets/location_icon.png'
import { getDayFromTimestamp, getFullDate, getTimeFromTimestamp } from '@helpers/dateHelper'

function Detail() {
    return (
        <section id='ai-detail' className='ai-detail__container'>
            <div className='ai-detail__content'>
                <div className='ai-detail__header'>
                    <p>Please</p>
                    <p>Join us for the</p>
                </div>

                <div className='ai-detail__title'>
                    <h1>Wedding Reception</h1>
                </div>

                <span className='ai-detail--title-separator'>Of</span>

                <img alt='image-logo' className='ai-detail--logo' src={logoImg} />

                <div className='ai-detail__date'>
                    <img src={date} alt="" />
                    <p>{ getDayFromTimestamp(Date.now()) }</p>
                    <p>{ getFullDate(Date.now()) }</p>
                    <p>Sesi 2</p>
                    <p>PUKUL { getTimeFromTimestamp(Date.now()) } - {getTimeFromTimestamp(Date.now())}</p>
                </div>

                <div className='ai-detail__location'>
                    <img src={point} alt="" />
                    <p>Area Out Door Madrasah Karakter Mutiara Bunda Bali</p>
                    <p className='ai-detail__location--description'>
                        Jalan Pura Dalem Penataran 
                        Anyar Gg. Nuri No.99, Pemogan, Denpasar 
                        Selatan, Kota Denpasar, Bali
                    </p>
                    <button className='ai-detail__location--btn'>
                        Open Maps
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Detail