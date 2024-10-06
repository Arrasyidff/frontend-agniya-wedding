import { useState } from 'react'
import './rsvp.scss'

function Rsvp() {
    const [form, setForm] = useState({name: '', hp: '', guest_count: '', attentdance_status: ''})

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <section className='ai-rsvp__container'>
            <h1 className='ai-rsvp--title'>KONFIRMASI KEHADIRAN</h1>
            <div className='ai-rsvp--description'>
                <p>JIKA ANDA AKAN HADIR PADA ACARA,</p>
                <p>HARAP LAKUKAN RESERVASI PADA FORM DIBAWAH INI</p>
            </div>

            <form onSubmit={handleOnSubmit}>
                <input type="text" onChange={handleOnChange} name='name' placeholder='Nama' />
                <input type="text" onChange={handleOnChange} name='hp' placeholder='Nomor Handphone' />
                <input type="text" onChange={handleOnChange} name='guest_count' placeholder='Jumlah Tamu' />
                <input type="text" onChange={handleOnChange} name='attentdance_status' placeholder='Konfirmasi Kehadiran' />
                <button type='submit'>Kirim</button>
            </form>
        </section>
    )
}

export default Rsvp