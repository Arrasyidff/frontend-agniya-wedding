import './table.scss'
import arrowUp from '@assets/up-arrow.png'
import arrowDown from '@assets/down-arrow.png'
import { SelectInput } from '@components'

function Table({
    search,
    placeholderFind='',
    headerColumns=[],
    bodyData=[],
    renderCustomTd=null,
    onChangeSearch,
    onTdClick=null,
    handleOpenForm=null,
    handleSortOrder,
    handleSelect=null,
    handleOpenQrCode=null
}) 
    {
                const {placehoder, value, options, onChange: onChangeSelect} = handleSelect || {}
    return (
        <div className='ai-table__container'>
            <div className='ai-table__header'>
                <div 
                    className='ai-table__header-input'
                >
                    <i className="fas fa-search" />
                    <input
                        type="text"
                        placeholder={placeholderFind}
                        value={search}
                        onChange={(e) => onChangeSearch(e.target.value)}
                    />
                </div>

                {handleSelect && (
                    <SelectInput
                        placehoder={placehoder}
                        options={options}
                        value={value}
                        onChange={onChangeSelect}
                    />
                )}

                {handleOpenForm && (
                    <button className='ai-table__header-add' onClick={() => handleOpenForm()}>
                        <i className='fas fa-plus' />
                        Tambah
                    </button>
                )}

                {handleOpenQrCode && (
                    <button
                        onClick={() => handleOpenQrCode(true)}
                        className='ai-table__header--qrcode'
                    >
                        <i className="fas fa-qrcode" />
                    </button>
                )}
            </div>

            <div className='ai-table__content'>
                <table>
                    <thead>
                        <tr>
                            {headerColumns.map((item) => (
                                <th key={item.id} style={{ width: item.width }}>
                                    <div className='ai-table__th-container' style={{ justifyContent: item?.justifyContent ?? 'flex-start' }}>
                                        <p onClick={() => handleSortOrder(item.id)}>{item.name}</p>
                                        {!(['no', 'action']).includes(item.id) && (
                                            <div
                                                className='ai-table__th-sort'
                                                onClick={() => handleSortOrder(item.id)}
                                            >
                                                <img style={{opacity: !item?.sort || (item.sort === 'asc') ? '1' : '0'}} src={arrowUp} alt="" />
                                                <img style={{opacity: !item?.sort || (item.sort === 'desc') ? '1' : '0'}} src={arrowDown} alt=""/>
                                            </div>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {bodyData.map((item, i) => (
                            <tr key={item.id}>
                                {headerColumns.map(col => (
                                    <td key={col.id} style={{ textAlign: col?.justifyContent ?? 'left' }}>
                                        {col?.isCustomTd && renderCustomTd && renderCustomTd(item, onTdClick) !== undefined
                                            ? renderCustomTd(item, onTdClick, col.id)
                                            : col.id.toLowerCase() === 'no'
                                            ? `${i + 1}.`
                                            : item[col.id]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Table