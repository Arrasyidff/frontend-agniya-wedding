import './invitation.scss'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header, Cover, Quote, Brides, Detail, Gallery, Rsvp, Wish, Gift, Navigation } from './components'
import { getInvitation } from '@store/actions/invitation'
import { useParams, useSearchParams } from 'react-router-dom'

function Invitation() {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const { id } = useParams()
    const { invitation } = useSelector(state => state.invitation)
    const [openGift, setOpenGift] = useState(false)
    const [isPlayMusic, setIsPlayMusic] = useState(false)

    useEffect(() => {
        dispatch(getInvitation(btoa(id)))
    }, [dispatch, id])

    return (
        <div className='ai__container'>
            <div className='ai__container__content-left'>

            </div>
            <div className='ai__container__content'>
                <div className='ai__container__content-main'>
                    <Cover
                        setIsPlayMusic={setIsPlayMusic}
                        name={invitation?.guest?.name ?? searchParams.get('to')}
                    />
                    <Header />
                    <Quote />
                    <Brides />
                    <Detail
                        invitation={invitation}
                    />
                    <Gallery />
                    <Rsvp
                        invitation={invitation}
                    />
                    <Wish
                        invitation={invitation}
                    />
                    <Gift
                        openGift={openGift}
                        setOpenGift={setOpenGift}
                    />
                    <Navigation
                        invitation={invitation}
                        setOpenGift={setOpenGift}
                        isPlayMusic={isPlayMusic}
                        setIsPlayMusic={setIsPlayMusic}
                    />
                </div>
            </div>
            <div className='ai__container__content-right'>
            </div>
        </div>
    )
}

export default Invitation