import './sidebar.scss'
import aiLogo from '@assets/ai-logo.png'
import { useLocation, useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const navigations = [
        {id: 'guest/list', title: 'Tamu', icon: (<i className="fas fa-users" />)},
        {id: 'guest/share', title: 'Kirim Undangan', icon: (<i className="fas fa-envelope" />)}
    ]

    return (
        <div className='ai-sidebar__container'>
            <div className='ai-sidebar__logo'>
                <img src={aiLogo} alt="" srcSet="" />
            </div>
            <div className='ai-sidebar__menu'>
                {navigations.map(nav => (
                    <div key={nav.id} className={`ai-sidebar__item ${(pathname).includes(nav.id) ? 'active' : ''}`} onClick={() => navigate('/'+nav.id)}>
                        <div className='ai-sidebar__item-logo'>
                            {nav.icon}
                        </div>
                        <p>{nav.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar