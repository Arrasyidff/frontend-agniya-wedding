import './invitation.scss'
import { Cover, Quote, Brides } from './components'

function Invitation() {
    return (
        <div className='ai__container'>
            <Cover />
            <Quote />
            <Brides />
        </div>
    )
}

export default Invitation