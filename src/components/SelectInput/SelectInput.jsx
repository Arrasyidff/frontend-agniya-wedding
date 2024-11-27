import './selectInput.scss'
import { useState } from 'react'

function SelectInput({
    placeholder='',
    options,
    value='',
    onChange
}) {
    /** data */
    const [isOpenSelect, setIsOpenSelect] = useState(false)
    /** end data */

    /** methods */
    const handleOnChange = (payload) => {
        if (payload?.id === value?.id) payload = null
        onChange(payload)
        setIsOpenSelect(false)
    }
    /** end methods */

    return (
        <div className='ai-select-input__container'>
            <div className='ai-select-input__btn' onClick={() => setIsOpenSelect(!isOpenSelect)}>
                {value?.name ? (
                    <span className='value'>{value?.name}</span>
                ): (
                    <span className='placeholder'>{placeholder}</span>
                )}
                {isOpenSelect ? (
                    <i className="fas fa-sort-down"></i>
                ) : (
                    <i className="fas fa-sort-up"></i>
                )}
            </div>

            {isOpenSelect && (
                <>
                    <div className="ai-select-input__options">
                        {options.map(option => (
                            <div
                                key={option.id}
                                className={`ai-select-input__option ${option?.id === value?.id ? 'active' : ''}`}
                                onClick={() => handleOnChange(option)}
                            >
                                <span>{option.name}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default SelectInput