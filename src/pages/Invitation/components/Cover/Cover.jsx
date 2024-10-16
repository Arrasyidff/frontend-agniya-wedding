import './cover.scss'
import { Logo } from '../'
import backgroundGradient from '@assets/background_gradient.png'

function Cover({ name }) {
    return (
        <section className="ai-cover__container">
            <img className='ai-cover--background-gradient' src={backgroundGradient} alt="" srcset="" />
            <div className="ai-cover__title">
                <h1>Save The Date</h1>
                <h2>FOR THE WEDDING OF</h2>
            </div>
            <Logo />
            <div className='ai-cover__for'>
                <p>KEPADA YTH.</p>
                <p>BAPAK/IBU/SAUDARA/I</p>
                <h1>{ name }</h1>
                <p>DI TEMPAT</p>
            </div>
            <button className='ai-cover--open-btn'>
                BUKA undangan
            </button>
        </section>
    )
}

export default Cover