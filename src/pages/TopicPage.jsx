import { Link, useParams } from 'react-router'
import { topicGroups } from '../data/topics.js'
import { lessonsById } from '../data/lessons/index.js'

function TopicPage() {
  const { topicId } = useParams()

  const topic = topicGroups.find((group) => group.id === topicId)
  const lesson = lessonsById[topicId]

  if (!topic) {
    return (
      <main className="lesson-page">
        <p>Topic not found.</p>
        <Link to="/">Return home</Link>
      </main>
    )
  }

  if (!lesson) {
    return (
      <main className="lesson-page">
        <Link className="back-link" to="/">
          ← Back to course roadmap
        </Link>

        <p className="section-label">CS3 Lesson</p>
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>

        <section className="lesson-section">
          <h2>Lesson coming soon</h2>
          <p>
            This lesson will be added as we continue building the CS3 study
            guide.
          </p>
        </section>
      </main>
    )
  }

  return (
    <main className="lesson-page">
      <div className="lesson-container">
        <Link className="back-link" to="/">
          ← Back to course roadmap
        </Link>

        <header className="lesson-header">
          <p className="section-label">CS3 Lesson</p>
          <h1>{lesson.title}</h1>
          <p className="lesson-subtitle">{lesson.subtitle}</p>
        </header>

        <section className="lesson-section">
          <p className="section-label">Lesson introduction</p>
          <h2>Why this matters</h2>
          <p className="lesson-body">{lesson.introduction}</p>
        </section>

        <section className="lesson-section">
          <p className="section-label">Learning objectives</p>
          <h2>By the end of this lesson, you should be able to:</h2>

          <ul className="objectives-list">
            {lesson.objectives.map((objective, index) => (
              <li key={objective}>
                <span className="objective-number">{index + 1}</span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="lesson-section">
          <p className="section-label">Key vocabulary</p>
          <h2>Terms you need to know</h2>

          <div className="vocabulary-grid">
            {lesson.vocabulary.map((item) => (
              <article className="vocabulary-card" key={item.term}>
                <h3>{item.term}</h3>
                <p>{item.definition}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default TopicPage