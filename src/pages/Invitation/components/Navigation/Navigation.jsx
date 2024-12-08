import './navigation.scss'
import { QrCode } from '../index'
import { useEffect, useRef, useState } from 'react'

// import qrQode from '@assets/qr_code.png'
import quoteNav from '@assets/nav_quote.png'
import quoteActiveNav from '@assets/nav_quote_active.png'
import brideNav from '@assets/nav_bride.png'
import brideActiveNav from '@assets/nav_bride_active.png'
import dateNav from '@assets/nav_date.png'
import dateActiveNav from '@assets/nav_date_active.png'
import galleryNav from '@assets/nav_gallery.png'
import galleryActiveNav from '@assets/nav_gallery_active.png'
import wishNav from '@assets/nav_wish.png'
import wishActiveNav from '@assets/nav_wish_active.png'
import giftNav from '@assets/nav_gift.png'
import giftActiveNav from '@assets/nav_gift_active.png'
import music from '@assets/music.mp3'

function Navigation({ 
    setOpenGift,
    isPlayMusic,
    setIsPlayMusic
}) {
    /** data */
    const leftNavigations = [
        { key: 'ai-quote', icon: quoteNav, iconActive: quoteActiveNav },
        { key: 'ai-brides', icon: brideNav, iconActive: brideActiveNav },
        { key: 'ai-detail', icon: dateNav, iconActive: dateActiveNav },
        { key: 'ai-story', icon: (<i className="fas fa-comment-alt" />), iconActive: (<i className="fas fa-comment-alt" />), isIcon: true },
        { key: 'ai-gallery', icon: galleryNav, iconActive: galleryActiveNav },
        { key: 'ai-wish', icon: wishNav, iconActive: wishActiveNav },
        { key: 'ai-gift', icon: giftNav, iconActive: giftActiveNav },
    ]
    // const rightNavigations = [
    //     { key: 'ai-gallery', icon: galleryNav, iconActive: galleryActiveNav },
    //     { key: 'ai-wish', icon: wishNav, iconActive: wishActiveNav },
    //     { key: 'ai-gift', icon: giftNav, iconActive: giftActiveNav },
    // ]
    const [openQrCode, setOpenQrCode] = useState(false)
    const audioRef = useRef(null)
    /** end data */

    /** lifecycles */
    useEffect(() => {
        handleTogglePlay()
        // eslint-disable-next-line
    }, [isPlayMusic])

    useEffect(() => {
        const handleVisibilityChange = () => {
            if ((document.visibilityState === 'hidden') && audioRef?.current) {
                audioRef?.current.pause();
            } else if ((document.visibilityState === 'visible') && audioRef?.current) {
                if (isPlayMusic) audioRef?.current.play();
            }
        };

    const handleBeforeUnload = () => {
        if (audioRef?.current) {
            audioRef?.current.pause();
        }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('beforeunload', handleBeforeUnload);
    };
    }, [isPlayMusic]);    
    /** end lifecycles */

    /** methods */
    const handleNavigation = (nav) => {
        let sectionIntoView = null
        switch (nav) {
            case 'ai-quote':
                sectionIntoView = document.querySelector('.ai-quote__container')
                break
            case 'ai-brides':
                sectionIntoView = document.querySelector('.ai-brides__container')
                break
            case 'ai-detail':
                sectionIntoView = document.querySelector('.ai-detail__container')
                break
            case 'ai-story':
                sectionIntoView = document.getElementById('ai-story')
                break
            case 'ai-gallery':
                sectionIntoView = document.getElementById('ai-gallery')
                break
            case 'ai-wish':
                sectionIntoView = document.querySelector('.ai-wish__container')
                break
            case 'ai-gift':
                sectionIntoView = document.querySelector('.ai-gift__container')
                break
            default:
                break
        }
        if (sectionIntoView) sectionIntoView.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const handleTogglePlay = () => {
        if (!isPlayMusic) {
            audioRef.current.pause()
            setIsPlayMusic(isPlayMusic)
        } else {
            audioRef.current.play()
            audioRef.current.volume = .5
            setIsPlayMusic(isPlayMusic)
        }
    }
    /** end methods */

    return (
        <>
            <audio ref={audioRef} src={music} preload="auto" />

            <div className='ai-navigation__container'>
                <div className='ai-navigation__sub-container'>
                    <div className='ai-navigation__items'>
                        {leftNavigations.map(nav => (
                            <div key={nav.key} id={nav.key} onClick={() => handleNavigation(nav.key)} className='ai-navigation__icon'>
                                {
                                    !nav?.isIcon ? (
                                        <>
                                            <img className='ai-navigation__icon--default' src={nav.icon} alt="" />
                                            <img className='ai-navigation__icon--active' src={nav.iconActive} alt="" />
                                        </>
                                    ) : (
                                        nav.icon
                                    )
                                }
                            </div>
                        ))}
                    </div>
                    {/* <div className='ai-navigation__right-side'>
                        {rightNavigations.map(nav => (
                            <div key={nav.key} id={nav.key} onClick={() => handleNavigation(nav.key)} className='ai-navigation__icon'>
                                <img className='ai-navigation__icon--default' src={nav.icon} alt="" />
                                <img className='ai-navigation__icon--active' src={nav.iconActive} alt="" />
                            </div>
                        ))}
                    </div> */}
                    {/* <div className='ai-navigation__qr-code' onClick={() => setOpenQrCode(!openQrCode)}>
                        <div className='ai-navigation__qr-code__sub'>
                            <img src={qrQode} alt="" srcSet="" />
                        </div>
                    </div> */}
                    {
                        isPlayMusic ? (
                            <button
                                className='ai-navigation--btn-music'
                                onClick={() => setIsPlayMusic(false)}
                            >
                                <i className="fas fa-compact-disc music-play" />
                            </button>
                        ) : (
                            <button
                                className='ai-navigation--btn-music-off'
                                onClick={() => setIsPlayMusic(true)}
                            >
                                <i className="fas fa-volume-mute" />
                            </button>
                        )
                    }
                    <button
                        className='ai-navigation--btn-gift'
                        onClick={() => setOpenGift(prev => !prev)}
                    >
                        <i className="fas fa-gift" />
                    </button>
                </div>
            </div>

            <QrCode
                openPopup={openQrCode}
                setOpenPopup={setOpenQrCode}
            />
        </>
    )
}

export default Navigation