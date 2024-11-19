import './popupFormWrapper.scss'

function PopupFormWrapper({
    open,
    setOpen,
    titleForm,
    handleOnSubmit,
    children,
    width='500px',
    isDetailMode=false
}) {
    if (!open) return;
    
    return (
        <div className='ai-popup-form-wrapper__container'>
            <div className='ai-popup-form-wrapper__content slide-top' style={{ width }}>
                <button className='ai-popup-form-wrapper--close' onClick={() => setOpen(false)}>
                    <i className="fas fa-times"></i>
                </button>

                <h1 className='ai-popup-form-wrapper--title'>{titleForm}</h1>

                <div className='ai-popup-form-wrapper__children'>
                    {children}
                </div>

                {!isDetailMode && (
                    <div className='ai-popup-form-wrapper__actions'>
                        <button className='cancel' onClick={() => setOpen(false)}>Batal</button>
                        <button onClick={() => handleOnSubmit()}>Simpan</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PopupFormWrapper