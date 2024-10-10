import './sidebar.scss'

function Sidebar() {
    return (
        <div className='ai-sidebar__container'>
            <div className='ai-sidebar__title-container'>
                <h1>Agniya & IZZUL.</h1>
            </div>
            <div className='ai-sidebar__items'>
                <div className='ai-sidebar__item'>
                    <div className='ai-sidebar__item-text'>
                        {/* asc */}
                        <span class="material-symbols-outlined">groups</span>
                    </div>
                    <div className='ai-sidebar__item-text text'>
                        <span>Tamu Undangan</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar