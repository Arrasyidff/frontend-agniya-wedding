import './guest.scss'

function Guest() {
    return (
        <div className='ai-guest__container'>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>HP</th>
                        <th>Kenalan dari pihak</th>
                        <th>Alamat</th>
                        <th>Informasi Tambahan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, deleniti.</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis dolorem consequatur.</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, deleniti.</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis dolorem consequatur.</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Guest