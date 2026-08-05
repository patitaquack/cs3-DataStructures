import './App.css'

const topicGroups = [
  {
    id: 'analysis',
    title: 'Analysis and Recursion',
    description:
      'Trace iterative and recursive algorithms and understand Big-O time and space complexity.',
  },
  {
    id: 'hashing',
    title: 'Hashing and Collections',
    description:
      'Solve problems with Python sets, dictionaries, hashing, arrays, and lists.',
  },
  {
    id: 'trees',
    title: 'Heaps and Balanced Trees',
    description:
      'Learn how priority queues, heaps, and balanced search trees organize data efficiently.',
  },
  {
    id: 'graphs',
    title: 'Graph Algorithms',
    description:
      'Study BFS, DFS, topological sorting, Dijkstra, Prim, and Kruskal step by step.',
  },
  {
    id: 'design',
    title: 'Algorithm Design',
    description:
      'Compare greedy, divide-and-conquer, dynamic programming, backtracking, and randomized algorithms.',
  },
]

function App() {
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
              <article className="topic-card" key={group.id}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </article>
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

export default App