import React, { useState } from 'react'
import './sendInvitation.scss'
import { Input, PopupShareInvitationForm, SelectInput } from '@components'
import { useEffect } from 'react'

function SendInvitation() {
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({
        name: 'Aghniya - Izzul & Mukhlis Wahyudin - Sri Utami',
        to: '',
        session: null
    })
    const [template, setTemplate] = useState('')

    const getProcessedTo = () => {
        return [...new Set(
            form.to
                .split('\n')
                .map(item => item.trim())
                .filter(item => item !== '')
        )]
    }

    useEffect(() => {
        let dateInvitation = formatTemplateBySession(form.session?.id)
        let initialTemplate =
`Kepada Yth.
Bapak/Ibu/Saudara/i
*[nama]*

Assalamu'alaikum Wr Wb

Dengan penuh rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk memberikan doa restu atas pernikahan putri kami.

Berikut link undangan kami, untuk detail informasi dari acara dapat membuka website :
[link-undangan]

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.

Jika berkenan mohon untuk mengisi ucapan dan konfirmasi kehadiran di form RSVP untuk berkenan hadir pada :
${dateInvitation}

Terima kasih banyak atas perhatiannya

Wassalamu'alaikum wr wb

Salam Hangat
🥀 [mempelai] 🥀
        `
        if (form.session !== null) setTemplate(initialTemplate)

        return () => setTemplate('')
    }, [form.session])

    /** methods */
    function formatTemplateBySession(session) {
        if (session === 'dfs') {
            return `📆 Selasa, 24 Desember 2024\n⏰ 19.00-21.00 WITA`
        } else if (session === 'dsf') {
            return `📆 Rabu, 25 Desember 2024\n⏰ 16.00-18.00 WITA`
        } else if (session === 'dss') {
            return `📆 Rabu, 25 Desember 2024\n⏰ 19.00-21.00 WITA`
        }
        return ''
    }

    const handleOnChange = (e) => {
        let {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleSelectInput = (val) => {
        setForm({...form, [val.key]: val})
    }
    /** end methods */

    return (
        <>
            <div className='ai-send-invitation__container layout-padding'>
                <div className='ai-send-invitation__container-content'>
                    <div className='ai-send-invitation__form'>
                        <Input
                            placeholder='Nama'
                            value={form.name ?? 'Arrasyid Fadel Fatonsyah'}
                            type='text'
                            name='name'
                            setValue={handleOnChange}
                        />
                        <SelectInput
                            id='session'
                            placeholder='Sesi'
                            options={[
                                {id: 'dfs', name: 'Selasa, 24 Desember 2024, Pukul 19:00-21:00 WITA'},
                                {id: 'dsf', name: 'Rabu, 25 Desember 2024, Pukul 16:00-18:00 WITA'},
                                {id: 'dss', name: 'Rabu, 25 Desember 2024, Pukul 19:00-21:00 WITA'},
                            ]}
                            value={form.session}
                            onChange={handleSelectInput}
                        />
                        <Input
                            placeholder='Nama Tamu ⏎'
                            value={form.to}
                            type={'textarea'}
                            name="to"
                            setValue={handleOnChange}
                        />

                        <h1 className='ai-send-invitation__form-template'>Template</h1>
                        <Input
                            value={template}
                            type={'textarea'}
                            name="template"
                            setValue={(e) => setTemplate(e.target.va)}
                        />
                    </div>
                    <button
                        onClick={() => setOpen(true)}
                        className='ai-send-invitation-submit'
                        disabled={!form.name || !form.to}
                    >
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>

            <PopupShareInvitationForm
                open={open}
                owner={form.name}
                session={form.session?.id}
                template={template}
                guests={getProcessedTo()}
                setOpen={setOpen}
            />
        </>
    )
}

export default SendInvitation