import './detail.scss'
import logoImg from '@assets/logo.png'
import point from '@assets/location_icon.png'
import { useParams } from 'react-router-dom'

function Detail() {
    const { code } = useParams()

    const handleSessionTime = (code) => {
        if (typeof code !== 'string') return ''
        code = code.toLowerCase()

        let day = ''
        let date = ''
        let session = ''
        let time = ''
        if (code === 'sss1') {
            day = 'Selasa'
            date = '24 Desember 2024'
            session = 1
            time = '14:50 - 15:50'
        } else if (code === 'sss2') {
            day = 'Selasa'
            date = '24 Desember 2024'
            session = 2
            time = '15:50 - 16:50'
        } else if (code === 'rss1') {
            day = 'Rabu'
            date = '25 Desember 2024'
            session = 1
            time = '14:50 - 15:50'
        } else if (code === 'rss2') {
            day = 'Selasa'
            date = '25 Desember 2024'
            session = 2
            time = '15:50 - 16:50'
        }

        if (!session) return ''

        return (
            <div className='ai-detail__date'>
                <img src={date} alt="" />
                <p>{day}</p>
                <p>{date}</p>
                <br />
                <p>Sesi {session}</p>
                <p>Pukul {time}</p>
            </div>
        )
    }

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

                {handleSessionTime(code)}

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