export default function Contact() {
  return (
    <section className="section">
      <div className="container text-center">
        <p className="section__label">Contact</p>
        <h1 className="section__title">연락하기</h1>
        <p className="section__desc">
          협업이나 문의는 아래 방법으로 편하게 연락 주세요.
        </p>
        <div className="grid">
          <div className="card">
            <span className="card__meta">Email</span>
            <p className="card__text">your-email@example.com</p>
          </div>
          <div className="card">
            <span className="card__meta">GitHub</span>
            <p className="card__text">
              <a href="https://github.com/heoyerim0517-dotcom" target="_blank" rel="noreferrer">
                github.com/heoyerim0517-dotcom
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
