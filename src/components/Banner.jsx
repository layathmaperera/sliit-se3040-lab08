function Banner({ message, callToActionText, onActionClick, backgroundColor = '#f8f9fa', backgroundImage }) {
  const styles = {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: backgroundImage ? 'white' : 'inherit'
  };

  return (
    <div style={styles}>
      <h2>{message}</h2>
      {callToActionText && (
        <button onClick={onActionClick} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
          {callToActionText}
        </button>
      )}
    </div>
  )
}

export default Banner
