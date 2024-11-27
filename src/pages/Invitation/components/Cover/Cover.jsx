import './cover.scss'
import logoImg from '@assets/logo.png'

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
        const aiContainerContent = document.querySelector('.ai__container .ai__container__content')
        if (aiContainerContent) {
            aiContainer.style.overflowY = 'auto'
            aiContainerContent.style.overflowY = 'auto'

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
                <div className="ai-cover__title">
                    <h1>Save The Date</h1>
                    <h2>For The Wedding of</h2>
                </div>

                <img alt='image-logo' className='ai-cover--logo' src={logoImg} />
                
                <div className='ai-cover__for'>
                    <p>Kepada Yth.</p>
                    <p>Bapak/Ibu/Saudara/I</p>
                    <div className='ai-cover__for-name'>
                        <h1>{name ?? 'Tamu Undangan'}</h1>
                    </div>
                    <p>Di Tempat</p>
                </div>

                <button className='ai-cover--open-btn' onClick={() => handleOpenCover()}>
                    Buka Undangan
                </button>
            </div>
        </section>
    )
}

export default Cover