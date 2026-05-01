function Button({ text, variant = 'primary', size = 'medium', onClick }) {
  const styles = {
    padding: size === 'large' ? '12px 24px' : size === 'small' ? '4px 8px' : '8px 16px',
    backgroundColor: variant === 'primary' ? '#007bff' : variant === 'secondary' ? '#6c757d' : '#e0e0e0',
    color: variant === 'primary' || variant === 'secondary' ? 'white' : 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <button style={styles} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
