import './wish.scss'

function Wish() {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log('check')
    }
    return (
        <section className='ai-wish__container'>
            <div className='ai-wish__form'>
                <h1>DOA DAN UCAPAN</h1>
                <form onSubmit={handleOnSubmit}>
                    <textarea placeholder='Tulis Harapan Kamu' name="wish"></textarea>
                    <button type='submit'>Kirim</button>
                </form>
            </div>

            <div className='ai-wish__wishes'>
                {
                    ([1,2,3,4,5]).map(item => (
                        <div key={item} className='ai-wish__wishes-item'>
                            <div className='ai-wish__wishes-item__initial'>
                                <h1>E</h1>
                            </div>
                            <div className='ai-wish__wishes-item__detail'>
                                <p>Eddy Radja</p>
                                <p>Selamat menjalani kehidupan baru yang penuh bahagia. Semoga Tuhan selalu melindungi dan memberikan berkah. Amin.</p>
                                <p>1 minggu yang lalu at 18:26</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Wish