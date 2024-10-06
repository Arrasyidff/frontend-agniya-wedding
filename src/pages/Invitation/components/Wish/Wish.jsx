import './wish.scss'

function Wish() {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log('check')
    }
    return (
        <section className='ai-wish__container'>
            <h1>DOA DAN UCAPAN</h1>
            <form onSubmit={handleOnSubmit}>
                <textarea placeholder='Tulis Harapan Kamu' name="wish"></textarea>
                <button type='submit'>Kirim</button>
            </form>
        </section>
    )
}

export default Wish