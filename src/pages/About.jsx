const skills = ['HTML / CSS', 'JavaScript', 'React', 'Git / GitHub']

export default function About() {
  return (
    <>
      {/* 자기소개 */}
      <section className="section">
        <div className="container text-center">
          <p className="section__label">About</p>
          <h1 className="section__title">저를 소개합니다</h1>
          <p className="section__desc">
            안녕하세요, 허예림입니다. 이곳에 본인의 배경, 관심 분야, 일하는 방식을 간단히 적어 주세요.
            두세 문장이면 충분합니다.
          </p>
        </div>
      </section>

      {/* 보유 기술 */}
      <section className="section section--dark">
        <div className="container text-center">
          <p className="section__label">Skills</p>
          <h2 className="section__title">기술 스택</h2>
          <div className="grid">
            {skills.map((skill) => (
              <div className="card" key={skill}>
                <h3 className="card__title">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 학력/경력 */}
      <section className="section section--light">
        <div className="container text-center">
          <p className="section__label">Education</p>
          <h2 className="section__title">학력 및 경력</h2>
          <div className="grid">
            <div className="card">
              <span className="card__meta">2020 – 현재</span>
              <h3 className="card__title">동아대학교</h3>
              <p className="card__text">재학 중 (전공을 입력하세요)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
