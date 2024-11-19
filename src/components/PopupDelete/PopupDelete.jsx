import './popupdelete.scss'

function PopupDelete({ title, detailName, onEvent }) {
    return (
        <div className='ai-popup-delete__container'>
            <div className='ai-popup-delete__content slide-top'>
                <div className='ai-popup-delete__logo'>
                    <div className='ai-popup-delete__logo-second'>
                        <i className="fas fa-exclamation-circle" />
                    </div>
                </div>
                <p className='ai-popup-delete--title'>{title}</p>
                <p className='ai-popup-delete--description'>
                    Apakah anda yakin ingin menghapus <span>"{detailName}"</span>?
                </p>
                <p className='ai-popup-delete--description'>
                    Tindakan ini tidak dapat dibatalkan
                </p>

                <div className='ai-popup-delete__actions'>
                    <button onClick={() => onEvent(false)}>Kembali</button>
                    <button onClick={() => onEvent(true)}>Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default PopupDelete