import './cover.scss'
import logoImg from '@assets/logo.png'

function Cover({ name, setIsPlayMusic }) {
    const handleOpenCover = () => {        
        setIsPlayMusic(true)
        const coverSection = document.querySelector('.ai-cover__container')
        if (coverSection) {
            coverSection.style.opacity = '0'
            setTimeout(() => {
                coverSection.style.display = 'none'
            }, 900)
        }

        const aiContainer = document.querySelector('.ai__container')
        const aiContainerContent = document.querySelector('.ai__container .ai__container__content')
        if (aiContainerContent) {
            aiContainer.style.overflowY = 'auto'
            aiContainerContent.style.overflowY = 'auto'
        }
    }

    return (
        <div className="ai-cover__container">
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
        </div>
    )
}

export default Cover