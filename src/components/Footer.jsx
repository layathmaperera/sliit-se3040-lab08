function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Modern App. All rights reserved.</p>
      <ul>
        <li><a href="https://twitter.com">Twitter</a></li>
        <li><a href="https://facebook.com">Facebook</a></li>
        <li><a href="https://instagram.com">Instagram</a></li>
      </ul>
    </footer>
  )
}

export default Footer
