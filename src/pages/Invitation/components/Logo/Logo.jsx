import './logo.scss'

function Logo({ size=null }) {
  return (
    <div className={`ai-logo__container ${size == 'medium' ? 'ai-logo__medium' : ''}`}>
      {size}
        <h1>IRA</h1>
        <span>&</span>
        <h1>Izul</h1>
    </div>
  )
}

export default Logo