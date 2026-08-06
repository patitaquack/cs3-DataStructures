import { Link, Route, Routes } from 'react-router'
import { topicGroups } from './data/topics.js'
import TopicPage from './pages/TopicPage.jsx'
import './App.css'


function HomePage() {
  return (
    <div className="app">
      <header className="site-header">
        <a className="site-name" href="#top">
          CS3 Data Structures
        </a>

        <nav className="site-navigation" aria-label="Main navigation">
          <a href="#topics">Topics</a>
          <a href="#approach">Learning approach</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <p className="eyebrow">Python-focused study guide</p>

          <h1>Learn data structures and algorithms step by step.</h1>

          <p className="hero-description">
            Build a strong CS3 foundation with visual explanations, Python
            examples, algorithm traces, complexity analysis, and practice
            questions.
          </p>

          <a className="primary-button" href="#topics">
            Explore course topics
          </a>
        </section>

        <section className="topics-section" id="topics">
          <p className="section-label">Course roadmap</p>
          <h2>Topics from your CS3 syllabus</h2>

          <div className="topic-grid">
            {topicGroups.map((group) => (
             <Link
              className="topic-card"
              key={group.id}
              to={`/topics/${group.id}`}
          >
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <span className="topic-card-action">Open lesson →</span>
            </Link>
        ))}
        
        </div>
        
        </section>

        <section className="approach-section" id="approach">
          <p className="section-label">How you will learn</p>
          <h2>Understand, trace, implement, and apply.</h2>
          <p>
            Every lesson will include a plain-language explanation, important
            vocabulary, a visual demonstration, Python code, a line-by-line
            breakdown, Big-O analysis, common mistakes, and practice problems.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>Created as a Python-focused CS3 learning project.</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/topics/:topicId" element={<TopicPage />} />
    </Routes>
  )
}

export default App