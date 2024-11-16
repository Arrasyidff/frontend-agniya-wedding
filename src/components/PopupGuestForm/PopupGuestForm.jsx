import { useState } from 'react'
import './popupGuestForm.scss'
import { Input, PopupFormWrapper } from '@components'
import { useDispatch } from 'react-redux'
import { createGuest, updateGuest } from '@store/actions/guest'

function PopupGuestForm({ guestEdit, open, setOpen, isDetailMode }) {
    const dispatch = useDispatch()
    const initialForm = {
        name: guestEdit?.name ?? '', email: guestEdit?.email ?? '', phone_number: guestEdit?.phone_number ?? '', acquaintance_from: guestEdit?.acquaintance_from ?? '',
        address: guestEdit?.address ?? '', additional_notes: guestEdit?.additional_notes ?? ''
    }
    const [form, setForm] = useState(initialForm)
    const [isSubmit, setIsOnSubmit] = useState(false)

    const inputs = [
        [
            {
                title: 'Nama',
                value: form.name,
                name: 'name',
                type: 'text',
                placeholder: 'Masukkan nama lengkap Tamu Anda',
            },
            {
                title: 'Email',
                value: form.email,
                name: 'email',
                type: 'text',
                placeholder: 'Masukkan email lengkap Tamu Anda'
            },
        ],
        [
            {
                title: 'HP',
                value: form.phone_number,
                name: 'phone_number',
                type: 'text',
                placeholder: 'Format: +62 812 3456 7890'
            },
            {
                title: 'Kenalan dari pihak?',
                value: form.acquaintance_from,
                name: 'acquaintance_from',
                type: 'text',
                placeholder: 'Kenalan dari pihak? Abid?'
            },
        ],
        [
            {
                title: 'Alamat',
                value: form.address,
                name: 'address',
                type: 'textarea',
                placeholder: 'Masukkan alamat lengkap Tamu Anda'
            },
            {
                title: 'Tambahan Informasi',
                value: form.additional_notes,
                name: 'additional_notes',
                type: 'textarea',
                placeholder: 'Masukkan informasi tambahan Tamu Anda'
            },
        ]
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

    return (
        <PopupFormWrapper
            open={open}
            setOpen={setOpen}
            titleForm={'Form Tambah Tamu'}
            handleOnSubmit={handleOnSubmit}
            width='800px'
            isDetailMode={isDetailMode}
        >
            {inputs.map(inputItems => (
                <div className='ai-popup-guest-form__inputs'>
                    {inputItems.map(input => (
                        <div className='ai-popup-guest-form__input'>
                            <Input
                                readOnly={isDetailMode ?? false}
                                title={input.title}
                                placeholder={input.placeholder}
                                value={input.value}
                                type={input.type}
                                name={input.name}
                                isError={false}
                                setValue={handleOnChange}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </PopupFormWrapper>
    )
}

export default PopupGuestForm