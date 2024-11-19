import { useState } from 'react'
import './popupEventForm.scss'
import { Input, PopupFormWrapper } from '@components'
import { useDispatch } from 'react-redux'
import { createInvitation } from '@store/actions/invitation'

function PopupEventForm({ eventEdit, open, setOpen }) {
    const initialForm = {
        event_name: eventEdit?.event_name ?? '',
        event_date: eventEdit?.event_date ?? '',
        event_time: eventEdit?.event_time ?? '',
    }
    const dispatch = useDispatch()
    const [form, setForm] = useState(initialForm)
    const [isSubmit, setIsOnSubmit] = useState(false)

    const inputs = [
        {title: 'Nama Acara', value: form.event_name, name: 'event_name', type: 'text', placeholder: 'Masukkan nama acara'},
        {title: 'Tanggal', value: form.event_date, name: 'event_date', type: 'date', placeholder: 'Masukkan tanggal acara'},
        {title: 'Jam', value: form.event_time, name: 'event_time', type: 'time', placeholder: 'Masukkan waktu acara'},
    ]

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
        setIsOnSubmit(false)
    }

    const handleOnSubmit = () => {
        setIsOnSubmit(true)
        if (eventEdit) {
            dispatch(createInvitation(form))
        } else {
            dispatch(createInvitation(form))
        }
        setForm(initialForm)
        setOpen(false)
        setIsOnSubmit(false)
    }

    return (
        <PopupFormWrapper
            open={open}
            setOpen={setOpen}
            titleForm={'Form Acara'}
            handleOnSubmit={handleOnSubmit}
            width='auto'
        >
            {inputs.map((input, index) => (
                <div
                    key={index}
                    className='ai-popup-guest-form__input-wrapper'
                >
                    <Input
                        title={input.title}
                        placeholder={input.placeholder}
                        value={input.value}
                        type={input.type}
                        name={input.name}
                        isError={!input.value && isSubmit}
                        setValue={handleOnChange}
                    />
                </div>
            ))}
        </PopupFormWrapper>
    )
}

export default PopupEventForm