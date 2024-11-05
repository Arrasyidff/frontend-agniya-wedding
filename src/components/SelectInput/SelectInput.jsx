import './selectInput.scss'
import { useState } from 'react'

function SelectInput() {
    const [isOpenSelect, setIsOpenSelect] = useState(false)

    return (
        <div className='ai-select-input__container'>
            <div className='ai-select-input__btn' onClick={() => setIsOpenSelect(!isOpenSelect)}>
                <span>Select your option</span>
                {isOpenSelect ? (
                    <i className="fas fa-sort-down"></i>
                ) : (
                    <i className="fas fa-sort-up"></i>
                )}
            </div>

            {isOpenSelect && (
                <ul className="ai-select-input__options">
                    <li className='ai-select-input__option'>
                        <span>Text</span>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default SelectInput