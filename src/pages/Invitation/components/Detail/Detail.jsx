import './detail.scss'
import { Logo } from '../'
import date from '@assets/date.png'
import point from '@assets/point.png'

function Detail() {
  return (
    <section className='ai-detail__container'>
        <div className='ai-detail__content'>
            <div className='ai-detail__invitation'>
                <p>Please</p>
                <p>JOIN US FOR THE</p>
            </div>
            <div className='ai-detail__title'>
                <h1>Wedding</h1>
                <p>of</p>
            </div>
            <Logo />
            <div className='ai-detail__date'>
                <img src={date} alt="" />
                <p>selasa</p>
                <p>24 DESEMBER 2024</p>
                <p>PUKUL 12.00 WITA - SELESAI</p>
            </div>
            <div className='ai-detail__location'>
                <img src={point} alt="" />
                <p>MI KARAKTER</p>
                <p>MUTIARA BUNDA BALI</p>
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