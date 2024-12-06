import './wish.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getInvitations } from '@store/actions/invitation'
import { useEffect } from 'react'

function Wish() {
    const dispatch = useDispatch()
    const {invitations} = useSelector(state => state.invitation)

    useEffect(() => {
        dispatch(getInvitations())
    }, [dispatch])

    const getInitial = (data) => data?.name ? data.name[0] : 'A'

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
        <section id='ai-wish' className='ai-wish__container'>
            <div className='ai-wish__wishes'>
                <div className='ai-wish__wishes-items'>
                    {invitations.map(item => (
                        <div key={item.id} className='ai-wish__wishes-item'>
                            <div className='ai-wish__wishes-item__initial'>
                                <h1>{ getInitial(item) }</h1>
                            </div>
                            <div className='ai-wish__wishes-item__detail'>
                                <div className='ai-wish__wishes-item__detail-header'>
                                    <p className='name'>{ item?.name?.toLowerCase() }</p>
                                    <p>{ item?.wish }</p>
                                </div>
                                <p className='ai-wish__wishes-item__detail--footer'>{ timeAgo(item.createdAt) }</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Wish