import './detail.scss'
import { Logo } from '../'
import date from '@assets/date_icon.png'
import point from '@assets/location_icon.png'

function Detail({ invitation }) {
    const getDayFromTimestamp = (timestamp) => {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        return days[new Date(+timestamp).getDay()]
    }

    const getMonthFromTimestamp = (timestamp) => {
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        return months[new Date(+timestamp).getMonth()];
    }

    const getYearFromTimestamp = (timestamp) => new Date(+timestamp).getFullYear();

    const getFullDate = (timestamp) => {
        return `${getDayFromTimestamp(timestamp)} ${getMonthFromTimestamp(timestamp)} ${getYearFromTimestamp(timestamp)}`
    }

    const getTimeFromTimestamp = (timestamp) => {
        const date = new Date(+timestamp)
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}.${minutes} WITA`
    }

    return (
        <section className='ai-detail__container'>
            <div className='ai-detail__content'>
                <div className='ai-detail__invitation'>
                    <p>Please</p>
                    <p>JOIN US FOR THE</p>
                </div>

                <div className='ai-detail__title'>
                    <h1>{ invitation?.invitation.event_name }</h1>
                </div>

                <span className='ai-detail--title-separator'>Of</span>

                <Logo size={'medium'} />

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