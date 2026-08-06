import { Link, useParams } from 'react-router'
import { topicGroups } from '../data/topics.js'

function TopicPage() {
  const { topicId } = useParams()

  const topic = topicGroups.find((group) => group.id === topicId)

  if (!topic) {
    return (
      <main className="lesson-page">
        <p>Topic not found.</p>
        <Link to="/">Return home</Link>
      </main>
    )
  }

  return (
    <main className="lesson-page">
      <Link className="back-link" to="/">
        ← Back to course roadmap
      </Link>

      <p className="section-label">CS3 Lesson</p>

      <h1>{topic.title}</h1>

      <p className="lesson-introduction">{topic.description}</p>
    </main>
  )
}

export default TopicPage