import './rsvp.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateInvitation } from '@store/actions/invitation'
import { Input, SelectInput, ThankPopup } from '@components'
import { Loading } from '@components'

function Rsvp({ invitation }) {
    const {loadingForm} = useSelector(state => state.invitation)
    const dispatch = useDispatch()
    const [form, setForm] = useState(handleFormatForm())
    const [openPopup, setOpenPopup] = useState(false)

    function handleFormatForm() {
        return {
            name: invitation?.guest?.name ?? 'Arrasyid Fadel Fatonsyah',
            phone_number: invitation?.phone_number ?? '089635164141',
            guest_count: invitation?.guest_count ?? '2',
            attendance_status: invitation?.attendance_status ?? 'Hadir'
        }
    }

    const handleOnChange = (e) => {
        let {name, value} = e.target
        if (name === 'attendance_status') {
            if (value === 'true') value = true
            else if (value === 'false') value = false
        }
        setForm({...form, [name]: value})
    }

    const handleSelectInput = (val) => {
        setForm({...form, [val.key]: val})
    }
    // console.log(form)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(updateInvitation({
            id: invitation.id,
            attendance_status: form.attendance_status,
            guest_count: form.guest_count,
            phone_number: form.phone_number
        }))
        setOpenPopup(!openPopup)
    }

    
    return (
        <>
            <section id='ai-rsvp' className='ai-rsvp__container'>
                <h1 className='ai-rsvp--title'>Konfirmasi Kehadiran</h1>
                <div className='ai-rsvp--description'>
                    <p>Jika anda akan hadir pada acara,</p>
                    <p>Harap lakukan reservasi pada form dibawah ini</p>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <Input
                        placeholder='Nama'
                        value={form.name ?? 'Arrasyid Fadel Fatonsyah'}
                        type='text'
                        name='name'
                        readOnly={true}
                    />
                    <Input
                        placeholder='Nama'
                        value={form.phone_number ?? '089635164141'}
                        type='text'
                        name='phone_number'
                        setValue={handleOnChange}
                    />
                    <SelectInput
                        id='guest_count'
                        placeholder='Jumlah Tamu'
                        options={[{id: 1, name: '1'}, {id: 1, name: '2'}]}
                        value={form.guest_count}
                        onChange={handleSelectInput}
                    />
                    <SelectInput
                        id='attendance_status'
                        placeholder='Konfirmasi Kehadiran'
                        options={[{id: 'hadir', name: 'Hadir'}, {id: 'tidak hadir', name: 'Tidak Hadir'}]}
                        value={form.attendance_status}
                        onChange={handleSelectInput}
                    />
                    <button type='submit'>Kirim</button>
                </form>
            </section>

            {loadingForm ? (<Loading />) : (
                <ThankPopup
                    open={openPopup}
                    setOpen={setOpenPopup}
                    isConfirmRsvp={form?.attendance_status === true}
                    isRejectRsvp={form?.attendance_status === false}
                />
            )}
        </>
    )
}

export default Rsvp