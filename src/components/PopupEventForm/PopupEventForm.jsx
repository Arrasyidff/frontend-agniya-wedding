import React, { useState } from 'react'
import './popupEventForm.scss'
import { Input, PopupFormWrapper, PopupSuccess } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { createEvent } from '@store/actions/event'

function PopupEventForm({ eventEdit, open, setOpen }) {
    const dispatch = useDispatch()
    const { isSuccess } = useSelector(state => state.event)
    const initialForm = {
        event_name: eventEdit?.event_name ?? "",
        event_date: eventEdit?.event_date ?? "",
        event_time: [{start: '', end: ''}],
    };
    const [form, setForm] = useState(initialForm);
    const [inputs, setInputs] = useState([
        { title: "Nama Acara", name: "event_name", type: "text", placeholder: "Masukkan nama acara" },
        { title: "Tanggal", name: "event_date", type: "date", placeholder: "Masukkan tanggal acara" },
        { sessions: [{ name: "event_time-0", type: "time", placeholder: "Masukkan waktu acara" }] },
    ]);
    const [isSubmit, setIsSubmit] = useState(false);
    const [openPopupSuccess, setOpenPopupSuccess] = useState(false)

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setIsSubmit(false);
    };

    const handleOnChangeTime = (type, e) => {
        const {name, value} = e.target
        const index = parseInt(name.split("-")[1], 10);
        setForm(prev => {
            const updatedTimes = [...prev.event_time];
            updatedTimes[index][type] = value;
            return {...prev, event_time: updatedTimes}
        })
    }

    const handleAddSession = () => {
        setInputs((prev) =>
            prev.map((input) => {
                if (Array.isArray(input.sessions) && input.sessions.length < 3) {
                    const newSession = {
                        name: `event_time-${input.sessions.length}`,
                        type: "time",
                        placeholder: "Masukkan waktu acara",
                    };
                    return { ...input, sessions: [...input.sessions, newSession] };
                }
                return input;
            })
        );

        setForm((prev) => ({ ...prev, event_time: [...prev.event_time, {start: '', end: ''}] }));
    };

    const handleDeleteSession = (index) => {
        setInputs((prev) =>
            prev.map((input) => {
                if (Array.isArray(input.sessions) && input.sessions.length > 1) {
                    const updatedSessions = input.sessions.filter((_, idx) => idx !== index);
                    return { ...input, sessions: updatedSessions };
                }
                return input;
            })
        );

        setForm((prev) => {
            const updatedTimes = prev.event_time.filter((_, idx) => idx !== index);
            return { ...prev, event_time: updatedTimes };
        });
    };

    const handleOnSubmit = async () => {
        let isSuccess = await dispatch(createEvent(form))
        if (isSuccess) {
            setOpenPopupSuccess(true)
        }
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
                    titleForm="Tambah Acara"
                    handleOnSubmit={handleOnSubmit}
                    width="auto"
                >
                    {inputs.map((input, index) =>
                        !Array.isArray(input.sessions) ? (
                            <div key={index} className="ai-popup-guest-form__input-wrapper">
                                <Input
                                    title={input.title}
                                    placeholder={input.placeholder}
                                    value={form[input.name] ?? ""}
                                    type={input.type}
                                    name={input.name}
                                    isError={!form[input.name] && isSubmit}
                                    setValue={handleOnChange}
                                />
                            </div>
                        ) : (
                            input.sessions.map((sessionInput, jdx) => (
                                <div key={jdx} className="ai-popup-guest-form__input-wrapper multiple">
                                    <div className='ai-popup-guest-form__input-wrapper__time'>
                                        <Input
                                            title={`Sesi ${jdx + 1} mulai`}
                                            placeholder={sessionInput.placeholder}
                                            value={form.event_time[jdx].start ?? ""}
                                            type={sessionInput.type}
                                            name={sessionInput.name}
                                            isError={!form.event_time[jdx] && isSubmit}
                                            setValue={(e) => handleOnChangeTime('start', e)}
                                        />
                                        <Input
                                            title={`Sesi ${jdx + 1} selesai`}
                                            placeholder={sessionInput.placeholder}
                                            value={form.event_time[jdx].end ?? ""}
                                            type={sessionInput.type}
                                            name={sessionInput.name}
                                            isError={!form.event_time[jdx] && isSubmit}
                                            setValue={(e) => handleOnChangeTime('end', e)}
                                        />
                                    </div>
                                    <div className="ai-popup-guest-form__actions">
                                        {((jdx === (input.sessions.length - 1)) && (input.sessions.length !== 3)) && (
                                            <button
                                                disabled={input.sessions.length === 3}
                                                onClick={handleAddSession}
                                            >
                                                <i className="fas fa-plus" />
                                            </button>
                                        )}
                                        <button
                                            disabled={input.sessions.length === 1}
                                            className="delete"
                                            onClick={() => handleDeleteSession(jdx)}
                                        >
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    )}
                </PopupFormWrapper>
            )}

            {(openPopupSuccess && isSuccess) && (
                <PopupSuccess
                    detailName={form.event_name}
                    description={'berhasil ditambahkan'}
                    onEvent={handleCloseSuccessPopup}
                />
            )}
        </>
    );
};

export default PopupEventForm