import './brides.scss'
import brideFlower from '@assets/brides_flower.png'
import groom from '@assets/groom.png'
import bride from '@assets/bride.png'

function Brides() {
    const brideDetailInfo = (type='bride') => {
        return (
            <>
                <h1 className='ai-brides__detail--name'>
                    {type === 'bride' ? 'Agnhniya' : 'IZZUL'}
                </h1>
                <p className='ai-brides__detail--fullname'>
                    {type === 'bride' ? 'Aghniyarrizqi Iara Fadhilla' : 'Muhammad Dzulfiqar Noor'}
                </p>
                <div className='ai-brides__detail-family'>
                    <p className='ai-brides__detail-family--from'>Putri Dari :</p>
                        {type === 'bride' ? (
                            <>
                                <p>Bpk. H. Mukhlis Wahyudin</p>
                                <p>&</p>
                                <p>Ibu. Sri Utami</p>
                            </>
                        ): (
                            <>
                                <p>Bpk. Rudy Widyatmiko</p>
                                <p>&</p>
                                <p>Ibu. Siti Nurhayati</p>
                            </>
                        )}

                </div>
            </>
        )
    }

    const brideDetail = (type='bride') => {
        return (
            <div className={`ai-brides__detail ${type} animate`}>
                {type === 'bride' ? (
                    <>
                        <div className='ai-brides__detail-photo'>
                            <img alt='image-bride' src={bride} />
                        </div>
                        {brideDetailInfo(type)}
                    </>
                ): (
                    <>
                        {brideDetailInfo(type)}
                        <div className='ai-brides__detail-photo'>
                            <img alt='image-bride' src={groom} />
                        </div>
                    </>
                )}
                
            </div>
        )
    }
    return (
        <section id='ai-brides' className='ai-brides__container'>
            <div className='ai-brides--content animate'>
                {brideDetail('bride')}

                <img alt='image-flower-separator' className='ai-brides--flower-separator animate' src={brideFlower} />

                {brideDetail('groom')}
            </div>
        </section>
    )
}

export default Brides