import { useCallback, useEffect, useState } from 'react'
import './popupGuestForm.scss'
import { Input, PopupFormWrapper, PopupSuccess } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { createGuest, updateGuest } from '@store/actions/guest'
import { createInvitations } from '@store/actions/invitation'

function PopupGuestForm({
    open,
    guestEdit,
    isDetailMode,
    isForInvitation,
    setOpen,
}) {
    const dispatch = useDispatch()
    const { isSuccess } = useSelector(state => state.guest)
    const initialForm = {
        name: guestEdit?.name ?? '', email: guestEdit?.email ?? '', phone_number: guestEdit?.phone_number ?? '', acquaintance_from: guestEdit?.acquaintance_from ?? '',
        address: guestEdit?.address ?? '', additional_notes: guestEdit?.additional_notes ?? ''
    }

    const [form, setForm] = useState(initialForm)
    // const [isSubmit, setIsOnSubmit] = useState(false)
    const [openPopupSuccess, setOpenPopupSuccess] = useState(false)
    const inputs = (useCallback(() => {
        let inputs = [
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
                    title: 'Hp',
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
        if (isForInvitation) {
            inputs.push([
                {
                    title: 'Sesi',
                    value: form?.session,
                    name: 'session',
                    type: 'text',
                    placeholder: 'Masukkan Sesi'
                },
                {
                    title: 'Total Tamu',
                    value: form.guest_count,
                    name: 'guest_count',
                    type: 'text',
                    placeholder: 'Masukkan Total Tamu'
                },
            ])
        }

        return inputs
    }, [isForInvitation, form]))()

    useEffect(() => {
        var x = document.getElementsByTagName("BODY")[0]
        if (open) {
            x.style.overflow = 'hidden'
        }

        return () => x.style.overflow = 'auto'
    }, [open])

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
        // setIsOnSubmit(false)
    }

    const handleOnSubmit = async () => {
        if (isForInvitation) {
            await dispatch(createInvitations([form]))
            setOpen(false)
            return
        }
        let isSuccess = false
        if (guestEdit) {
            isSuccess = await dispatch(updateGuest({...form, id: guestEdit.id}))
        } else {
            isSuccess = await dispatch(createGuest(form))
        }
        if (isSuccess) setOpenPopupSuccess(true)
    }

    const handleCloseSuccessPopup = () => {
        setOpen(false)
        setOpenPopupSuccess(false)
        setForm(initialForm)
    }

    return (
        <>
            {!openPopupSuccess && (
                <PopupFormWrapper
                    open={open}
                    setOpen={setOpen}
                    titleForm={isDetailMode ? 'Detail Tamu' : (guestEdit ? 'perbaharui Informasi' : 'Tambah Tamu')}
                    handleOnSubmit={handleOnSubmit}
                    width='800px'
                    isDetailMode={isDetailMode}
                >
                    {inputs.map((inputItems, idx) => (
                        <div key={idx} className='ai-popup-guest-form__inputs'>
                            {inputItems.map((input, kdx) => (
                                <div
                                    key={kdx}
                                    className='ai-popup-guest-form__input'
                                >
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
            )}

            {(openPopupSuccess && isSuccess) && (
                <PopupSuccess
                    detailName={guestEdit ? guestEdit.name : form.name}
                    description={guestEdit ? 'berhasil diperbaharui' : 'berhasil ditambahkan'}
                    onEvent={handleCloseSuccessPopup}
                />
            )}
        </>
    )
}

export default PopupGuestForm