import './popupFormWrapper.scss'

function PopupFormWrapper({
    open,
    setOpen,
    titleForm,
    handleOnSubmit,
    children,
    // width='500px',
    width='auto',
    isDetailMode=false
}) {
    if (!open) return
    
    return (
        <div className='ai-popup-form-wrapper__container'>
            <div className='ai-popup-form-wrapper__content slide-top' style={{ width }}>
                {/* <button className='ai-popup-form-wrapper--close' onClick={() => setOpen(false)}>
                    <i className="fas fa-times"></i>
                </button> */}

                <div className='ai-popup-form-wrapper__header'>
                    <h1 className='ai-popup-form-wrapper__header--title'>{titleForm}</h1>
                    <button className='ai-popup-form-wrapper__header--close' onClick={() => setOpen(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className='ai-popup-form-wrapper__children'>
                    {children}
                </div>

                {!isDetailMode && (
                    <div className='ai-popup-form-wrapper__actions'>
                        <button
                            style={{ width: width === 'auto' ? '50%' : '200px' }}
                            className='cancel'
                            onClick={() => setOpen(false)}
                        >Batal</button>
                        <button
                            style={{ width: width === 'auto' ? '50%' : '200px' }}
                            onClick={() => handleOnSubmit()}
                        >Simpan</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PopupFormWrapper