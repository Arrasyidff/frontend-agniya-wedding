import './gallery.scss'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import gallery1 from '@assets/gallery-1.jpg'
import gallery2 from '@assets/gallery-2.jpg'
import gallery3 from '@assets/gallery-3.jpg'
import gallery4 from '@assets/gallery-4.jpg'
import gallery5 from '@assets/gallery-5.jpg'
import gallery6 from '@assets/gallery-6.jpg'
import gallery7 from '@assets/gallery-7.jpg'
import gallery8 from '@assets/gallery-8.jpg'
import galleryFull from '@assets/gallery-full.jpg'

function Gallery() {
    const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8]
    return (
        <section className='ai-gallery__container animate'>
            <div className="ai-gallery__content">
                <div id='ai-story' className='ai-gallery__love-story-container'>
                    <div className='ai-gallery__title'>
                        <h1>Love Story</h1>
                    </div>
                    <p>
                        Cerita ini dimulai ketika Izzul dan Aghniya berada dalam satu rombongan jamaah umroh yang difasilitasi oleh pesantren tempat mereka berdua  mengenyam pendidikan.
                    </p>
                    <p>
                        Suatu ketika saat sholat subuh di Masjid Nabawi di Madinah, tepatnya di raudhah’, Izzul mendoakan baik semua untuk orang yang terlintas di benaknya. Tidak ada angin, tidak ada hujan, terlintas nama Aghniya dalam pikirannya.
                    </p>
                    <p>
                        Izzul pun mengingat jika hari itu adalah tanggal 25 April 2018, hari dimana Aghniya berulang tahun ke-19. Sebagai teman satu kelas sejak di bangku SMA, Izzul pun mendoakan baik untuk Aghniya.
                    </p>
                    <p>
                        Dan siapa sangka  saat itu adalah momen ketika Izzul menyadari ada perasaan yang berbeda kepada Aghniya.
                    </p>
                    <p>
                        Alhamdulillah,  Allah menyatukan hati kedua insan dalam satu ikatan cinta. Semoga Allah menjadikan mereka pasangan abadi di dunia hingga di surga keabadian. Amiin
                    </p>
                </div>

                <div id='ai-gallery'>
                    <div className='ai-gallery__title'>
                        <h1>Gallery</h1>
                        <h2>Our Memories</h2>
                    </div>
                    <PhotoProvider>
                        <div className='ai-gallery__photos'>
                                {images.map((image, i) => (
                                    <div key={i} className='ai-gallery__photo'>
                                        <PhotoView src={image}>
                                            <img src={image} alt="" srcSet="" />
                                        </PhotoView>
                                    </div>
                                ))}
                        </div>
                        <div className='ai-gallery__family-photo'>
                            <PhotoView src={galleryFull}>
                                <img src={galleryFull} alt="" srcSet="" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </div>
            </div>
        </section>
    )
}

export default Gallery