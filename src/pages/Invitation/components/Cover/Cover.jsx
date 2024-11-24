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

        const aiContainerContent = document.querySelector('.ai__container .ai__container__content')
        if (aiContainerContent) {
            aiContainerContent.style.overflowY = 'auto'

            // const navLinks = document.getElementsByClassName('ai-navigation__icon')
            // const sections = document.getElementsByTagName('section')

            // const observer = new IntersectionObserver(
            //     (entries) => entries.forEach((entry) => {
            //         if (entry.isIntersecting) {
            //             if (navLinks) for (let i = 0; i < navLinks.length; i++) {
            //                 const navLink = navLinks[i];
            //                 if (entry.target.id === navLink.id) {
            //                     navLink.classList.add('active');
            //                 } else {
            //                     navLink.classList.remove('active');
            //                 }
            //             }
            //         }
            //     }),
            //     { threshold: 0.6 }
            // );

            // if (sections) for (let i = 0; i < sections.length; i++) {
            //     const section = sections[i];
            //     if (section) observer.observe(section)
            // }
        }
    }

    return (
        <section className="ai-cover__container">
            <div className='ai-cover__sub-container'>
                <div className="ai-cover__title">
                    <h1>Save The Date</h1>
                    <h2>FOR THE WEDDING OF</h2>
                </div>

                <img className='ai-cover--logo' src={logoImg} />
                
                <div className='ai-cover__for'>
                    <p>KEPADA YTH.</p>
                    <p>BAPAK/IBU/SAUDARA/I</p>
                    <div className='ai-cover__for-name'>
                        <h1>Arrasyid F F</h1>
                        <span>&</span>
                        <h1>Ardhian K H</h1>
                    </div>
                    <p>DI TEMPAT</p>
                </div>

                <button className='ai-cover--open-btn' onClick={() => handleOpenCover()}>
                    BUKA undangan
                </button>
            </div>
        </section>
    )
}

export default Cover