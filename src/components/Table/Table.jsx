import './table.scss'

function Table({ headerColumns=[], bodyData=[], renderCustomTd=null, onTdClick }) {
    return (
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
    )
}

export default Table