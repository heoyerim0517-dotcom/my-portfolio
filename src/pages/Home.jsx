import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* 소개: 누구인지 한 문장으로 */}
      <section className="hero">
        <div className="container text-center">
          <p className="section__label">Portfolio 2026</p>
          <h1 className="hero__title">YERIM</h1>
          <p className="hero__tagline">
            문제를 이해하고, 단순하고 명확하게 만드는 개발자 허예림입니다.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* 핵심 역량 요약 */}
      <section className="section section--dark">
        <div className="container text-center">
          <p className="section__label">What I Do</p>
          <h2 className="section__title">제가 하는 일</h2>
          <p className="section__desc">
            기획부터 구현까지, 사용자가 쓰기 편한 웹 서비스를 만듭니다.
          </p>
          <div className="grid">
            <div className="card">
              <h3 className="card__title">Design</h3>
              <p className="card__text">군더더기 없는 인터페이스를 설계합니다.</p>
            </div>
            <div className="card">
              <h3 className="card__title">Develop</h3>
              <p className="card__text">React로 유지보수하기 쉬운 코드를 작성합니다.</p>
            </div>
            <div className="card">
              <h3 className="card__title">Deliver</h3>
              <p className="card__text">배포까지 책임지고 마무리합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
