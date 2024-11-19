import './popupSuccess.scss'

function PopupSuccess({ detailName, description, onEvent }) {
    return (
        <div className='ai-popup-success__container'>
            <div className='ai-popup-success__content slide-top'>
                <div className='ai-popup-success__logo'>
                    <i className="far fa-check-circle" />
                </div>
                <p className='ai-popup-success--title'>Berhasil!</p>
                <p className='ai-popup-success--description'>
                    <span>{detailName}</span> {description}
                </p>

                <button onClick={() => onEvent(false)}>Kembali</button>
            </div>
        </div>
    )
}

export default PopupSuccess