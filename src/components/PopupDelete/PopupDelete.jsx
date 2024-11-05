import './popupdelete.scss'

function PopupDelete({ detailName, onEvent }) {
    return (
        <div className='ai-popup-delete__container'>
            <div className='ai-popup-delete__content'>
                <div className='ai-popup-delete__content-logo'>
                    <i className="fas fa-trash-alt"></i>
                </div>

                <h1 className='ai-popup-delete__content--title'>
                    Hapus Tamu?
                </h1>
                <p className='ai-popup-delete__content--description'>
                    Anda akan menghapus tamu '{detailName}'. Tindakan ini tidak dapat dibatalkan.
                </p>
                <div className='ai-popup-delete__content-actions'>
                    <button className='cancel' onClick={() => onEvent(false)}>Batalkan</button>
                    <button onClick={() => onEvent(true)}>Hapus Tamu</button>
                </div>
            </div>
        </div>
    )
}

export default PopupDelete