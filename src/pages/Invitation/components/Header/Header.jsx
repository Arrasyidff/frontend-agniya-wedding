import './header.scss'
// import logoImg from '@assets/logo.png'

function Header() {
    return (
        <div className='ai-header__container'>
            <div className='ai-header__content'>
                {/* <div className='ai-header__logo-container'>
                    <img className='ai-header--logo' src={logoImg} alt="logo" />
                </div> */}
                <div className='ai-header__counter-container' style={{ display: 'none' }}>
                    <div className='ai-header__counter'>
                        <p>00</p>
                        <p>hari</p>
                    </div>
                    <div className='ai-header__counter'>
                        <p>00</p>
                        <p>hari</p>
                    </div>
                    <div className='ai-header__counter'>
                        <p>00</p>
                        <p>hari</p>
                    </div>
                    <div className='ai-header__counter'>
                        <p>00</p>
                        <p>hari</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header