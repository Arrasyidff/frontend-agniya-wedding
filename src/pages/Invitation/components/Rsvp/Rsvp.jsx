import './rsvp.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createInvitations } from '@store/actions/invitation'
import { Input, SelectInput, ThankPopup } from '@components'
import { Loading } from '@components'
import { useParams } from 'react-router-dom'

function Rsvp() {
    const { code } = useParams()
    const { loadingForm } = useSelector(state => state.invitation)
    const dispatch = useDispatch()
    const [form, setForm] = useState({name: '', phone_number: '', guest_count: '', attendance: '', wish: ''})
    const [openPopup, setOpenPopup] = useState(false)

    const handleOnChange = (e) => {
        let {name, value} = e.target
        if (name === 'attendance') {
            if (value === 'true') value = true
            else if (value === 'false') value = false
        }
        setForm({...form, [name]: value})
    }

    const handleSelectInput = (val) => {
        setForm({...form, [val.key]: val})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(createInvitations({
            name: form.name,
            phone_number: form.phone_number,
            guest_count: form?.guest_count?.id ?? 0,
            attendance: (form?.attendance?.id ?? '').toLowerCase() === 'hadir' ? true : false,
            wish: form.wish,
            code_session: code
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
                        setValue={handleOnChange}
                    />
                    <Input
                        placeholder='No Handphone'
                        value={form.phone_number ?? '089635164141'}
                        type='text'
                        name='phone_number'
                        setValue={handleOnChange}
                    />
                    <SelectInput
                        id='guest_count'
                        placeholder='Jumlah Tamu'
                        options={[{id: 1, name: '1'}, {id: 2, name: '2'}]}
                        value={form.guest_count}
                        onChange={handleSelectInput}
                    />
                    <SelectInput
                        id='attendance'
                        placeholder='Konfirmasi Kehadiran'
                        options={[{id: 'hadir', name: 'Hadir'}, {id: 'tidak hadir', name: 'Tidak Hadir'}]}
                        value={form.attendance}
                        onChange={handleSelectInput}
                    />
                    <Input
                        placeholder='Tulis Harapan Kamu'
                        value={form.wish}
                        type={'textarea'}
                        name="wish"
                        setValue={handleOnChange}
                    />
                    <button type='submit'>Kirim</button>
                </form>
            </section>

            {loadingForm && openPopup ? (<Loading />) : (
                <ThankPopup
                    open={openPopup}
                    setOpen={setOpenPopup}
                    isConfirmRsvp={(form?.attendance?.id) === 'hadir'}
                    isRejectRsvp={(form?.attendance?.id) !== 'hadir'}
                />
            )}
        </>
    )
}

export default Rsvp