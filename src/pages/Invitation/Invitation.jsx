import './invitation.scss'
import { Cover, Quote, Brides, Detail } from './components'

function Invitation() {
    return (
        <div className='ai__container'>
            <Cover />
            <Quote />
            <Brides />
            <Detail />
        </div>
    )
}

export default Invitation