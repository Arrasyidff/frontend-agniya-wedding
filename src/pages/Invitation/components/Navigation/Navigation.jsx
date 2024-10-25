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
    }

    return (
        <div className='ai-navigation__container'>
            <div className='ai-navigation__sub-container'>
                <div className='ai-navigation__left-side'>
                    <div className='ai-navigation__icon'>
                        <img src={quoteNav} alt="" />
                    </div>
                    <div className='ai-navigation__icon'>
                        <img src={brideNav} alt="" />
                    </div>
                    <div className='ai-navigation__icon'>
                        <img src={dateNav} alt="" />
                    </div>
                </div>
                <div className='ai-navigation__right-side'>
                    <div className='ai-navigation__icon'>
                        <img src={galleryNav} alt="" />
                    </div>
                    <div className='ai-navigation__icon'>
                        <img src={wishNav} alt="" />
                    </div>
                    <div className='ai-navigation__icon'>
                        <img src={giftNav} alt="" />
                    </div>
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