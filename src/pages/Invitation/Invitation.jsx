import './invitation.scss'
import { useEffect, useState } from 'react'
import { Header, Cover, Quote, Brides, Detail, Gallery, Rsvp, Wish, Gift, Navigation } from './components'
import { useSearchParams } from 'react-router-dom'

function Invitation() {
    const [searchParams] = useSearchParams()
    const [openGift, setOpenGift] = useState(false)
    const [isPlayMusic, setIsPlayMusic] = useState(false)

    /** lifecyle */
    useEffect(() => {
        const sections = Array.from(document.getElementsByTagName('section'))
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const element = entry.target

                        if (!element.classList.contains('slide-top')) {
                            element.classList.add('slide-top')
                            element.style.opacity = '1'
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: "-70% 0px", // Mulai trigger di tengah viewport
            }
            // { threshold: 0.1 } // Elemen terlihat 10% di viewport
        );
        (sections ?? []).forEach((section) => observer.observe(section));

        return () => {
            (sections ?? []).forEach((section) => observer.unobserve(section));
        };
    }, [])
    /** end-lifecyle */

    return (
        <div className='ai__container'>
            <div className='ai__container__content-left' />
            <div className='ai__container__content'>
                <div className='ai__container__content-main'>
                    <Cover
                        setIsPlayMusic={setIsPlayMusic}
                        name={searchParams.get('to')}
                    />
                    <Header />
                    <Quote />
                    <Brides />
                    <Detail />
                    <Gallery />
                    <Rsvp />
                    <Wish />
                    <Gift
                        openGift={openGift}
                        setOpenGift={setOpenGift}
                    />
                    <Navigation
                        setOpenGift={setOpenGift}
                        isPlayMusic={isPlayMusic}
                        setIsPlayMusic={setIsPlayMusic}
                    />
                </div>
            </div>
            <div className='ai__container__content-right' />
        </div>
    )
}

export default Invitation