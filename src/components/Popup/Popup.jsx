import './popup.scss'
import backgroundPopup from '@assets/background_overlay.png'

function Popup({ openPopup, setOpenPopup, title, description, paddingSide, children }) {

    return (
        <>
            <div
                className='ai-popup__popup-overlay'
                style={{ display: openPopup ? 'block' : 'none' }}
            />
            
            <div
                className='ai-popup__popup'
                style={{ bottom: openPopup ? '0' : '-120vh' }}
            >
                <div className='ai-popup__popup-sub slide-top'>
                    <img className='ai-popup__popup--background' src={backgroundPopup} alt="" />

                    <div className="ai-popup__popup-header" style={{ paddingLeft: paddingSide, paddingRight: paddingSide }}>
                        <div className='ai-popup__popup-header__text'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                        <i className="far fa-times-circle" onClick={() => setOpenPopup(!openPopup)}></i>
                    </div>

                    {/* Children */}
                    <div className='ai-popup__popup-children'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup