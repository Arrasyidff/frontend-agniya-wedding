import './detail.scss'
import logoImg from '@assets/logo.png'
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
        if (code === 'dfs') {
            day = 'Selasa'
            date = '24 Desember 2024'
            session = 2
            time = '19:00 - 21:00'
        } else if (code === 'dsf') {
            day = 'Rabu'
            date = '25 Desember 2024'
            session = 1
            time = '16:00 - 18:00'
        } else if (code === 'dss') {
            day = 'Selasa'
            date = '25 Desember 2024'
            session = 2
            time = '19:00 - 21:00'
        }

        if (!session) return ''

        return (
            <>
                <div className='ai-detail__date'>
                    <p>{day}</p>
                    <p>{date}</p>
                </div>
                <div className='ai-detail__date'>
                    <p>Sesi {session}</p>
                    <p>Pukul {time}</p>
                </div>
            </>
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
                    <i className="fas fa-map-marker-alt" />
                    <p>Area Out Door Madrasah Karakter Mutiara Bunda Bali</p>
                    <p className='ai-detail__location--description'>
                        Jalan Pura Dalem Penataran 
                        Anyar Gg. Nuri No.99, Pemogan, Denpasar 
                        Selatan, Kota Denpasar, Bali
                    </p>
                    <button className='ai-detail__location--btn'
                        onClick={() => window.open('https://maps.app.goo.gl/xc4Jv2nWKvvfobZV8')}
                    >
                        Open Maps
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Detail