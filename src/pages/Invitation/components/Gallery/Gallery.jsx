import './gallery.scss'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import gallery1 from '@assets/gallery-1.png'
import gallery2 from '@assets/gallery-2.png'
import gallery3 from '@assets/gallery-3.png'
import gallery4 from '@assets/gallery-4.png'
import gallery5 from '@assets/gallery-5.png'
import gallery6 from '@assets/gallery-6.png'
import gallery7 from '@assets/gallery-7.png'
import gallery8 from '@assets/gallery-8.png'
import galleryFull from '@assets/gallery-full.png'

function Gallery() {
    const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8]
    return (
        <>
            <section id='ai-gallery' className='ai-gallery__container'>
                <div className="ai-gallery__content">
                    <div className='ai-gallery__title'>
                        <h1>Gallery</h1>
                        <h2>Our Memories</h2>
                    </div>
                    <div className='ai-gallery__photos'>
                    <PhotoProvider>
                        {images.map((image, i) => (
                            <div key={i} className='ai-gallery__photo'>
                                <PhotoView src={image}>
                                    <img src={image} alt="" srcSet="" />
                                </PhotoView>
                            </div>
                        ))}
                    </PhotoProvider>
                    </div>
                    <PhotoProvider>
                        <div className='ai-gallery__family-photo'>
                            <PhotoView src={galleryFull}>
                                <img src={galleryFull} alt="" srcSet="" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </div>
            </section>
        </>
    )
}

export default Gallery