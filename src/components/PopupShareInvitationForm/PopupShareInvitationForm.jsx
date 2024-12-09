import { useEffect, useState } from 'react'
import './popupShareInvitationForm.scss'
import { PopupFormWrapper } from '@components'

function PopupShareInvitationForm({
    open,
    owner,
    session,
    template,
    guests,
    setOpen,
}) {
    const [copyValue, setCopyValue] = useState(null)
    const [guestsLocal, setGuestsLocal] = useState([...guests])

    useEffect(() => {
        setGuestsLocal(guests);
    }, [guests]);

    useEffect(() => {
        var x = document.getElementsByTagName("BODY")[0]
        if (open) {
            x.style.overflow = 'hidden'
        }

        return () => x.style.overflow = 'auto'
    }, [open])

    const formatTemplate = (guest) => {
        if (!guest) return ''

        /** name */
        const regexName = /^[^=]+/
        const match = guest.match(regexName)
        let name = guest
        if (match) name = match[0].trim()

        let urlInvitation = (`${process.env.REACT_APP_FE_URL}/aghniya-izzul/${session}?to=${name}`).split(' ').join('%20')
        let payload = template
            .replace('[nama]', name)
            .replace('[link-undangan]', urlInvitation)
            .replace('[mempelai]', owner)

        return payload
    }

    const handleCopy = async (guest) => {
        try {
            if (copyValue) return

            await navigator.clipboard.writeText(formatTemplate(guest));
            setCopyValue(guest);
            setTimeout(() => setCopyValue(null), 500)
        } catch (err) {
            setCopyValue(null);
        }
    }

    const handleShareWa = (guest) => {
        const message = encodeURIComponent(formatTemplate(guest))
        let whatsappLink = `https://api.whatsapp.com/send?text=${message}`

        const regexPhone = /\+62\d{9,}/
        const phone = guest.match(regexPhone) ? guest.match(regexPhone)[0] : null
        if (phone !== null) whatsappLink += '&phone='+phone
        window.open(whatsappLink, "_blank")
    }

    const handleDeleteGuests = (guest) => {
        const newGuestsLocal = [...guestsLocal].filter(guestLocal => guestLocal !== guest)
        setGuestsLocal(newGuestsLocal)

        if (newGuestsLocal.length === 0) setOpen(false)
    }

    return (
        <PopupFormWrapper
            open={open}
            setOpen={setOpen}
            titleForm={'Bagikan Undangan'}
            width='800px'
            isDetailMode={true}
        >
            <div className='ai-share-invitation__container'>
                {guestsLocal.map((guest, i) => (
                    <div key={i} className='ai-share-invitation__invitation'>
                        <p className='ai-share-invitation__invitation-name'>{guest}</p>
                        <div className='ai-share-invitation__invitation-actions'>
                            <div
                                className='ai-share-invitation__invitation-btn whatsapp'
                                onClick={() => handleShareWa(guest)}
                            >
                                <i className="fab fa-whatsapp" />
                            </div>
                            <div className='ai-share-invitation__invitation-btn'
                                onClick={() => handleCopy(guest)}
                            >
                                {copyValue === guest ? (
                                    <i className="fas fa-copy" />
                                ) : (
                                    <i className="far fa-copy" />
                                )}
                            </div>
                            <div
                                className='ai-share-invitation__invitation-btn delete'
                                onClick={() => handleDeleteGuests(guest)}
                            >
                                <i className="fas fa-ban" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PopupFormWrapper>
    )
}

export default PopupShareInvitationForm