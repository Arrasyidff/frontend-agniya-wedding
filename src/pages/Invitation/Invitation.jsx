import './invitation.scss'
import { Cover, Quote, Brides, Detail, Gallery } from './components'

function Invitation() {
    return (
        <div className='ai__container'>
            <Cover />
            <Quote />
            <Brides />
            <Detail />
            <Gallery />
        </div>
    )
}

export default Invitation