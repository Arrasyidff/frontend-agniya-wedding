import { useEffect, useState } from 'react'
import './popupGuestForm.scss'
import { Input } from '@components'
import { useDispatch } from 'react-redux'
import { createGuest, updateGuest } from '@store/actions/guest'

function PopupGuestForm({ guestEdit, open, setOpen }) {
    const dispatch = useDispatch()
    const initialForm = {
        name: guestEdit?.name ?? '', email: guestEdit?.email ?? '', phone_number: guestEdit?.phone_number ?? '', acquaintance_from: guestEdit?.acquaintance_from ?? '',
        address: guestEdit?.address ?? '', additional_notes: guestEdit?.additional_notes ?? ''
    }
    const [form, setForm] = useState(initialForm)
    const [isSubmit, setIsOnSubmit] = useState(false)

    const inputs = [
        {value: form.name, name: 'name', type: 'text', placeholder: 'Masukkan nama lengkap Tamu Anda'},
        {value: form.email, name: 'email', type: 'text', placeholder: 'Masukkan email lengkap Tamu Anda'},
        {value: form.phone_number, name: 'phone_number', type: 'text', placeholder: 'Format: +62 812 3456 7890'},
        {value: form.acquaintance_from, name: 'acquaintance_from', type: 'text', placeholder: 'Kenalan dari pihak siapa ? Abid ?'},
        {value: form.address, name: 'address', type: 'text', placeholder: 'Masukkan alamat lengkap Tamu Anda'},
        {value: form.additional_notes, name: 'additional_notes', type: 'text', placeholder: 'Masukkan informasi tambahan Tamu Anda'},
    ]

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
        setIsOnSubmit(false)
    }

    const handleOnSubmit = () => {
        setIsOnSubmit(true)
        if (guestEdit) {
            dispatch(updateGuest({...form, id: guestEdit.id}))
        } else {
            dispatch(createGuest(form))
        }
        setForm(initialForm)
        setOpen(false)
        setIsOnSubmit(false)
    }

    if (!open) return
    return (
        <div className='ai-popup-guest-form__container'>
            <div className='ai-popup-guest-form__form slide-top'>
                <button className='ai-popup-guest-form--close' onClick={() => setOpen(false)}>
                    <i className="fas fa-times"></i>
                </button>

                <h1 className='ai-popup-guest-form--title'>Form Tambah Tamu</h1>

                {inputs.map((input, index) => (
                    <div key={index} className='ai-popup-guest-form__input-wrapper'>
                        <Input
                            placeholder={input.placeholder}
                            value={input.value}
                            type={input.type}
                            name={input.name}
                            isError={!input.value && isSubmit}
                            setValue={handleOnChange}
                        />
                    </div>
                ))}

                <div className='ai-popup-guest-form__actions'>
                    <button className='cancel' onClick={() => setOpen(false)}>Batal</button>
                    <button onClick={() => handleOnSubmit()}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default PopupGuestForm