import './selectInput.scss'
import { useEffect, useState, useRef } from 'react'

function SelectInput({
    id='',
    placeholder='',
    options,
    value='',
    onChange
}) {
    /** data */
    const [isOpenSelect, setIsOpenSelect] = useState(false)
    const containerRef = useRef(null)
    /** end data */

    /** lifecycle */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpenSelect(false)
            }
        }
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])
    /** end lifecycle */

    /** methods */
    const handleOnChange = (payload) => {
        payload.key = id
        if (payload?.id === value?.id) payload = null
        onChange(payload)
        setIsOpenSelect(false)
    }
    /** end methods */

    return (
        <div className="ai-select-input__container" ref={containerRef}>
            <div className="ai-select-input__btn" onClick={() => setIsOpenSelect(!isOpenSelect)}>
                {value?.name ? (
                    <span className="value">{value?.name}</span>
                ) : (
                    <span className="placeholder">{placeholder}</span>
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
                        {options.map((option) => (
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