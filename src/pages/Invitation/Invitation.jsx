import './invitation.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Cover, Quote, Brides, Detail, Gallery, Rsvp, Wish } from './components'
import { getInvitation } from '@store/actions/invitation'

function Invitation() {
    const { invitation, loading, error } = useSelector(state => state.invitation)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInvitation('1'));
    }, [dispatch]);

    if (loading) return 'Loading...' 

    return (
        <div className='ai__container'>
            <Cover name={invitation?.guest?.name} />
            <Quote />
            <Brides />
            <Detail />
            <Gallery />
            <Rsvp />
            <Wish />
        </div>
    )
}

export default Invitation