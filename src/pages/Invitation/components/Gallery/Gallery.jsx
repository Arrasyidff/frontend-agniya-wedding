import './gallery.scss'

function Gallery() {
    return (
        <section className='ai-gallery__container'>
            <h1>GALLERY</h1>
            <h2>OUR MEMORIES</h2>
            <div className='ai-gallery__photos'>
                <div className='ai-gallery__photos--single'>
                </div>
                <div className='ai-gallery__photos-trio'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='ai-gallery__photos-duo'>
                    <div></div>
                    <div></div>
                </div>
                <div className='ai-gallery__photos-trio'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default Gallery