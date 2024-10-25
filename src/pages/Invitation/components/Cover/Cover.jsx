import './cover.scss'
import { Logo } from '../'
import backgroundGradient from '@assets/background_gradient.png'

function Cover({ name }) {
    const handleOpenCover = () => {
        const coverSection = document.querySelector('.ai-cover__container')
        if (coverSection) {
            coverSection.style.opacity = '0'
            setTimeout(() => {
                coverSection.style.display = 'none'
            }, 900);
        }

        const aiContainer = document.querySelector('.ai__container')
        if (aiContainer) {
            aiContainer.style.overflowY = 'scroll'

            const navLinks = document.getElementsByClassName('ai-navigation__icon')
            const sections = document.getElementsByTagName('section')

            const observer = new IntersectionObserver(
                (entries) => entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (navLinks) for (let i = 0; i < navLinks.length; i++) {
                            const navLink = navLinks[i];
                            if (entry.target.id === navLink.id) {
                                navLink.classList.add('active');
                            } else {
                                navLink.classList.remove('active');
                            }
                        }
                    }
                }),
                { threshold: 0.6 }
            );

            if (sections) for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (section) observer.observe(section)
            }
        }
    }

    return (
        <section className="ai-cover__container">
            <div className='ai-cover__sub-container'>
                <img className='ai-cover--background-gradient' src={backgroundGradient} alt="" srcSet="" />
                <div className="ai-cover__title">
                    <h1>Save The Date</h1>
                    <h2>FOR THE WEDDING OF</h2>
                </div>
                <Logo />
                <div className='ai-cover__for'>
                    <p>KEPADA YTH.</p>
                    <p>BAPAK/IBU/SAUDARA/I</p>
                    <h1>{ name }</h1>
                    <p>DI TEMPAT</p>
                </div>
                <button className='ai-cover--open-btn' onClick={handleOpenCover}>
                    BUKA undangan
                </button>
            </div>
        </section>
    )
}

export default Cover