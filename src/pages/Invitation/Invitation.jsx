import './invitation.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Cover, Quote, Brides, Detail, Gallery, Rsvp, Wish } from './components'
import { getInvitation } from '@store/actions/invitation'
import { useParams } from 'react-router-dom'

function Invitation() {
    const { id } = useParams()
    const { invitation, loading } = useSelector(state => state.invitation)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInvitation(id));
    }, [dispatch, id]);

    if (loading) return 'Loading...' 

    return (
        <div className='ai__container'>
            <Cover name={invitation?.guest?.name} />
            <Quote />
            <Brides />
            <Detail invitation={invitation}/>
            <Gallery />
            <Rsvp />
            <Wish />
        </div>
    )
}

export default Invitation