function Testimonial({ quote, name, photo }) {
  return (
    <div className="testimonial" style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '20px 0', padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
      {photo && <img src={photo} alt={name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />}
      <div>
        <p style={{ fontStyle: 'italic', margin: '0 0 8px 0' }}>"{quote}"</p>
        <p style={{ fontWeight: 'bold', margin: '0' }}>- {name}</p>
      </div>
    </div>
  )
}

export default Testimonial
