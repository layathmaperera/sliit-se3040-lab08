function Testimonial({ quote, name, photo }) {
  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : '?';
  };

  return (
    <div className="testimonial">
      <div className="testimonial-image-wrapper">
        {photo ? (
          <img src={photo} alt={name} />
        ) : (
          <div className="testimonial-fallback-img">
            {getInitials(name)}
          </div>
        )}
      </div>
      <div className="testimonial-content">
        <p className="testimonial-quote">"{quote}"</p>
        <p className="testimonial-name">{name}</p>
      </div>
    </div>
  )
}

export default Testimonial
