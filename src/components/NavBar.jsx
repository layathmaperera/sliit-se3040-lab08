function NavBar({ appName = "TechNova Solutions" }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">{appName}</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#services">Our Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Support</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
