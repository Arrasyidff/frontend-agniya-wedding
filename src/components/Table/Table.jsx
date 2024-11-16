import './table.scss'

function Table({ headerColumns=[], bodyData=[], renderCustomTd=null, onTdClick=null, handleOpenForm=null }) {
    return (
        <div className='ai-table__container'>
            <div className='ai-table__header'>
                <div 
                    className='ai-table__header-input'
                    style={{ width: handleOpenForm ? '88%' : '100%' }}
                >
                    <i className="fas fa-search" />
                    <input type="text" placeholder='CARI TAMU...' />
                </div>

                {handleOpenForm && (
                    <button className='ai-table__header-add' onClick={() => handleOpenForm()}>
                        Tambah
                    </button>
                )}
            </div>

            <table>
                <thead>
                    <tr>
                        {headerColumns.map(item => (
                            <th key={item.id} style={{ width: item.width }}>{item.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {bodyData.map((item, i) => (
                        <tr key={item.id}>
                            {headerColumns.map(col => (
                                <td key={col.id}>
                                    {col?.isCustomTd && renderCustomTd && renderCustomTd(item, onTdClick) !== undefined
                                        ? renderCustomTd(item, onTdClick)
                                        : col.id.toLowerCase() === 'no'
                                        ? `${i + 1}.`
                                        : item[col.id] || null}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Table