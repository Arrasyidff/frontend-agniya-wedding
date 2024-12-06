import './wish.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getWishes } from '@store/actions/wish'
import { useEffect, useState } from 'react'
import { ThankPopup, Loading } from '@components'

function Wish() {
    const dispatch = useDispatch()
    const {wishes, loading} = useSelector(state => state.wish)
    const [openThankPopup, setOpenThankPopup] = useState(false)

    useEffect(() => {
        dispatch(getWishes())
    }, [dispatch])

    const getInitial = (data) => data?.guest?.name ? data.guest.name[0] : 'A'

    function timeAgo(timestamp) {
        const now = new Date()
        const givenDate = new Date(timestamp)
    
        const diffInMs = now - givenDate
        const diffInMinutes = Math.floor(diffInMs / 60000)
        const diffInHours = Math.floor(diffInMinutes / 60)
        const diffInDays = Math.floor(diffInHours / 24)
        const diffInWeeks = Math.floor(diffInDays / 7)
    
        let timeAgoString = `${diffInWeeks} minggu yang lalu`
    
        if (diffInMinutes < 60) {
            timeAgoString = `${diffInMinutes} menit yang lalu`
        } else if (diffInHours < 24) {
            timeAgoString = `${diffInHours} jam yang lalu`
        } else if (diffInDays < 7) {
            timeAgoString = `${diffInDays} hari yang lalu`
        }
    
        const hours = givenDate.getHours().toString().padStart(2, '0')
        const minutes = givenDate.getMinutes().toString().padStart(2, '0')
    
        return `${timeAgoString} di ${hours}:${minutes}`
    }

    return (
        <>
            <section id='ai-wish' className='ai-wish__container'>
                {/* <div className='ai-wish__form'>
                    <h1>Doa Dan Ucapan</h1>
                    <form onSubmit={handleOnSubmit}>
                        <Input
                            placeholder='Tulis Harapan Kamu'
                            value={wish}
                            type={'textarea'}
                            name="wish"
                            setValue={() => setWish()}
                        />
                        <button
                            disabled={!wish}
                            type='submit'
                        >
                            Kirim
                        </button>
                    </form>
                </div> */}

                <div className='ai-wish__wishes'>
                    <div className='ai-wish__wishes-items'>
                        {wishes.map(item => (
                            <div key={item.id} className='ai-wish__wishes-item'>
                                <div className='ai-wish__wishes-item__initial'>
                                    <h1>{ getInitial(item) }</h1>
                                </div>
                                <div className='ai-wish__wishes-item__detail'>
                                    <div className='ai-wish__wishes-item__detail-header'>
                                        <p>{ item?.guest?.name }</p>
                                        <p>{ item?.wish }</p>
                                    </div>
                                    <p className='ai-wish__wishes-item__detail--footer'>{ timeAgo(item.updatedAt) }</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {loading ? (<Loading />) : (
                <ThankPopup
                    open={openThankPopup}
                    setOpen={setOpenThankPopup}
                    isWish={true}
                />
            )}
        </>
    )
}

export default Wish