import './gallery.scss'
import backgroundGradient from '@assets/background_gradient.png'

function Gallery() {
    return (
        <section id='ai-gallery' className='ai-gallery__container'>
            <img className='ai-gallery--background-gradient' src={backgroundGradient} alt="" srcSet="" />
            <div className="ai-gallery__content">
                <div className='ai-gallery__title'>
                    <h1>GALLERY</h1>
                    <h2>OUR MEMORIES</h2>
                </div>
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
            </div>
        </section>
    )
}

export default Gallery