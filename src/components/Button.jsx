function Button({ text, variant = 'primary', size = 'medium', onClick, disabled = false }) {
  // Available variants: 'primary', 'secondary', 'outline', 'danger', 'success'
  // Available sizes: 'small', 'medium', 'large'
  const className = `btn btn-${variant} btn-${size}`;

  return (
    <button 
      className={className} 
      onClick={onClick} 
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
