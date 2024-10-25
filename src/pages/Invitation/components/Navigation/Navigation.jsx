import './navigation.scss'
import qrQode from '@assets/qr_code.png'
import quoteNav from '@assets/nav_quote.png'
import brideNav from '@assets/nav_bride.png'
import dateNav from '@assets/nav_date.png'
import galleryNav from '@assets/nav_gallery.png'
import wishNav from '@assets/nav_wish.png'
import giftNav from '@assets/nav_gift.png'

function Navigation() {
    const handleShowQrQode = () => {
        const qrCodeSection = document.querySelector('.ai-qrcode__container')
        if (qrCodeSection) {
            qrCodeSection.style.bottom = 0;
        }

        const qrCodeContent = document.querySelector('.ai-qrcode__content')
        if (qrCodeContent) {
            qrCodeContent.scrollTop = 0
        }

        const qrCodeOverlay = document.querySelector('.ai-qrcode--overlay')
        if (qrCodeOverlay) {
            qrCodeOverlay.style.display = 'block'
        }

        const aiContainer = document.querySelector('.ai__container')
        if (aiContainer) {
            aiContainer.style.overflowY = 'hidden'
        }
    }

    const handleNavigation = (nav) => {
        let sectionIntoView = null
        switch (nav) {
            case 'quote':
                sectionIntoView = document.querySelector('.ai-quote__container')
                break;
            case 'bride':
                sectionIntoView = document.querySelector('.ai-brides__container')
                break;
            case 'date':
                sectionIntoView = document.querySelector('.ai-detail__container')
                break;
            case 'gallery':
                sectionIntoView = document.querySelector('.ai-gallery__container')
                break;
            case 'wish':
                sectionIntoView = document.querySelector('.ai-wish__container')
                break;
            case 'gift':
                sectionIntoView = document.querySelector('.ai-gift__container')
                break;
            default:
                break;
        }
        if (sectionIntoView) sectionIntoView.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const leftNavigations = [
        { key: 'quote', icon: quoteNav },
        { key: 'bride', icon: brideNav },
        { key: 'date', icon: dateNav },
    ]

    const rightNavigations = [
        { key: 'gallery', icon: galleryNav },
        { key: 'wish', icon: wishNav },
        { key: 'gift', icon: giftNav },
    ]

    return (
        <div className='ai-navigation__container'>
            <div className='ai-navigation__sub-container'>
                <div className='ai-navigation__left-side'>
                    {leftNavigations.map(nav => (
                        <div key={nav.key} onClick={() => handleNavigation(nav.key)} className='ai-navigation__icon'>
                            <img src={nav.icon} alt="" />
                        </div>
                    ))}
                </div>
                <div className='ai-navigation__right-side'>
                    {rightNavigations.map(nav => (
                        <div key={nav.key} onClick={() => handleNavigation(nav.key)} className='ai-navigation__icon'>
                            <img src={nav.icon} alt="" />
                        </div>
                    ))}
                </div>
                <div className='ai-navigation__qr-code' onClick={handleShowQrQode}>
                    <div className='ai-navigation__qr-code__sub'>
                        <img src={qrQode} alt="" srcSet="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation