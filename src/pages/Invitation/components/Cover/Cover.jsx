import './cover.scss'
import { Logo } from '../'

function Cover() {
    return (
        <section className="ai-cover__container">
            <div className="ai-cover__title">
                <h1>Save The Date</h1>
                <h2>FOR THE WEDDING OF</h2>
            </div>
            <Logo />
            <div className='ai-cover__for'>
                <p>KEPADA YTH.</p>
                <p>BAPAK/IBU/SAUDARA/I</p>
                <h1>BPK. ANDRE</h1>
                <p>DI TEMPAT</p>
            </div>
            <button className='ai-cover--open-btn'>
                BUKA undangan
            </button>
        </section>
    )
}

export default Cover