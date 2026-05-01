function Card({ image, title, description }) {
  return (
    <div className="card" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      {image && <img src={image} alt={title} style={{ maxWidth: '100%' }} />}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
