import React, { useState } from 'react'
import './popupCheckInForm.scss'
import { Input, PopupFormWrapper } from '@components'
// import { useDispatch } from 'react-redux'
// import { updateInvitation } from '@store/actions/invitation'

function PopupCheckInForm({ eventEdit, open, setOpen }) {
    /** data */
    // const dispatch = useDispatch()
    // const { isSuccess } = useSelector(state => state.invitation)
    const [form, setForm] = useState(eventEdit)
    // const [isSubmit, setIsSubmit] = useState(false)
    // const [openPopupSuccess, setOpenPopupSuccess] = useState(false)
    /** end data */

    /** methods */
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: +value }))
        // setIsSubmit(false)
    }

    const handleOnSubmit = () => {
        const payload = {...form}
        payload.attendance = true
        payload.check_in_time = '20:51'
        // dispatch(updateInvitation(payload))
        setOpen(false)
    }
    /** end methods */

    return (
        <>
            <PopupFormWrapper
                open={open}
                setOpen={setOpen}
                titleForm="Check In"
                handleOnSubmit={handleOnSubmit}
                width="400px"
            >
                <div className="ai-popup-guest-form__input-wrapper">
                    <Input
                        title={'Total Tamu'}
                        placeholder={'Masukkan total tamu'}
                        value={form.guest_count}
                        type={'text'}
                        name={'guest_count'}
                        isError={false}
                        setValue={handleOnChange}
                    />
                </div>
            </PopupFormWrapper>

            {/* {(openPopupSuccess && isSuccess) && (
                <PopupSuccess
                    detailName={form.event_name}
                    description={'berhasil ditambahkan'}
                    onEvent={handleCloseSuccessPopup}
                />
            )} */}
        </>
    )
}

export default PopupCheckInForm