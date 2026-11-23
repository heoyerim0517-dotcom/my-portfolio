import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container text-center">
        <p className="section__label">404</p>
        <h1 className="section__title">페이지를 찾을 수 없습니다</h1>
        <p className="section__desc" style={{ marginBottom: 32 }}>
          주소가 잘못되었거나 이동된 페이지입니다.
        </p>
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </section>
  )
}
