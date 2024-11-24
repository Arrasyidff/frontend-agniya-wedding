import './detail.scss'
import date from '@assets/date_icon.png'
import point from '@assets/location_icon.png'
import { getDayFromTimestamp, getFullDate, getTimeFromTimestamp } from '@helpers/dateHelper'

function Detail({ invitation }) {

    return (
        <section id='ai-detail' className='ai-detail__container'>
            {/* <img className='ai-detail--background-gradient' src={backgroundGradient} alt="" srcSet="" /> */}
            <div className='ai-detail__content'>
                <div className='ai-detail__invitation'>
                    <p>Please</p>
                    <p>JOIN US FOR THE</p>
                </div>

                <div className='ai-detail__title'>
                    <h1>{ invitation?.invitation.event_name }</h1>
                </div>

                <span className='ai-detail--title-separator'>Of</span>

                <div className='ai-detail__date'>
                    <img src={date} alt="" />
                    <p>{ getDayFromTimestamp(invitation?.invitation.event_date) }</p>
                    <p>{ getFullDate(invitation?.invitation.event_date) }</p>
                    <p>PUKUL { getTimeFromTimestamp(invitation?.invitation.event_date) } - SELESAI</p>
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