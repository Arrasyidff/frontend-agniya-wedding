import './invitation.scss'
import { Cover, Quote, Brides, Detail, Gallery, Rsvp, Wish } from './components'

function Invitation() {
    return (
        <div className='ai__container'>
            <Cover />
            <Quote />
            <Brides />
            <Detail />
            <Gallery />
            <Rsvp />
            <Wish />
        </div>
    )
}

export default Invitation