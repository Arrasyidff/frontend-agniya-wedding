import './invitation.scss'
import { useEffect, useState } from 'react'
import { Header, Cover, Quote, Brides, Detail, Gallery, Rsvp, Wish, Gift, Navigation } from './components'
import { useSearchParams } from 'react-router-dom'
import 'react-photo-view/dist/react-photo-view.css';

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
                        handleAnimation(element)
                    }
                });
            },
            {
                root: null,
                rootMargin: '-70% 0px', // Mulai trigger di tengah viewport
            }
            // { threshold: 0.1 } // Elemen terlihat 10% di viewport
        );
        (sections ?? []).forEach((section) => observer.observe(section));

        return () => {
            (sections ?? []).forEach((section) => observer.unobserve(section));
        };
    }, [])
    /** end-lifecyle */

    /** methods */
    function handleAnimation(element) {
        if (!element.classList.contains('slide-top')) {
            element.classList.add('slide-top')
            element.style.opacity = '1'

            const elements = element.querySelectorAll('.animate');
            elements.forEach((el, index) => {
                if (el.classList.contains('ai-brides--content')) {
                    el.style.animationDelay = `${index * 1}s`;
                } else {
                    el.style.animationDelay = `${index * .8}s`;
                }
                    
                if (el.classList.contains('ai-brides__detail') || el.classList.contains('ai-brides--flower-separator')) {
                    el.classList.add('slide-top');
                } else {
                    el.classList.add('scale-up-bottom');
                }
            });
        }
    }

    // function 
    /** end methods */

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