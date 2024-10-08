import './rsvp.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateInvitation } from '@store/actions/invitation'

function Rsvp({ invitation }) {
    const dispatch = useDispatch()
    const [form, setForm] = useState(handleFormatForm())

    function handleFormatForm() {
        return {
            name: invitation?.guest?.name ?? "",
            phone_number: invitation?.phone_number ?? "",
            guest_count: invitation?.guest_count ?? "",
            attendance_status: invitation?.attendance_status ?? ""
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

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(updateInvitation({
            id: invitation.id,
            attendance_status: form.attendance_status,
            guest_count: form.guest_count,
            phone_number: form.phone_number
        }))
    }

    return (
        <section className='ai-rsvp__container'>
            <h1 className='ai-rsvp--title'>KONFIRMASI KEHADIRAN</h1>
            <div className='ai-rsvp--description'>
                <p>JIKA ANDA AKAN HADIR PADA ACARA,</p>
                <p>HARAP LAKUKAN RESERVASI PADA FORM DIBAWAH INI</p>
            </div>

            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    readOnly
                    name='name'
                    placeholder='Nama'
                    value={ form.name }
                />
                <input
                    type="text"
                    onChange={handleOnChange}
                    name='phone_number'
                    placeholder='Nomor Handphone'
                    value={ form.phone_number }
                />
                <input
                    type="text"
                    onChange={handleOnChange}
                    name='guest_count'
                    placeholder='Jumlah Tamu'
                    value={ form.guest_count }
                />
                <select className={form.attendance_status === '' ? 'select-placehoder' : ''} value={ form.attendance_status } name='attendance_status' onChange={handleOnChange} placeholder="asc">
                    <option value={""} disabled>Konfirmasi Kehadiran</option>
                    <option value={true}>Hadir</option>
                    <option value={false}>Tidak Hadir</option>
                </select>
                <button type='submit'>Kirim</button>
            </form>
        </section>
    )
}

export default Rsvp