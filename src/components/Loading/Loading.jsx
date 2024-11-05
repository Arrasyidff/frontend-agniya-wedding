import './loading.scss'

function Loading({ is_fullscreen=false }) {
    return (
        <div className={`ai-loading__container ${is_fullscreen ? 'is_fullscreen' : ''}`}>
            <i className="fas fa-spinner rotate-center"></i>
        </div>
    )
}

export default Loading