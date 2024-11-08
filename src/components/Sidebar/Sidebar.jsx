import './sidebar.scss'
import { useLocation, useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const navigations = [
        {id: 'guests', title: 'Para Tamu', icon: (<i className="fas fa-user-friends"></i>)},
        {id: 'events', title: 'Acara', icon: (<i className="far fa-calendar-alt"></i>)}
    ]

    return (
        <div className='ai-sidebar__container'>
            <div className="ai-sidebar__header">
                <h1>AI</h1>
            </div>

            <h1 className='ai-sidebar--menu'>Menu.</h1>

            <div className='ai-sidebar__items'>
                {navigations.map(nav => (
                    <div
                        key={nav.id}
                        className={`ai-sidebar__item ${('/'+nav.id) === pathname ? 'active' : ''}`}
                        onClick={() => navigate('/'+nav.id)}
                    >
                        <div className='ai-sidebar__logo'>{nav.icon}</div>
                        <p>{nav.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar