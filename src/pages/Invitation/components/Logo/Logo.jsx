import './logo.scss'
import topFlower from '@assets/top_flower_cover.png'
import bottomFlower from '@assets/bottom_flower_cover.png'

function Logo({ size=null }) {
  return (
    <div className={`ai-logo__container ${size === 'medium' ? 'ai-logo__medium' : ''}`}>
		{size !== 'medium' && <img src={topFlower} alt="" srcset="" />}
        <div className='ai-logo__text'>
			<h1>AGHNIYA</h1>
			<span>and</span>
			<h1>Izzul</h1>
		</div>
		{size !== 'medium' && <img src={bottomFlower} alt="" srcset="" />}
    </div>
  )
}

export default Logo