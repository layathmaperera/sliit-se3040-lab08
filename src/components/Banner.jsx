function Banner({ promotionalMessage, subMessage, callToActionText, onActionClick, backgroundImage }) {
  // If an image is provided, we add a dark overlay gradient to ensure text remains readable
  const bannerStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    border: 'none'
  } : {};

  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner-content">
        <h2>{promotionalMessage}</h2>
        {subMessage && <p className="banner-subtext">{subMessage}</p>}
        
        {callToActionText && (
          <div className="banner-actions">
            <button className="btn btn-primary btn-large" onClick={onActionClick}>
              {callToActionText}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Banner
