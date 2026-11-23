import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="footer__brand">YERIM</p>
        <p className="footer__copy">© {new Date().getFullYear()} 허예림. All rights reserved.</p>
      </div>
    </footer>
  )
}
