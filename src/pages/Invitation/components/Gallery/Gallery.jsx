import './gallery.scss'

function Gallery() {
    return (
        <section id='ai-gallery' className='ai-gallery__container'>
            <div className="ai-gallery__content">
                <div className='ai-gallery__title'>
                    <h1>Gallery</h1>
                    <h2>Our Memories</h2>
                </div>
                <div className='ai-gallery__photos'>
                    <div className='ai-gallery__photo'></div>
                    <div className='ai-gallery__photo'></div>
                    <div className='ai-gallery__photo'></div>
                    <div className='ai-gallery__photo'></div>
                    <div className='ai-gallery__photo'></div>
                    <div className='ai-gallery__photo'></div>
                </div>
            </div>
        </section>
    )
}

export default Gallery