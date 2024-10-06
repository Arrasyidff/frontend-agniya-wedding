import './invitation.scss'
import { Cover, Quote, Brides, Detail, Gallery, Rsvp } from './components'

function Invitation() {
    return (
        <div className='ai__container'>
            <Cover />
            <Quote />
            <Brides />
            <Detail />
            <Gallery />
            <Rsvp />
        </div>
    )
}

export default Invitation