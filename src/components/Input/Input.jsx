import './input.scss'

function Input({ title, placeholder, value, type, name, isError, setValue, readOnly }) {
    return (
        <div className='ai-input__container'>
            {
                (['text', 'date', 'time']).includes(type) ? (
                    <>
                        <label htmlFor={name}>{title}</label>
                        <input
                            id={name}
                            className={isError ? 'isError' : ''}
                            placeholder={placeholder}
                            value={value}
                            type={type}
                            name={name}
                            readOnly={readOnly}
                            onChange={(e) => setValue(e)}
                        />
                    </>
                ) : (
                    <div className='ai-input__textarea'>
                        {title && (<p>{title}</p>)}
                        <textarea
                            id={name}
                            className={isError ? 'isError' : ''}
                            placeholder={placeholder}
                            value={value}
                            type={type}
                            name={name}
                            onChange={(e) => setValue(e)}
                            readOnly={readOnly}
                        ></textarea>
                    </div>

                )
            }
        </div>
    )
}

export default Input