const projects = [
  {
    meta: 'Project 01',
    title: '프로젝트 이름',
    text: '무엇을 해결했는지 한 문장으로 설명해 주세요.',
  },
  {
    meta: 'Project 02',
    title: '프로젝트 이름',
    text: '사용한 기술과 맡은 역할을 간단히 적어 주세요.',
  },
  {
    meta: 'Project 03',
    title: '프로젝트 이름',
    text: '결과나 배운 점을 적어 주세요.',
  },
]

export default function Projects() {
  return (
    <section className="section">
      <div className="container text-center">
        <p className="section__label">Projects</p>
        <h1 className="section__title">프로젝트</h1>
        <p className="section__desc">직접 만든 작업물을 소개합니다.</p>
        <div className="grid">
          {projects.map((project) => (
            <article className="card" key={project.meta}>
              <span className="card__meta">{project.meta}</span>
              <h2 className="card__title">{project.title}</h2>
              <p className="card__text">{project.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
