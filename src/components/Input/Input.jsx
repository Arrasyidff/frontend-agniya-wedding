import './input.scss'

function Input({ placeholder, value, type, name, isError, setValue }) {
    return (
        <div className='ai-input__container'>
            <input
                className={isError ? 'isError' : ''}
                placeholder={placeholder}
                value={value}
                type={type}
                name={name}
                onChange={(e) => setValue(e)}
            />
        </div>
    )
}

export default Input