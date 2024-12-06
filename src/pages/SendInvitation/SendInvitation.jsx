import React, { useState } from 'react'
import './sendInvitation.scss'
import { Input } from '@components'

let inititalTemplate = `Kepada Yth.
Bapak/Ibu/Saudara/i
*[nama]*

Assalamu'alaikum Wr Wb

Dengan penuh rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk memberikan doa restu atas pernikahan putri kami.

Berikut link undangan kami, untuk detail informasi dari acara dapat membuka website :
[link-undangan]

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.

Jika berkenan mohon untuk mengisi ucapan dan konfirmasi kehadiran di form RSVP untuk berkenan hadir/tidak, serta datang pada jam yang telah ditentukan.

Terima kasih banyak atas perhatiannya

Wassalamu'alaikum wr wb

Salam Hangat
🥀 [mempelai] 🥀`

function SendInvitation() {
    const [form, setForm] = useState({
        name: '',
        to: ''
    })

    const [template, setTemplate] = useState(inititalTemplate)

    const handleOnChange = (e) => {
        let {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = () => {
        let payload = template
            .replace('*[nama]*', form.to)
            .replace('[link-undangan]', 'http://localhost:3000/aghniya-izzul/sssf?to=Arrasyid%20Fadel%20Fatonsyah')
            .replace('[mempelai]', form.name)

        const message = encodeURIComponent(payload)
        const whatsappLink = `https://api.whatsapp.com/send?text=${message}`;
        window.open(whatsappLink, "_blank");
    }

    return (
        <div className='ai-send-invitation__container'>
            <div className='ai-send-invitation__container-content'>
                <div className='ai-send-invitation__form-header'>
                    <Input
                        placeholder='Nama'
                        value={form.name ?? 'Arrasyid Fadel Fatonsyah'}
                        type='text'
                        name='name'
                        setValue={handleOnChange}
                    />
                    <Input
                        placeholder='Nama Tamu ⏎'
                        value={form.to}
                        type={'textarea'}
                        name="to"
                        setValue={handleOnChange}
                    />
                    <Input
                        value={template}
                        type={'textarea'}
                        name="template"
                        setValue={handleOnChange}
                    />
                </div>
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    )
}

export default SendInvitation