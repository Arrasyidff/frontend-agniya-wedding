import './quote.scss'
import quoteSymbol from '@assets/quote_symbol.png'
import quoteRose from '@assets/quote_rose.png'
// import backgroundGradient from '@assets/background_gradient.png'
// import backgroundFlower from '@assets/flower_background.png'

function Quote() {
  return (
    <section id='ai-quote' className='ai-quote__container'>
        {/* <img className='ai-quote__content--background-gradient' src={backgroundGradient} alt="" srcSet="" /> */}
        {/* <img className='ai-quote__content--background-flower' src={backgroundFlower} alt="" srcSet="" /> */}
        <div className='ai-quote__sub-container'>
            <div className='ai-quote__content'>
                <div className='ai-quote__sub-content'>
                    <img className='ai-quote--symbol' src={quoteSymbol} alt='symbol' />
                    <p className='ai-quote--dua'>
                        wa min âyâtihî an khalaqa lakum min 
                        anfusikum azwâjal litaskunû ilaihâ wa ja‘ala 
                        bainakum mawaddataw wa rahmah, inna fî dzâlika 
                        la'âyâtil liqaumiy yatafakkarûn
                    </p>
                    <p className='ai-quote--dua-translate'>
                        Di antara tanda-tanda (kebesaran)-Nya 
                        ialah bahwa Dia menciptakan pasangan-pasangan 
                        untukmu dari (jenis) dirimu sendiri agar 
                        kamu merasa tenteram kepadanya. Dia menjadikan 
                        di antaramu rasa cinta dan kasih sayang. 
                        Sesungguhnya pada yang demikian itu benar-benar 
                        terdapat tanda-tanda (kebesaran Allah) bagi 
                        kaum yang berpikir.
                    </p>
                    <p className='ai-quote--surah'>(Ar-Rum · Ayat 21)</p>
                    <img className='ai-quote--rose' src={quoteRose} alt="" srcSet="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quote