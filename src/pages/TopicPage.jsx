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

          <p className="lesson-body">
            {lesson.introduction}
          </p>
        </section>


        <section className="lesson-section">
          <p className="section-label">Learning objectives</p>

          <h2>
            By the end of this lesson, you should be able to:
          </h2>

          <ul className="objectives-list">
            {lesson.objectives.map((objective, index) => (
              <li key={objective}>
                <span className="objective-number">
                  {index + 1}
                </span>

                <span>
                  {objective}
                </span>
              </li>
            ))}
          </ul>
        </section>


        <section className="lesson-section">
          <p className="section-label">
            Key vocabulary
          </p>

          <h2>
            Terms you need to know
          </h2>


          <div className="vocabulary-grid">
            {lesson.vocabulary.map((item) => (
              <article
                className="vocabulary-card"
                key={item.term}
              >

                <h3>
                  {item.term}
                </h3>

                <p>
                  {item.definition}
                </p>

              </article>
            ))}
          </div>
        </section>

        {lesson.strategyOverview && (
  <section className="lesson-section design-strategies-section">
    <p className="section-label">Algorithm Design Strategies</p>

    <h2>{lesson.strategyOverview.title}</h2>

    <p className="lesson-body">
      {lesson.strategyOverview.introduction}
    </p>

    <div className="design-strategy-grid">
      {lesson.strategyOverview.strategies.map((strategy) => (
        <article
          className="design-strategy-card"
          key={strategy.name}
        >
          <h3>{strategy.name}</h3>

          <div className="design-strategy-detail">
            <strong>Core idea</strong>
            <p>{strategy.coreIdea}</p>
          </div>

          <div className="design-strategy-detail">
            <strong>Useful for</strong>
            <p>{strategy.usefulFor}</p>
          </div>

          <div className="design-strategy-example">
            <strong>Example</strong>
            <p>{strategy.example}</p>
          </div>
        </article>
      ))}
    </div>

    <div className="key-idea">
      <strong>Remember:</strong>
      <p>{lesson.strategyOverview.keyIdea}</p>
    </div>
  </section>
)}
{lesson.greedyAlgorithms && (
  <section className="lesson-section greedy-section">
    <p className="section-label">Greedy Strategy</p>
    <h2>{lesson.greedyAlgorithms.title}</h2>

    <p className="lesson-body">
      {lesson.greedyAlgorithms.introduction}
    </p>

    <div className="greedy-process-grid">
      {lesson.greedyAlgorithms.process.map((item) => (
        <article className="greedy-process-card" key={item.step}>
          <span className="greedy-step-number">
            Step {item.step}
          </span>

          <h3>{item.title}</h3>
          <p>{item.explanation}</p>
        </article>
      ))}
    </div>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.greedyAlgorithms.keyIdea}</p>
    </div>

    <div className="greedy-example">
      <h3>
        {lesson.greedyAlgorithms.activitySelection.title}
      </h3>

      <p className="lesson-body">
        {lesson.greedyAlgorithms.activitySelection.explanation}
      </p>

      <h4>Activities</h4>

      <div className="activity-grid">
        {lesson.greedyAlgorithms.activitySelection.activities.map(
          (activity) => (
            <article className="activity-card" key={activity.name}>
              <strong>Activity {activity.name}</strong>
              <span>Start: {activity.start}</span>
              <span>Finish: {activity.finish}</span>
            </article>
          )
        )}
      </div>

      <h4>Python Example</h4>

      <pre className="python-code">
        <code>
          {lesson.greedyAlgorithms.activitySelection.code}
        </code>
      </pre>

      <h4>Decision Trace</h4>

      <div className="greedy-trace-grid">
        {lesson.greedyAlgorithms.activitySelection.trace.map(
          (item) => (
            <article
              className={`greedy-trace-card ${
                item.decision === 'Select'
                  ? 'greedy-selected'
                  : 'greedy-skipped'
              }`}
              key={item.activity}
            >
              <div className="greedy-trace-heading">
                <strong>Activity {item.activity}</strong>
                <span>{item.decision}</span>
              </div>

              <p>{item.explanation}</p>
            </article>
          )
        )}
      </div>

      <div className="greedy-result">
        <strong>Selected activities:</strong>
        <span>
          {lesson.greedyAlgorithms.activitySelection.result.join(
            ' → '
          )}
        </span>
      </div>
    </div>

    <div className="greedy-summary-grid">
      <article className="greedy-works-card">
        <h3>When Greedy Works</h3>

        <ul>
          {lesson.greedyAlgorithms.whenItWorks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="greedy-limitation-card">
        <h3>
          {lesson.greedyAlgorithms.limitation.title}
        </h3>

        <p>
          {lesson.greedyAlgorithms.limitation.explanation}
        </p>

        <div className="greedy-limitation-example">
          <strong>Example</strong>
          <p>{lesson.greedyAlgorithms.limitation.example}</p>
        </div>
      </article>
    </div>
  </section>
)}
{lesson.divideAndConquer && (
  <section className="lesson-section divide-conquer-section">
    <p className="section-label">Design Strategy</p>

    <h2>{lesson.divideAndConquer.title}</h2>

    <p className="lesson-body">
      {lesson.divideAndConquer.introduction}
    </p>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.divideAndConquer.keyIdea}</p>
    </div>

    <div className="divide-process-grid">
      {lesson.divideAndConquer.process.map((item) => (
        <article className="divide-process-card" key={item.step}>
          <span className="divide-step-number">
            Step {item.step}
          </span>

          <h3>{item.title}</h3>

          <p>{item.explanation}</p>
        </article>
      ))}
    </div>

    <div className="merge-sort-example">
      <p className="section-label">Python Example</p>

      <h3>{lesson.divideAndConquer.mergeSort.title}</h3>

      <p className="lesson-body">
        {lesson.divideAndConquer.mergeSort.explanation}
      </p>

      <div className="merge-original">
        <span>Original list</span>

        <div className="merge-values">
          {lesson.divideAndConquer.mergeSort.original.map(
            (value, index) => (
              <span
                className="merge-value"
                key={`${value}-${index}`}
              >
                {value}
              </span>
            )
          )}
        </div>
      </div>

      <div className="merge-trace-grid">
        <div className="merge-trace-column">
          <h4>Divide</h4>

          {lesson.divideAndConquer.mergeSort.divideLevels.map(
            (level, levelIndex) => (
              <article
                className="merge-level-card"
                key={`divide-${levelIndex}`}
              >
                <span className="merge-level-label">
                  Level {levelIndex + 1}
                </span>

                <div className="merge-groups">
                  {level.map((group, groupIndex) => (
                    <span
                      className="merge-group"
                      key={`divide-${levelIndex}-${groupIndex}`}
                    >
                      [{group.join(', ')}]
                    </span>
                  ))}
                </div>
              </article>
            )
          )}
        </div>

        <div className="merge-trace-column merge-column">
          <h4>Combine</h4>

          {lesson.divideAndConquer.mergeSort.mergeLevels.map(
            (level, levelIndex) => (
              <article
                className="merge-level-card"
                key={`merge-${levelIndex}`}
              >
                <span className="merge-level-label">
                  Level {levelIndex + 1}
                </span>

                <div className="merge-groups">
                  {level.map((group, groupIndex) => (
                    <span
                      className="merge-group"
                      key={`merge-${levelIndex}-${groupIndex}`}
                    >
                      [{group.join(', ')}]
                    </span>
                  ))}
                </div>
              </article>
            )
          )}
        </div>
      </div>

      <div className="merge-result">
        <strong>Sorted result</strong>

        <div className="merge-values">
          {lesson.divideAndConquer.mergeSort.result.map(
            (value, index) => (
              <span
                className="merge-value"
                key={`result-${value}-${index}`}
              >
                {value}
              </span>
            )
          )}
        </div>
      </div>

      <h4 className="subsection-title">Python Code</h4>

      <pre className="python-code">
        <code>{lesson.divideAndConquer.mergeSort.code}</code>
      </pre>

      <h4 className="subsection-title">
        Line-by-Line Explanation
      </h4>

      <div className="divide-line-grid">
        {lesson.divideAndConquer.mergeSort.lineByLine.map(
          (item, index) => (
            <article
              className="divide-line-card"
              key={`${item.line}-${index}`}
            >
              <code>{item.line}</code>

              <p>{item.explanation}</p>
            </article>
          )
        )}
      </div>
    </div>

    <div className="divide-complexity">
      <h3>Merge Sort Complexity</h3>

      <div className="divide-complexity-grid">
        {lesson.divideAndConquer.complexity.map((item) => (
          <article
            className="divide-complexity-card"
            key={item.measurement}
          >
            <div className="divide-complexity-heading">
              <h4>{item.measurement}</h4>

              <strong>{item.complexity}</strong>
            </div>

            <p>{item.explanation}</p>
          </article>
        ))}
      </div>
    </div>

    <div className="subproblem-comparison">
      <h3>{lesson.divideAndConquer.comparison.title}</h3>

      <div className="subproblem-comparison-grid">
        <article className="subproblem-card independent-card">
          <span className="section-label">
            Divide and Conquer
          </span>

          <h4>Independent subproblems</h4>

          <p>
            {
              lesson.divideAndConquer.comparison
                .divideAndConquer
            }
          </p>
        </article>

        <article className="subproblem-card overlapping-card">
          <span className="section-label">
            Dynamic Programming
          </span>

          <h4>Overlapping subproblems</h4>

          <p>
            {
              lesson.divideAndConquer.comparison
                .dynamicProgramming
            }
          </p>
        </article>
      </div>
    </div>

    <div className="key-idea">
      <strong>Remember:</strong>

      <p>{lesson.divideAndConquer.keyIdea}</p>
    </div>
  </section>
)}
        {lesson.graphFundamentals && (
          <section className="lesson-section graph-fundamentals-section">
            <p className="section-label">Graph Fundamentals</p>
            <h2>{lesson.graphFundamentals.title}</h2>

            <p className="lesson-body">
              {lesson.graphFundamentals.introduction}
            </p>

            <div className="graph-visual-card">
              <svg
                className="graph-svg"
                viewBox="0 0 700 420"
                role="img"
                aria-label="Undirected graph containing five vertices"
              >
                <g className="graph-edges">
                  {lesson.graphFundamentals.edges.map((edge) => {
                    const start = lesson.graphFundamentals.vertices.find(
                      (vertex) => vertex.id === edge.from
                    )

                    const end = lesson.graphFundamentals.vertices.find(
                      (vertex) => vertex.id === edge.to
                    )

                    if (!start || !end) {
                      return null
                    }

                    return (
                      <line
                        key={`${edge.from}-${edge.to}`}
                        x1={start.x}
                        y1={start.y}
                        x2={end.x}
                        y2={end.y}
                      />
                    )
                  })}
                </g>

                <g className="graph-vertices">
                  {lesson.graphFundamentals.vertices.map((vertex) => (
                    <g key={vertex.id}>
                      <circle
                        cx={vertex.x}
                        cy={vertex.y}
                        r="42"
                      />

                      <text
                        x={vertex.x}
                        y={vertex.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        {vertex.id}
                      </text>
                    </g>
                  ))}
                </g>
              </svg>
            </div>

            <div className="graph-facts-grid">
              {lesson.graphFundamentals.facts.map((fact) => (
                <article
                  className="graph-fact-card"
                  key={fact.label}
                >
                  <div className="graph-fact-heading">
                    <h3>{fact.label}</h3>
                    <span>{fact.value}</span>
                  </div>

                  <p>{fact.explanation}</p>
                </article>
              ))}
            </div>

            <div className="key-idea">
              <strong>Remember:</strong>
              <p>{lesson.graphFundamentals.keyIdea}</p>
            </div>
          </section>
        )}
        {lesson.graphTypes && (
  <section className="lesson-section">
    <p className="section-label">Graph Types</p>
    <h2>{lesson.graphTypes.title}</h2>

    <p className="lesson-body">
      {lesson.graphTypes.introduction}
    </p>

    <div className="graph-type-grid">
      <article className="graph-type-card">
        <h3>{lesson.graphTypes.undirected.title}</h3>

        <p className="graph-type-rule">
          {lesson.graphTypes.undirected.rule}
        </p>

        <p>{lesson.graphTypes.undirected.explanation}</p>

        <div className="graph-type-visual">
          <svg
            className="graph-type-svg"
            viewBox="0 0 500 380"
            role="img"
            aria-label="Example of an undirected graph"
          >
            <g className="graph-type-edges">
              {lesson.graphTypes.undirected.edges.map((edge) => {
                const start =
                  lesson.graphTypes.undirected.vertices.find(
                    (vertex) => vertex.id === edge.from
                  )

                const end =
                  lesson.graphTypes.undirected.vertices.find(
                    (vertex) => vertex.id === edge.to
                  )

                if (!start || !end) {
                  return null
                }

                return (
                  <line
                    key={`${edge.from}-${edge.to}`}
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                  />
                )
              })}
            </g>

            <g className="graph-type-vertices">
              {lesson.graphTypes.undirected.vertices.map((vertex) => (
                <g key={vertex.id}>
                  <circle
                    cx={vertex.x}
                    cy={vertex.y}
                    r="46"
                  />

                  <text
                    x={vertex.x}
                    y={vertex.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {vertex.id}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>

        <h4>Examples</h4>

        <ul className="graph-type-examples">
          {lesson.graphTypes.undirected.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </article>

      <article className="graph-type-card directed">
        <h3>{lesson.graphTypes.directed.title}</h3>

        <p className="graph-type-rule">
          {lesson.graphTypes.directed.rule}
        </p>

        <p>{lesson.graphTypes.directed.explanation}</p>

        <div className="graph-type-visual">
          <svg
            className="graph-type-svg"
            viewBox="0 0 500 380"
            role="img"
            aria-label="Example of a directed graph"
          >
            <defs>
              <marker
                id="graph-arrowhead"
                markerWidth="12"
                markerHeight="12"
                refX="10"
                refY="6"
                orient="auto"
                markerUnits="userSpaceOnUse"
              >
                <path d="M 0 0 L 12 6 L 0 12 z" />
              </marker>
            </defs>

            <g className="graph-type-edges directed">
              {lesson.graphTypes.directed.edges.map((edge) => {
                const start =
                  lesson.graphTypes.directed.vertices.find(
                    (vertex) => vertex.id === edge.from
                  )

                const end =
                  lesson.graphTypes.directed.vertices.find(
                    (vertex) => vertex.id === edge.to
                  )

                if (!start || !end) {
                  return null
                }

                const dx = end.x - start.x
                const dy = end.y - start.y
                const length = Math.hypot(dx, dy)
                const nodeRadius = 52

                const shortenedEndX =
                  end.x - (dx / length) * nodeRadius

                const shortenedEndY =
                  end.y - (dy / length) * nodeRadius

                return (
                  <line
                    key={`${edge.from}-${edge.to}`}
                    x1={start.x}
                    y1={start.y}
                    x2={shortenedEndX}
                    y2={shortenedEndY}
                    markerEnd="url(#graph-arrowhead)"
                  />
                )
              })}
            </g>

            <g className="graph-type-vertices directed">
              {lesson.graphTypes.directed.vertices.map((vertex) => (
                <g key={vertex.id}>
                  <circle
                    cx={vertex.x}
                    cy={vertex.y}
                    r="46"
                  />

                  <text
                    x={vertex.x}
                    y={vertex.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {vertex.id}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>

        <h4>Examples</h4>

        <ul className="graph-type-examples">
          {lesson.graphTypes.directed.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </article>
    </div>

    <div className="key-idea">
      <strong>Remember:</strong>
      <p>{lesson.graphTypes.keyIdea}</p>
    </div>
  </section>
)}
{lesson.graphWeights && (
  <section className="lesson-section">
    <p className="section-label">Graph Weights</p>
    <h2>{lesson.graphWeights.title}</h2>

    <p className="lesson-body">
      {lesson.graphWeights.introduction}
    </p>

    <div className="graph-weight-grid">
      <article className="graph-weight-card">
        <h3>{lesson.graphWeights.unweighted.title}</h3>

        <p className="graph-weight-rule">
          {lesson.graphWeights.unweighted.rule}
        </p>

        <p>{lesson.graphWeights.unweighted.explanation}</p>

        <div className="graph-weight-visual">
          <svg
            className="graph-weight-svg"
            viewBox="0 0 500 380"
            role="img"
            aria-label="Example of an unweighted graph"
          >
            <g className="graph-weight-edges">
              {lesson.graphWeights.unweighted.edges.map((edge) => {
                const start =
                  lesson.graphWeights.unweighted.vertices.find(
                    (vertex) => vertex.id === edge.from
                  )

                const end =
                  lesson.graphWeights.unweighted.vertices.find(
                    (vertex) => vertex.id === edge.to
                  )

                if (!start || !end) {
                  return null
                }

                return (
                  <line
                    key={`${edge.from}-${edge.to}`}
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                  />
                )
              })}
            </g>

            <g className="graph-weight-vertices">
              {lesson.graphWeights.unweighted.vertices.map((vertex) => (
                <g key={vertex.id}>
                  <circle
                    cx={vertex.x}
                    cy={vertex.y}
                    r="46"
                  />

                  <text
                    x={vertex.x}
                    y={vertex.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {vertex.id}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>

        <h4>Examples</h4>

        <ul className="graph-weight-examples">
          {lesson.graphWeights.unweighted.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </article>

      <article className="graph-weight-card weighted">
        <h3>{lesson.graphWeights.weighted.title}</h3>

        <p className="graph-weight-rule">
          {lesson.graphWeights.weighted.rule}
        </p>

        <p>{lesson.graphWeights.weighted.explanation}</p>

        <div className="graph-weight-visual">
          <svg
            className="graph-weight-svg"
            viewBox="0 0 500 380"
            role="img"
            aria-label="Example of a weighted graph"
          >
            <g className="graph-weight-edges weighted">
              {lesson.graphWeights.weighted.edges.map((edge) => {
                const start =
                  lesson.graphWeights.weighted.vertices.find(
                    (vertex) => vertex.id === edge.from
                  )

                const end =
                  lesson.graphWeights.weighted.vertices.find(
                    (vertex) => vertex.id === edge.to
                  )

                if (!start || !end) {
                  return null
                }

                const middleX = (start.x + end.x) / 2
                const middleY = (start.y + end.y) / 2

                return (
                  <g key={`${edge.from}-${edge.to}`}>
                    <line
                      x1={start.x}
                      y1={start.y}
                      x2={end.x}
                      y2={end.y}
                    />

                    <circle
                      className="graph-weight-label-background"
                      cx={middleX}
                      cy={middleY}
                      r="25"
                    />

                    <text
                      className="graph-edge-weight"
                      x={middleX}
                      y={middleY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {edge.weight}
                    </text>
                  </g>
                )
              })}
            </g>

            <g className="graph-weight-vertices weighted">
              {lesson.graphWeights.weighted.vertices.map((vertex) => (
                <g key={vertex.id}>
                  <circle
                    cx={vertex.x}
                    cy={vertex.y}
                    r="46"
                  />

                  <text
                    x={vertex.x}
                    y={vertex.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {vertex.id}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>

        <h4>Examples</h4>

        <ul className="graph-weight-examples">
          {lesson.graphWeights.weighted.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </article>
    </div>

    <div className="path-cost-comparison">
      <h3>{lesson.graphWeights.pathComparison.title}</h3>

      <div className="path-cost-grid">
        {lesson.graphWeights.pathComparison.paths.map((path) => (
          <article className="path-cost-card" key={path.path}>
            <strong>{path.path}</strong>
            <code>{path.calculation}</code>
            <span>Total weight: {path.total}</span>
          </article>
        ))}
      </div>

      <p>{lesson.graphWeights.pathComparison.explanation}</p>
    </div>

    <div className="key-idea">
      <strong>Remember:</strong>
      <p>{lesson.graphWeights.keyIdea}</p>
    </div>
  </section>
)}
{lesson.graphRepresentations && (
  <section className="lesson-section graph-representations-section">
    <p className="section-label">Graph Representation</p>
    <h2>{lesson.graphRepresentations.title}</h2>

    <p className="lesson-body">
      {lesson.graphRepresentations.introduction}
    </p>

    <div className="graph-representation-grid">
      <article className="graph-representation-card">
        <h3>{lesson.graphRepresentations.adjacencyList.title}</h3>

        <p>
          {lesson.graphRepresentations.adjacencyList.explanation}
        </p>

        <h4>Python Example</h4>

        <pre className="python-code">
          <code>
            {lesson.graphRepresentations.adjacencyList.code}
          </code>
        </pre>

        <h4>Neighbor Lists</h4>

        <div className="adjacency-list-rows">
          {lesson.graphRepresentations.adjacencyList.rows.map((row) => (
            <div className="adjacency-list-row" key={row.vertex}>
              <span className="adjacency-vertex">{row.vertex}</span>
              <span className="adjacency-arrow">→</span>
              <span className="adjacency-neighbors">
                {row.neighbors.join(', ')}
              </span>
            </div>
          ))}
        </div>

        <div className="representation-summary">
          <div>
            <span>Space Complexity</span>
            <strong>
              {lesson.graphRepresentations.adjacencyList.spaceComplexity}
            </strong>
          </div>

          <p>
            <strong>Best for:</strong>{' '}
            {lesson.graphRepresentations.adjacencyList.bestFor}
          </p>
        </div>
      </article>

      <article className="graph-representation-card">
        <h3>{lesson.graphRepresentations.adjacencyMatrix.title}</h3>

        <p>
          {lesson.graphRepresentations.adjacencyMatrix.explanation}
        </p>

        <h4>Adjacency Matrix</h4>

        <div className="adjacency-matrix-wrapper">
          <table className="adjacency-matrix">
            <thead>
              <tr>
                <th></th>

                {lesson.graphRepresentations.adjacencyMatrix.headers.map(
                  (header) => (
                    <th key={header}>{header}</th>
                  ),
                )}
              </tr>
            </thead>

            <tbody>
              {lesson.graphRepresentations.adjacencyMatrix.rows.map((row) => (
                <tr key={row.vertex}>
                  <th>{row.vertex}</th>

                  {row.values.map((value, index) => (
                    <td key={`${row.vertex}-${index}`}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="representation-summary">
          <div>
            <span>Space Complexity</span>
            <strong>
              {lesson.graphRepresentations.adjacencyMatrix.spaceComplexity}
            </strong>
          </div>

          <p>
            <strong>Best for:</strong>{' '}
            {lesson.graphRepresentations.adjacencyMatrix.bestFor}
          </p>
        </div>
      </article>
    </div>

    <div className="representation-comparison">
      <h3>Adjacency List vs. Adjacency Matrix</h3>

      <div className="representation-table-wrapper">
        <table className="representation-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Adjacency List</th>
              <th>Adjacency Matrix</th>
            </tr>
          </thead>

          <tbody>
            {lesson.graphRepresentations.comparison.map((row) => (
              <tr key={row.feature}>
                <th>{row.feature}</th>
                <td>{row.adjacencyList}</td>
                <td>{row.adjacencyMatrix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="graph-notation">
      <h3>Understanding V and E</h3>
      <p>{lesson.graphRepresentations.notation.vertices}</p>
      <p>{lesson.graphRepresentations.notation.edges}</p>
    </div>

    <div className="key-idea">
      <strong>Remember:</strong>
      <p>{lesson.graphRepresentations.keyIdea}</p>
    </div>
  </section>
)}
{lesson.breadthFirstSearch && (
  <section className="lesson-section bfs-section">
    <p className="section-label">Graph Traversal</p>
    <h2>{lesson.breadthFirstSearch.title}</h2>

    <p className="lesson-body">
      {lesson.breadthFirstSearch.introduction}
    </p>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.breadthFirstSearch.keyIdea}</p>
    </div>

    <div className="bfs-code-section">
      <h3>Python Example</h3>

      <pre className="python-code">
        <code>{lesson.breadthFirstSearch.code}</code>
      </pre>
    </div>

    <div className="bfs-explanation-section">
      <h3>Line-by-Line Explanation</h3>

      <div className="code-explanations">
        {lesson.breadthFirstSearch.lineByLine.map((item) => (
          <div className="code-explanation" key={item.line}>
            <code>{item.line}</code>
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bfs-trace-section">
      <h3>
        BFS Trace: Start at {lesson.breadthFirstSearch.start}
      </h3>

      <div className="bfs-trace-grid">
        {lesson.breadthFirstSearch.trace.map((step) => (
          <article className="bfs-trace-card" key={step.step}>
            <p className="section-label">Step {step.step}</p>

            <div className="bfs-current">
              <span>Current vertex</span>
              <strong>{step.current}</strong>
            </div>

            <div className="bfs-trace-state">
              <div>
                <span>Queue</span>
                <p>
                  {step.queue.length > 0
                    ? step.queue.join(' → ')
                    : 'Empty'}
                </p>
              </div>

              <div>
                <span>Visited</span>
                <p>{step.visited.join(', ')}</p>
              </div>
            </div>

            <p>{step.message}</p>
          </article>
        ))}
      </div>
    </div>

    <div className="bfs-order">
      <p className="section-label">Traversal Order</p>

      <div className="bfs-order-row">
        {lesson.breadthFirstSearch.order.map((vertex, index) => (
          <div className="bfs-order-item" key={vertex}>
            <span className="bfs-order-vertex">{vertex}</span>

            {index < lesson.breadthFirstSearch.order.length - 1 && (
              <span className="bfs-order-arrow">→</span>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="bfs-complexity">
      <h3>BFS Complexity</h3>

      <div className="bfs-complexity-grid">
        <article>
          <span>Time Complexity</span>
          <strong>
            {lesson.breadthFirstSearch.complexity.time}
          </strong>
        </article>

        <article>
          <span>Space Complexity</span>
          <strong>
            {lesson.breadthFirstSearch.complexity.space}
          </strong>
        </article>
      </div>

      <p>{lesson.breadthFirstSearch.complexity.explanation}</p>
    </div>

    <div className="key-idea">
      <strong>Shortest-path connection:</strong>
      <p>{lesson.breadthFirstSearch.shortestPathNote}</p>
    </div>
  </section>
)}
{lesson.depthFirstSearch && (
  <section className="lesson-section dfs-section">
    <p className="section-label">Graph Traversal</p>
    <h2>{lesson.depthFirstSearch.title}</h2>

    <p className="lesson-body">
      {lesson.depthFirstSearch.introduction}
    </p>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.depthFirstSearch.keyIdea}</p>
    </div>

    <div className="dfs-code-section">
      <h3>Python Example</h3>

      <pre className="python-code">
        <code>{lesson.depthFirstSearch.code}</code>
      </pre>
    </div>

    <div className="dfs-explanation-section">
      <h3>Line-by-Line Explanation</h3>

      <div className="code-explanations">
        {lesson.depthFirstSearch.lineByLine.map((item) => (
          <div className="code-explanation" key={item.line}>
            <code>{item.line}</code>
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="dfs-trace-section">
      <h3>
        DFS Trace: Start at {lesson.depthFirstSearch.start}
      </h3>

      <div className="dfs-trace-grid">
        {lesson.depthFirstSearch.trace.map((step) => (
          <article className="dfs-trace-card" key={step.step}>
            <p className="section-label">Step {step.step}</p>

            <div className="dfs-current">
              <span>Current vertex</span>
              <strong>{step.current}</strong>
            </div>

            <div className="dfs-trace-state">
              <div>
                <span>Current path</span>
                <p>{step.path.join(' → ')}</p>
              </div>

              <div>
                <span>Visited</span>
                <p>{step.visited.join(', ')}</p>
              </div>
            </div>

            <p>{step.message}</p>
          </article>
        ))}
      </div>
    </div>

    <div className="dfs-order">
      <p className="section-label">Traversal Order</p>

      <div className="dfs-order-row">
        {lesson.depthFirstSearch.order.map((vertex, index) => (
          <div className="dfs-order-item" key={vertex}>
            <span className="dfs-order-vertex">{vertex}</span>

            {index < lesson.depthFirstSearch.order.length - 1 && (
              <span className="dfs-order-arrow">→</span>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="dfs-complexity">
      <h3>DFS Complexity</h3>

      <div className="dfs-complexity-grid">
        <article>
          <span>Time Complexity</span>
          <strong>{lesson.depthFirstSearch.complexity.time}</strong>
        </article>

        <article>
          <span>Space Complexity</span>
          <strong>{lesson.depthFirstSearch.complexity.space}</strong>
        </article>
      </div>

      <p>{lesson.depthFirstSearch.complexity.explanation}</p>
    </div>

    <div className="key-idea">
      <strong>Backtracking:</strong>
      <p>{lesson.depthFirstSearch.backtrackingNote}</p>
    </div>
  </section>
)}
{lesson.topologicalSort && (
  <section className="lesson-section topological-section">
    <p className="section-label">Directed Acyclic Graphs</p>
    <h2>{lesson.topologicalSort.title}</h2>

    <p className="lesson-body">
      {lesson.topologicalSort.introduction}
    </p>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.topologicalSort.keyIdea}</p>
    </div>

    <div className="topological-dependencies">
      <h3>Graph Dependencies</h3>

      <div className="topological-edge-grid">
        {lesson.topologicalSort.edges.map((edge) => (
          <article
            className="topological-edge-card"
            key={`${edge.from}-${edge.to}`}
          >
            <span className="topological-vertex">{edge.from}</span>
            <span className="topological-arrow">→</span>
            <span className="topological-vertex">{edge.to}</span>
          </article>
        ))}
      </div>
    </div>

    <div className="topological-code-section">
      <h3>Python Example</h3>

      <pre className="python-code">
        <code>{lesson.topologicalSort.code}</code>
      </pre>
    </div>

    <div className="topological-explanation-section">
      <h3>Line-by-Line Explanation</h3>

      <div className="code-explanations">
        {lesson.topologicalSort.lineByLine.map((item) => (
          <div className="code-explanation" key={item.line}>
            <code>{item.line}</code>
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="topological-indegree-section">
      <h3>Initial In-Degree Counts</h3>

      <p className="lesson-body">
        In-degree counts how many directed edges enter each vertex.
        Vertices with an in-degree of 0 have no remaining prerequisites.
      </p>

      <div className="topological-indegree-grid">
        {lesson.topologicalSort.initialIndegree.map((item) => (
          <article
            className="topological-indegree-card"
            key={item.vertex}
          >
            <span>Vertex</span>
            <strong>{item.vertex}</strong>
            <p>In-degree: {item.indegree}</p>
          </article>
        ))}
      </div>
    </div>

    <div className="topological-trace-section">
      <h3>Topological Sort Trace</h3>

      <div className="topological-trace-grid">
        {lesson.topologicalSort.trace.map((step) => (
          <article
            className="topological-trace-card"
            key={step.step}
          >
            <p className="section-label">Step {step.step}</p>

            <div className="topological-current">
              <span>Current vertex</span>
              <strong>{step.current}</strong>
            </div>

            <div className="topological-trace-state">
              <div>
                <span>Queue</span>
                <p>
                  {step.queue.length > 0
                    ? step.queue.join(' → ')
                    : 'Empty'}
                </p>
              </div>

              <div>
                <span>Current order</span>
                <p>{step.order.join(' → ')}</p>
              </div>
            </div>

            <p>{step.message}</p>
          </article>
        ))}
      </div>
    </div>

    <div className="topological-order">
      <p className="section-label">Topological Order</p>

      <div className="topological-order-row">
        {lesson.topologicalSort.order.map((vertex, index) => (
          <div className="topological-order-item" key={vertex}>
            <span className="topological-order-vertex">
              {vertex}
            </span>

            {index < lesson.topologicalSort.order.length - 1 && (
              <span className="topological-order-arrow">→</span>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="topological-complexity">
      <h3>Topological Sort Complexity</h3>

      <div className="topological-complexity-grid">
        <article>
          <span>Time Complexity</span>
          <strong>
            {lesson.topologicalSort.complexity.time}
          </strong>
        </article>

        <article>
          <span>Space Complexity</span>
          <strong>
            {lesson.topologicalSort.complexity.space}
          </strong>
        </article>
      </div>

      <p>{lesson.topologicalSort.complexity.explanation}</p>
    </div>

    <div className="key-idea">
      <strong>Cycle detection:</strong>
      <p>{lesson.topologicalSort.cycleNote}</p>
    </div>

    <div className="key-idea">
      <strong>Real-world applications:</strong>
      <p>{lesson.topologicalSort.applicationNote}</p>
    </div>
  </section>
)}
{lesson.dijkstra && (
  <section className="lesson-section dijkstra-section">
    <p className="section-label">Shortest Paths</p>
    <h2>{lesson.dijkstra.title}</h2>

    <p className="lesson-body">
      {lesson.dijkstra.introduction}
    </p>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.dijkstra.keyIdea}</p>
    </div>

    <div className="dijkstra-warning">
      <strong>Important:</strong>
      <p>{lesson.dijkstra.warning}</p>
    </div>

    <div className="dijkstra-graph-wrapper">
      <svg
        className="dijkstra-graph"
        viewBox="0 0 680 390"
        role="img"
        aria-label="Weighted graph used in the Dijkstra example"
      >
        {lesson.dijkstra.edges.map((edge) => {
          const from = lesson.dijkstra.vertices.find(
            (vertex) => vertex.id === edge.from
          )

          const to = lesson.dijkstra.vertices.find(
            (vertex) => vertex.id === edge.to
          )

          const middleX = (from.x + to.x) / 2
          const middleY = (from.y + to.y) / 2

          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line
                className="dijkstra-edge"
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
              />

              <circle
                className="dijkstra-weight-background"
                cx={middleX}
                cy={middleY}
                r="18"
              />

              <text
                className="dijkstra-weight"
                x={middleX}
                y={middleY}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {edge.weight}
              </text>
            </g>
          )
        })}

        {lesson.dijkstra.vertices.map((vertex) => (
          <g key={vertex.id}>
            <circle
              className={
                vertex.id === lesson.dijkstra.start
                  ? 'dijkstra-vertex dijkstra-start-vertex'
                  : 'dijkstra-vertex'
              }
              cx={vertex.x}
              cy={vertex.y}
              r="38"
            />

            <text
              className="dijkstra-vertex-label"
              x={vertex.x}
              y={vertex.y}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {vertex.id}
            </text>
          </g>
        ))}
      </svg>
    </div>

    <div className="dijkstra-code-section">
      <h3>Python Example</h3>

      <pre className="python-code">
        <code>{lesson.dijkstra.code}</code>
      </pre>
    </div>

    <div className="dijkstra-explanation-section">
      <h3>Line-by-Line Explanation</h3>

      <div className="code-explanations">
        {lesson.dijkstra.lineByLine.map((item) => (
          <div className="code-explanation" key={item.line}>
            <code>{item.line}</code>
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="dijkstra-trace-section">
      <h3>
        Dijkstra Trace: Start at {lesson.dijkstra.start}
      </h3>

      <div className="dijkstra-trace-grid">
        {lesson.dijkstra.trace.map((step) => (
          <article className="dijkstra-trace-card" key={step.step}>
            <p className="section-label">Step {step.step}</p>

            <div className="dijkstra-current">
              <span>Current vertex</span>
              <strong>{step.current}</strong>
            </div>

            <div className="dijkstra-distance-grid">
              {Object.entries(step.distances).map(
                ([vertex, distance]) => (
                  <div
                    className={
                      vertex === step.current
                        ? 'dijkstra-distance active'
                        : 'dijkstra-distance'
                    }
                    key={vertex}
                  >
                    <span>{vertex}</span>
                    <strong>{distance}</strong>
                  </div>
                )
              )}
            </div>

            <p className="dijkstra-visited">
              <strong>Visited:</strong> {step.visited.join(', ')}
            </p>

            <p>{step.message}</p>
          </article>
        ))}
      </div>
    </div>

    <div className="dijkstra-results">
      <h3>
        Final Shortest Paths from {lesson.dijkstra.start}
      </h3>

      <div className="dijkstra-results-wrapper">
        <table className="dijkstra-results-table">
          <thead>
            <tr>
              <th>Vertex</th>
              <th>Distance</th>
              <th>Shortest path</th>
            </tr>
          </thead>

          <tbody>
            {lesson.dijkstra.shortestPaths.map((result) => (
              <tr key={result.vertex}>
                <td>{result.vertex}</td>
                <td>{result.distance}</td>
                <td>{result.path}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="dijkstra-complexity">
      <h3>Dijkstra Complexity</h3>

      <div className="dijkstra-complexity-grid">
        <article>
          <span>Time Complexity</span>
          <strong>{lesson.dijkstra.complexity.time}</strong>
        </article>

        <article>
          <span>Space Complexity</span>
          <strong>{lesson.dijkstra.complexity.space}</strong>
        </article>
      </div>

      <p>{lesson.dijkstra.complexity.explanation}</p>
    </div>
  </section>
)}
{lesson.minimumSpanningTrees && (
  <section className="lesson-section mst-section">
    <p className="section-label">Minimum Spanning Trees</p>
    <h2>{lesson.minimumSpanningTrees.title}</h2>

    <p className="lesson-body">
      {lesson.minimumSpanningTrees.introduction}
    </p>

    <div className="mst-requirements">
      {lesson.minimumSpanningTrees.requirements.map((requirement) => (
        <div className="mst-requirement" key={requirement}>
          <span>✓</span>
          <p>{requirement}</p>
        </div>
      ))}
    </div>

    <div className="mst-edge-table-wrapper">
      <h3>Available Edges</h3>

      <table className="mst-edge-table">
        <thead>
          <tr>
            <th>Edge</th>
            <th>Weight</th>
          </tr>
        </thead>

        <tbody>
          {lesson.minimumSpanningTrees.edges.map((edge) => (
            <tr key={`${edge.from}-${edge.to}`}>
              <td>
                {edge.from} — {edge.to}
              </td>
              <td>{edge.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="mst-algorithm-grid">
      <article className="mst-algorithm-card prim-card">
        <p className="section-label">Grow One Tree</p>
        <h3>{lesson.minimumSpanningTrees.prim.title}</h3>

        <p>{lesson.minimumSpanningTrees.prim.strategy}</p>

        <div className="mst-start">
          Starting vertex:
          <strong>{lesson.minimumSpanningTrees.prim.start}</strong>
        </div>

        <div className="mst-steps">
          {lesson.minimumSpanningTrees.prim.steps.map((step) => (
            <div className="mst-step" key={`prim-${step.step}`}>
              <div className="mst-step-heading">
                <span>Step {step.step}</span>
                <strong>{step.edge}</strong>
                <b>Weight {step.weight}</b>
              </div>

              <p>{step.message}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="mst-algorithm-card kruskal-card">
        <p className="section-label">Join Components</p>
        <h3>{lesson.minimumSpanningTrees.kruskal.title}</h3>

        <p>{lesson.minimumSpanningTrees.kruskal.strategy}</p>

        <div className="mst-steps">
          {lesson.minimumSpanningTrees.kruskal.steps.map((step) => (
            <div
              className={`mst-step ${
                step.decision === 'Reject' ? 'mst-step-rejected' : ''
              }`}
              key={`kruskal-${step.step}`}
            >
              <div className="mst-step-heading">
                <span>Step {step.step}</span>
                <strong>{step.edge}</strong>
                <b>Weight {step.weight}</b>
              </div>

              <span
                className={`mst-decision ${
                  step.decision === 'Accept'
                    ? 'mst-decision-accept'
                    : 'mst-decision-reject'
                }`}
              >
                {step.decision}
              </span>

              <p>{step.message}</p>
            </div>
          ))}
        </div>
      </article>
    </div>

    <div className="mst-result">
      <p className="section-label">Minimum Spanning Tree Result</p>

      <div className="mst-result-edges">
        {lesson.minimumSpanningTrees.result.edges.map((edge, index) => (
          <div className="mst-result-edge" key={edge}>
            <span>{edge}</span>

            {index <
              lesson.minimumSpanningTrees.result.edges.length - 1 && (
              <span className="mst-result-plus">+</span>
            )}
          </div>
        ))}
      </div>

      <div className="mst-total">
        <span>Total Weight</span>
        <strong>{lesson.minimumSpanningTrees.result.totalWeight}</strong>
      </div>
    </div>

    <div className="mst-comparison-wrapper">
      <h3>Prim’s vs. Kruskal’s</h3>

      <div className="table-scroll">
        <table className="mst-comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Prim’s</th>
              <th>Kruskal’s</th>
            </tr>
          </thead>

          <tbody>
            {lesson.minimumSpanningTrees.comparison.map((row) => (
              <tr key={row.feature}>
                <th>{row.feature}</th>
                <td>{row.prim}</td>
                <td>{row.kruskal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="mst-complexity">
      <h3>MST Complexity</h3>

      <div className="mst-complexity-grid">
        <article>
          <span>Prim’s Algorithm</span>
          <strong>{lesson.minimumSpanningTrees.complexity.prim}</strong>
        </article>

        <article>
          <span>Kruskal’s Algorithm</span>
          <strong>{lesson.minimumSpanningTrees.complexity.kruskal}</strong>
        </article>
      </div>

      <p>{lesson.minimumSpanningTrees.complexity.explanation}</p>
    </div>

    <div className="key-idea">
      <strong>Remember:</strong>
      <p>{lesson.minimumSpanningTrees.keyIdea}</p>
    </div>
  </section>
)}

        {lesson.treeAnatomy && (
  <section className="lesson-section tree-anatomy-section">
    <p className="section-label">Tree Fundamentals</p>

    <h2>{lesson.treeAnatomy.title}</h2>

    <p className="lesson-body">
      {lesson.treeAnatomy.introduction}
    </p>

    <div className="tree-visual">

    <svg
  className="tree-branches"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  <line x1="50" y1="13" x2="35" y2="50" />
  <line x1="50" y1="13" x2="65" y2="50" />

  <line x1="35" y1="50" x2="20" y2="87" />
  <line x1="35" y1="50" x2="40" y2="87" />

  <line x1="65" y1="50" x2="60" y2="87" />
  <line x1="65" y1="50" x2="80" y2="87" />
</svg>
        
      {lesson.treeAnatomy.example.levels.map((level, levelIndex) => (
        <div
          className={`tree-level tree-level-${levelIndex}`}
          key={levelIndex}
        >
          {level.map((node) => (
            <div className="tree-node" key={node}>
              {node}
            </div>
          ))}
        </div>
      ))}
    </div>

    <div className="tree-relationships">
      {lesson.treeAnatomy.relationships.map((relationship) => (
        <article
          className="tree-relationship-card"
          key={relationship.label}
        >
          <div className="tree-relationship-heading">
            <h3>{relationship.label}</h3>
            <span>{relationship.example}</span>
          </div>

          <p>{relationship.explanation}</p>
        </article>
      ))}
    </div>

    <div className="tree-measurements">
      <article className="tree-measurement-card">
        <h3>{lesson.treeAnatomy.depthExample.title}</h3>

        <p>{lesson.treeAnatomy.depthExample.explanation}</p>

        <div className="depth-list">
          {lesson.treeAnatomy.depthExample.rows.map((row) => (
            <div className="depth-row" key={row.node}>
              <span className="depth-node">Node {row.node}</span>

              <span className="depth-badge">
                Depth {row.depth}
              </span>

              <p>{row.reason}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="tree-measurement-card">
        <h3>{lesson.treeAnatomy.heightExample.title}</h3>

        <p>{lesson.treeAnatomy.heightExample.explanation}</p>

        <div className="height-result">
          <span>Tree Height</span>

          <strong>
            {lesson.treeAnatomy.heightExample.treeHeight}
          </strong>
        </div>

        <p>{lesson.treeAnatomy.heightExample.reason}</p>
      </article>
    </div>
  </section>
)}

{lesson.binaryTreeComparison && (
  <section className="lesson-section binary-tree-section">
    <p className="section-label">
      Tree Types
    </p>

    <h2>{lesson.binaryTreeComparison.title}</h2>

    <p className="lesson-body">
      {lesson.binaryTreeComparison.introduction}
    </p>

    <div className="binary-tree-comparison">
      {[
        lesson.binaryTreeComparison.binaryTree,
        lesson.binaryTreeComparison.binarySearchTree
      ].map((tree, index) => (
        <article
          className="binary-tree-card"
          key={tree.title}
        >
          <div className="binary-tree-card-heading">
            <h3>{tree.title}</h3>

            <span
              className={
                index === 0
                  ? 'tree-type-badge'
                  : 'tree-type-badge bst-badge'
              }
            >
              {index === 0
                ? 'Shape Rule'
                : 'Ordering Rule'}
            </span>
          </div>

          <p className="binary-tree-rule">
            {tree.rule}
          </p>

          <p className="binary-tree-explanation">
            {tree.explanation}
          </p>

          <div className="mini-tree-visual">
            <svg
              className="mini-tree-branches"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line x1="50" y1="13" x2="35" y2="50" />
              <line x1="50" y1="13" x2="65" y2="50" />

              <line x1="35" y1="50" x2="20" y2="87" />
              <line x1="35" y1="50" x2="40" y2="87" />

              <line x1="65" y1="50" x2="60" y2="87" />
              <line x1="65" y1="50" x2="80" y2="87" />
            </svg>

            {tree.levels.map((level, levelIndex) => (
              <div
                className={`mini-tree-level mini-tree-level-${levelIndex}`}
                key={levelIndex}
              >
                {level.map((node) => (
                  <span
                    className="mini-tree-node"
                    key={node}
                  >
                    {node}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>

    <div className="bst-rules">
      <h3>BST Ordering Rules</h3>

      {lesson.binaryTreeComparison.rules.map((rule) => (
        <div className="bst-rule" key={rule.label}>
          <strong>{rule.label}</strong>
          <p>{rule.description}</p>
        </div>
      ))}
    </div>

    <div className="key-idea">
      <strong>Remember:</strong>

      <p>
        {lesson.binaryTreeComparison.keyIdea}
      </p>
    </div>
  </section>
)}
{lesson.bstPython && (
  <section className="lesson-section bst-python-section">
    <p className="section-label">
      Python Implementation
    </p>

    <h2>{lesson.bstPython.title}</h2>

    <p className="lesson-body">
      {lesson.bstPython.introduction}
    </p>

    <div className="bst-python-block">
      <h3>{lesson.bstPython.nodeClass.title}</h3>

      <pre className="python-code">
        <code>{lesson.bstPython.nodeClass.code}</code>
      </pre>

      <h4>Line-by-Line Explanation</h4>

      <div className="code-explanations">
        {lesson.bstPython.nodeClass.lineByLine.map((item) => (
          <div
            className="code-explanation"
            key={item.line}
          >
            <code>{item.line}</code>
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bst-python-block">
      <h3>{lesson.bstPython.search.title}</h3>

      <p className="bst-python-description">
        {lesson.bstPython.search.explanation}
      </p>

      <pre className="python-code">
        <code>{lesson.bstPython.search.code}</code>
      </pre>

      <h4>Line-by-Line Explanation</h4>

      <div className="code-explanations">
        {lesson.bstPython.search.lineByLine.map((item) => (
          <div
            className="code-explanation"
            key={item.line}
          >
            <code>{item.line}</code>
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>

      <h4>
        Search Trace: Find {lesson.bstPython.search.target}
      </h4>

      <div className="bst-search-trace">
        {lesson.bstPython.search.trace.map((step, index) => (
          <div
            className="bst-search-step"
            key={step.node}
          >
            <span className="bst-search-step-number">
              Step {index + 1}
            </span>

            <div className="bst-search-node">
              {step.node}
            </div>

            <p>{step.decision}</p>

            {index !== lesson.bstPython.search.trace.length - 1 && (
              <span className="bst-search-arrow">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="bst-complexity">
        <h4>Search Complexity</h4>

        <div className="bst-complexity-grid">
          <div className="bst-complexity-card">
            <span>Balanced BST</span>
            <strong>
              {lesson.bstPython.search.complexity.balanced}
            </strong>
          </div>

          <div className="bst-complexity-card worst-case">
            <span>Worst Case</span>
            <strong>
              {lesson.bstPython.search.complexity.worst}
            </strong>
          </div>
        </div>

        <p>
          {lesson.bstPython.search.complexity.explanation}
        </p>
      </div>
    </div>
  </section>
)}
{lesson.balanceConcept && (
  <section className="lesson-section balance-section">
    <p className="section-label">
      Balanced Search Trees
    </p>

    <h2>{lesson.balanceConcept.title}</h2>

    <p className="lesson-body">
      {lesson.balanceConcept.introduction}
    </p>

    <div className="balance-comparison">
      <article className="balance-card balanced-card">
        <h3>{lesson.balanceConcept.balanced.title}</h3>

        <p>{lesson.balanceConcept.balanced.explanation}</p>

        <div className="mini-tree-visual balance-tree-visual">
          <svg
            className="mini-tree-branches"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="50" y1="13" x2="35" y2="50" />
            <line x1="50" y1="13" x2="65" y2="50" />
            <line x1="35" y1="50" x2="20" y2="87" />
            <line x1="35" y1="50" x2="40" y2="87" />
            <line x1="65" y1="50" x2="60" y2="87" />
            <line x1="65" y1="50" x2="80" y2="87" />
          </svg>

          {lesson.balanceConcept.balanced.levels.map(
            (level, levelIndex) => (
              <div
                className={`mini-tree-level mini-tree-level-${levelIndex}`}
                key={levelIndex}
              >
                {level.map((node) => (
                  <span className="mini-tree-node" key={node}>
                    {node}
                  </span>
                ))}
              </div>
            )
          )}
        </div>

        <div className="balance-stats">
          <div>
            <span>Height</span>
            <strong>{lesson.balanceConcept.balanced.height}</strong>
          </div>

          <div>
            <span>Search</span>
            <strong>
              {lesson.balanceConcept.balanced.searchComplexity}
            </strong>
          </div>
        </div>

        <p className="balance-reason">
          {lesson.balanceConcept.balanced.reason}
        </p>
      </article>

      <article className="balance-card unbalanced-card">
        <h3>{lesson.balanceConcept.unbalanced.title}</h3>

        <p>{lesson.balanceConcept.unbalanced.explanation}</p>

        <p className="insertion-order">
          <strong>Insertion order:</strong>{' '}
          {lesson.balanceConcept.unbalanced.insertionOrder.join(', ')}
        </p>

        <div className="unbalanced-tree-visual">
          {lesson.balanceConcept.unbalanced.path.map(
            (node, index) => (
              <div className="unbalanced-tree-step" key={node}>
                <span className="unbalanced-tree-node">
                  {node}
                </span>

                {index !==
                  lesson.balanceConcept.unbalanced.path.length - 1 && (
                  <span className="unbalanced-tree-arrow">↓</span>
                )}
              </div>
            )
          )}
        </div>

        <div className="balance-stats">
          <div>
            <span>Height</span>
            <strong>{lesson.balanceConcept.unbalanced.height}</strong>
          </div>

          <div>
            <span>Search</span>
            <strong>
              {lesson.balanceConcept.unbalanced.searchComplexity}
            </strong>
          </div>
        </div>

        <p className="balance-reason">
          {lesson.balanceConcept.unbalanced.reason}
        </p>
      </article>
    </div>

    <h3 className="balance-table-title">
      Balanced vs. Unbalanced
    </h3>

    <div className="balance-table-wrapper">
      <table className="balance-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Balanced BST</th>
            <th>Unbalanced BST</th>
          </tr>
        </thead>

        <tbody>
          {lesson.balanceConcept.comparison.map((row) => (
            <tr key={row.feature}>
              <td>{row.feature}</td>
              <td>{row.balanced}</td>
              <td>{row.unbalanced}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="key-idea">
      <strong>Remember:</strong>
      <p>{lesson.balanceConcept.keyIdea}</p>
    </div>
  </section>
)}
{lesson.selfBalancingTrees && (
  <section className="lesson-section self-balancing-section">
    <p className="section-label">
      Self-Balancing Trees
    </p>

    <h2>{lesson.selfBalancingTrees.title}</h2>

    <p className="lesson-body">
      {lesson.selfBalancingTrees.introduction}
    </p>

    <div className="avl-introduction">
      <h3>{lesson.selfBalancingTrees.avl.title}</h3>

      <p>{lesson.selfBalancingTrees.avl.explanation}</p>

      <div className="balance-factor-box">
        <span>Balance Factor</span>

        <code>
          {lesson.selfBalancingTrees.avl.balanceFactor.formula}
        </code>

        <div className="balance-factor-allowed">
          Allowed: {lesson.selfBalancingTrees.avl.balanceFactor.allowed}
        </div>

        <p>
          {lesson.selfBalancingTrees.avl.balanceFactor.explanation}
        </p>
      </div>
    </div>

    <div className="rotation-section">
      <h3>
        {lesson.selfBalancingTrees.rotationExample.title}
      </h3>

      <p>
        {lesson.selfBalancingTrees.rotationExample.introduction}
      </p>

      <div className="rotation-comparison">
        <article className="rotation-card rotation-before">
          <h4>Before Rotation</h4>

          <p>
            Insertion order:{' '}
            <strong>
              {lesson.selfBalancingTrees.rotationExample.insertionOrder.join(
                ', '
              )}
            </strong>
          </p>

          <div className="rotation-chain">
            {lesson.selfBalancingTrees.rotationExample.before.path.map(
              (node, index) => (
                <div className="rotation-chain-step" key={node}>
                  <span>{node}</span>

                  {index !==
                    lesson.selfBalancingTrees.rotationExample.before.path
                      .length -
                      1 && <span className="rotation-chain-arrow">↓</span>}
                </div>
              )
            )}
          </div>

          <div className="rotation-stats">
            <span>
              Height{' '}
              <strong>
                {lesson.selfBalancingTrees.rotationExample.before.height}
              </strong>
            </span>

            <span>
              Balance Factor{' '}
              <strong>
                {
                  lesson.selfBalancingTrees.rotationExample.before
                    .balanceFactor
                }
              </strong>
            </span>
          </div>
        </article>

        <div className="rotation-action">
          <span>↻</span>
          <strong>
            {lesson.selfBalancingTrees.rotationExample.rotation}
          </strong>
        </div>

        <article className="rotation-card rotation-after">
          <h4>After Rotation</h4>

          <div className="rotation-tree">
            <svg
              className="rotation-tree-branches"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line x1="50" y1="25" x2="30" y2="75" />
              <line x1="50" y1="25" x2="70" y2="75" />
            </svg>

            {lesson.selfBalancingTrees.rotationExample.after.levels.map(
              (level, levelIndex) => (
                <div
                  className={`rotation-tree-level rotation-tree-level-${levelIndex}`}
                  key={levelIndex}
                >
                  {level.map((node) => (
                    <span className="rotation-tree-node" key={node}>
                      {node}
                    </span>
                  ))}
                </div>
              )
            )}
          </div>

          <div className="rotation-stats">
            <span>
              Height{' '}
              <strong>
                {lesson.selfBalancingTrees.rotationExample.after.height}
              </strong>
            </span>

            <span>
              Balanced <strong>✓</strong>
            </span>
          </div>
        </article>
      </div>
    </div>

    <div className="rotation-steps">
      <h3>Step-by-Step</h3>

      <ol>
        {lesson.selfBalancingTrees.rotationExample.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>

    <div className="avl-complexity">
      <h3>AVL Tree Complexity</h3>

      <div className="avl-complexity-grid">
        {lesson.selfBalancingTrees.complexity.map((item) => (
          <div className="avl-complexity-card" key={item.operation}>
            <span>{item.operation}</span>
            <strong>{item.complexity}</strong>
          </div>
        ))}
      </div>
    </div>

    <div className="key-idea">
      <strong>Remember:</strong>
      <p>{lesson.selfBalancingTrees.keyIdea}</p>
    </div>
  </section>
)}

{lesson.heapConcept && (
          <section className="lesson-section">
            <p className="section-label">Heap Fundamentals</p>
            <h2>{lesson.heapConcept.title}</h2>

            <p className="lesson-body">
              {lesson.heapConcept.introduction}
            </p>

            <div className="key-idea">
              <strong>Key idea:</strong>
              <p>{lesson.heapConcept.keyIdea}</p>
            </div>

            <div className="heap-properties">
              {lesson.heapConcept.properties.map((property) => (
                <article className="heap-property-card" key={property.label}>
                  <h3>{property.label}</h3>
                  <p>{property.explanation}</p>
                </article>
              ))}
            </div>

            <div className="heap-type-grid">
              {[
                {
                  ...lesson.heapConcept.minHeap,
                  type: 'min'
                },
                {
                  ...lesson.heapConcept.maxHeap,
                  type: 'max'
                }
              ].map((heap) => (
                <article
                  className={`heap-type-card heap-type-card-${heap.type}`}
                  key={heap.title}
                >
                  <div className="heap-type-heading">
                    <h3>{heap.title}</h3>

                    <span className="heap-root-badge">
                      Root: {heap.rootValue}
                    </span>
                  </div>

                  <p className="heap-rule">{heap.rule}</p>
                  <p>{heap.explanation}</p>

                  <div className="heap-tree-visual">
                    <svg
                      className="heap-tree-lines"
                      viewBox="0 0 600 280"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <line x1="300" y1="45" x2="200" y2="130" />
                      <line x1="300" y1="45" x2="400" y2="130" />

                      <line x1="200" y1="130" x2="75" y2="225" />
                      <line x1="200" y1="130" x2="225" y2="225" />

                      <line x1="400" y1="130" x2="375" y2="225" />
                      <line x1="400" y1="130" x2="525" y2="225" />
                    </svg>

                    {heap.levels.map((level, levelIndex) => (
                      <div
                        className={`heap-tree-level heap-tree-level-${levelIndex}`}
                        key={`${heap.title}-level-${levelIndex}`}
                      >
                        {level.map((value, nodeIndex) => (
                          <span
                            className={`heap-tree-node ${
                              levelIndex === 0 ? 'heap-root-node' : ''
                            }`}
                            key={`${heap.title}-${value}-${nodeIndex}`}
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="heap-comparison">
              <h3>Min-Heap vs. Max-Heap</h3>

              <div className="growth-table-wrapper">
                <table className="growth-table heap-comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Min-Heap</th>
                      <th>Max-Heap</th>
                    </tr>
                  </thead>

                  <tbody>
                    {lesson.heapConcept.comparison.map((row) => (
                      <tr key={row.feature}>
                        <th scope="row">{row.feature}</th>
                        <td>{row.minHeap}</td>
                        <td>{row.maxHeap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="heap-note">
              <strong>Remember:</strong>
              <p>{lesson.heapConcept.note}</p>
            </div>
          </section>
        )}
                {lesson.heapArrayRepresentation && (
          <section className="lesson-section">
            <p className="section-label">Heap Storage</p>
            <h2>{lesson.heapArrayRepresentation.title}</h2>

            <p className="lesson-body">
              {lesson.heapArrayRepresentation.introduction}
            </p>

            <div className="heap-array-wrapper">
              <div className="heap-array">
                {lesson.heapArrayRepresentation.values.map((value, index) => (
                  <div className="heap-array-cell" key={`${value}-${index}`}>
                    <span>Index {index}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="heap-array-table-section">
              <h3>Array Index to Tree Position</h3>

              <div className="growth-table-wrapper">
                <table className="growth-table heap-array-table">
                  <thead>
                    <tr>
                      <th>Array index</th>
                      <th>Stored value</th>
                      <th>Tree relationship</th>
                    </tr>
                  </thead>

                  <tbody>
                    {lesson.heapArrayRepresentation.rows.map((row) => (
                      <tr key={row.index}>
                        <td>{row.index}</td>
                        <td>{row.value}</td>
                        <td>{row.relationship}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="heap-formulas">
              {lesson.heapArrayRepresentation.formulas.map((item) => (
                <article className="heap-formula-card" key={item.label}>
                  <h3>{item.label}</h3>
                  <code>{item.formula}</code>
                  <p>{item.explanation}</p>
                </article>
              ))}
            </div>

            <div className="heap-index-example">
              <p className="section-label">Index Example</p>

              <h3>
                Node {lesson.heapArrayRepresentation.example.value} at index{' '}
                {lesson.heapArrayRepresentation.example.index}
              </h3>

              <div className="heap-index-results">
                <article>
                  <span>Parent</span>
                  <strong>
                    Index {lesson.heapArrayRepresentation.example.parentIndex}
                  </strong>
                  <p>
                    Value {lesson.heapArrayRepresentation.example.parentValue}
                  </p>
                </article>

                <article>
                  <span>Left child</span>
                  <strong>
                    Index{' '}
                    {lesson.heapArrayRepresentation.example.leftChildIndex}
                  </strong>
                  <p>
                    Value{' '}
                    {lesson.heapArrayRepresentation.example.leftChildValue}
                  </p>
                </article>

                <article>
                  <span>Right child</span>
                  <strong>
                    Index{' '}
                    {lesson.heapArrayRepresentation.example.rightChildIndex}
                  </strong>
                  <p>
                    Value{' '}
                    {lesson.heapArrayRepresentation.example.rightChildValue}
                  </p>
                </article>
              </div>
            </div>

            <div className="key-idea">
              <strong>Remember:</strong>
              <p>{lesson.heapArrayRepresentation.keyIdea}</p>
            </div>
          </section>
        )}
                {lesson.heapOperations && (
          <section className="lesson-section">
            <p className="section-label">Heap Operations</p>
            <h2>{lesson.heapOperations.title}</h2>

            <p className="lesson-body">
              {lesson.heapOperations.introduction}
            </p>

            <div className="heap-operation-grid">
              {[
                {
                  ...lesson.heapOperations.insertion,
                  type: 'insertion'
                },
                {
                  ...lesson.heapOperations.removal,
                  type: 'removal'
                }
              ].map((operation) => (
                <article
                  className={`heap-operation-card heap-operation-${operation.type}`}
                  key={operation.type}
                >
                  <div className="heap-operation-heading">
                    <h3>{operation.title}</h3>
                    <span>{operation.complexity}</span>
                  </div>

                  <p>{operation.explanation}</p>

                  <div className="heap-operation-start">
                    <h4>Starting Heap</h4>

                    <div className="heap-operation-array">
                      {operation.startingHeap.map((value, index) => (
                        <span key={`${operation.type}-start-${index}`}>
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h4>Step-by-Step</h4>

                  <div className="heap-operation-steps">
                    {operation.steps.map((step, stepIndex) => (
                      <article
                        className="heap-operation-step"
                        key={step.label}
                      >
                        <div className="heap-operation-step-heading">
                          <span>Step {stepIndex + 1}</span>
                          <h4>{step.label}</h4>
                        </div>

                        <div className="heap-operation-array">
                          {step.heap.map((value, valueIndex) => (
                            <span
                              key={`${step.label}-${valueIndex}`}
                            >
                              {value}
                            </span>
                          ))}
                        </div>

                        <p>{step.explanation}</p>
                      </article>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="heap-operation-complexity">
              <h3>Heap Operation Complexity</h3>

              <div className="heap-operation-complexity-grid">
                {lesson.heapOperations.complexities.map((item) => (
                  <article key={item.operation}>
                    <span>{item.operation}</span>
                    <strong>{item.complexity}</strong>
                  </article>
                ))}
              </div>
            </div>

            <div className="key-idea">
              <strong>Remember:</strong>
              <p>{lesson.heapOperations.keyIdea}</p>
            </div>
          </section>
        )}
        {lesson.pythonHeapq && (
  <section className="lesson-section">
    <p className="section-label">Python Heaps</p>
    <h2>{lesson.pythonHeapq.title}</h2>

    <p className="lesson-body">
      {lesson.pythonHeapq.introduction}
    </p>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.pythonHeapq.keyIdea}</p>
    </div>

    <div className="heapq-example">
      <h3>{lesson.pythonHeapq.example.title}</h3>

      <h4>Python Example</h4>

      <pre className="python-code">
        <code>{lesson.pythonHeapq.example.code}</code>
      </pre>

      <div className="heapq-output">
        <strong>Output</strong>
        <pre>
          <code>{lesson.pythonHeapq.example.output}</code>
        </pre>
      </div>

      <h4>Line-by-Line Explanation</h4>

      <div className="code-explanations">
        {lesson.pythonHeapq.example.lineByLine.map((item) => (
          <div className="code-explanation" key={item.line}>
            <code>{item.line}</code>
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="heapq-operations">
      <h3>Common heapq Operations</h3>

      <div className="heapq-operation-grid">
        {lesson.pythonHeapq.operations.map((item) => (
          <article className="heapq-operation-card" key={item.name}>
            <div className="heapq-operation-heading">
              <h4>{item.name}</h4>
              <span>{item.complexity}</span>
            </div>

            <code>{item.code}</code>
            <p>{item.explanation}</p>
          </article>
        ))}
      </div>
    </div>

    <div className="priority-queue-section">
      <p className="section-label">Priority Queue</p>
      <h3>{lesson.pythonHeapq.priorityQueue.title}</h3>

      <p>{lesson.pythonHeapq.priorityQueue.explanation}</p>

      <pre className="python-code">
        <code>{lesson.pythonHeapq.priorityQueue.code}</code>
      </pre>

      <h4>Removal Order</h4>

      <div className="priority-queue-order">
        {[...lesson.pythonHeapq.priorityQueue.steps]
          .sort((a, b) => a.priority - b.priority)
          .map((item, index) => (
            <article key={item.task}>
              <span>Removed {index + 1}</span>
              <strong>Priority {item.priority}</strong>
              <p>{item.task}</p>
            </article>
          ))}
      </div>

      <div className="heapq-output">
        <strong>Output</strong>
        <pre>
          <code>{lesson.pythonHeapq.priorityQueue.output}</code>
        </pre>
      </div>

      <div className="key-idea">
        <strong>Remember:</strong>
        <p>{lesson.pythonHeapq.priorityQueue.note}</p>
      </div>
    </div>
  </section>
)}
{lesson.treeStructureSelection && (
  <section className="lesson-section">
    <p className="section-label">Structure Selection</p>
    <h2>{lesson.treeStructureSelection.title}</h2>

    <p className="lesson-body">
      {lesson.treeStructureSelection.introduction}
    </p>

    <div className="tree-selection-grid">
      {lesson.treeStructureSelection.structures.map((structure) => (
        <article
          className="tree-selection-card"
          key={structure.name}
        >
          <h3>{structure.name}</h3>

          <div className="tree-selection-description">
            <strong>Best used for</strong>
            <p>{structure.bestFor}</p>
          </div>

          <div className="tree-selection-description">
            <strong>Strength</strong>
            <p>{structure.strength}</p>
          </div>

          <div className="tree-selection-warning">
            <strong>Be careful</strong>
            <p>{structure.caution}</p>
          </div>

          <div className="tree-selection-complexity">
            <div>
              <span>Search</span>
              <strong>{structure.search}</strong>
            </div>

            <div>
              <span>Modification</span>
              <strong>{structure.modification}</strong>
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="tree-selection-scenarios">
      <h3>Which Structure Should I Choose?</h3>

      <p>
        Read each situation and decide which structure would be the
        best choice.
      </p>

      <div className="tree-scenario-grid">
        {lesson.treeStructureSelection.scenarios.map(
          (scenario, index) => (
            <article
              className="tree-scenario-card"
              key={scenario.problem}
            >
              <span>Scenario {index + 1}</span>
              <h4>{scenario.problem}</h4>

              <details>
                <summary>Reveal Answer</summary>

                <div className="tree-scenario-answer">
                  <strong>{scenario.answer}</strong>
                  <p>{scenario.reason}</p>
                </div>
              </details>
            </article>
          )
        )}
      </div>
    </div>

    <div className="key-idea">
      <strong>Remember:</strong>
      <p>{lesson.treeStructureSelection.keyIdea}</p>
    </div>
  </section>
)}

        {lesson.hashingProcess && (
  <section className="lesson-section">
    <p className="section-label">
      Hashing Concept
    </p>

    <h2>{lesson.hashingProcess.title}</h2>

    <p className="lesson-body">
      {lesson.hashingProcess.introduction}
    </p>

    <div className="hash-process">
      {lesson.hashingProcess.steps.map((step, index) => (
        <div
          className="hash-process-item"
          key={step.label}
        >
          <article className="hash-step">
            <span className="hash-step-number">
              Step {index + 1}
            </span>

            <h3>{step.label}</h3>

            <code className="hash-value">
              {step.value}
            </code>

            <p>{step.explanation}</p>
          </article>

          {index !== lesson.hashingProcess.steps.length - 1 && (
            <span className="hash-arrow">
              →
            </span>
          )}
        </div>
      ))}
    </div>

    <h3>Python Example</h3>

    <pre className="python-code">
      <code>{lesson.hashingProcess.example}</code>
    </pre>

    <div className="hash-result">
      <span>Output</span>
      <code>{lesson.hashingProcess.result}</code>
    </div>

    <div className="key-idea">
      <strong>Important:</strong>
      <p>{lesson.hashingProcess.note}</p>
    </div>
  </section>
)}

{lesson.dictionary && (
  <section className="lesson-section">
    <p className="section-label">
      Python Collections
    </p>

    <h2>{lesson.dictionary.title}</h2>

    <p className="lesson-body">
      {lesson.dictionary.introduction}
    </p>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.dictionary.keyIdea}</p>
    </div>

    <h3>Python Dictionary Example</h3>

    <pre className="python-code">
      <code>{lesson.dictionary.example}</code>
    </pre>

    <div className="hash-result">
      <span>Output</span>

      <code>
        {lesson.dictionary.output}
      </code>
    </div>

    <h3>Line-by-Line Explanation</h3>

    <div className="code-explanations">
      {lesson.dictionary.lineByLine.map((item) => (
        <div
          className="code-explanation"
          key={item.line}
        >
          <code>{item.line}</code>

          <p>{item.explanation}</p>
        </div>
      ))}

    </div>

    <h3>Common Dictionary Operations</h3>

    <div className="dictionary-operations">
      {lesson.dictionary.operations.map((operation) => (
        <article
          className="dictionary-operation"
          key={operation.name}
        >
          <div className="dictionary-operation-header">
            <h4>{operation.name}</h4>

            <span>
              {operation.complexity}
            </span>
          </div>

          <code className="dictionary-syntax">
            {operation.code}
          </code>

          <p>{operation.explanation}</p>
        </article>
      ))}
    </div>

    <div className="safe-lookup-card">
      <h3>{lesson.dictionary.safeLookup.title}</h3>

      <p>
        {lesson.dictionary.safeLookup.explanation}
      </p>

      <div className="lookup-comparison">
        <div className="lookup-example lookup-risky">
          <span>⚠ Can raise KeyError</span>

          <pre className="python-code">
            <code>
              {lesson.dictionary.safeLookup.riskyCode}
            </code>
          </pre>
        </div>

        <div className="lookup-example lookup-safe">
          <span>✓ Safer lookup</span>

          <pre className="python-code">
            <code>
              {lesson.dictionary.safeLookup.safeCode}
            </code>
          </pre>
        </div>
      </div>

      <div className="hash-result">
        <span>Result</span>

        <code>
          {lesson.dictionary.safeLookup.result}
        </code>
      </div>
    </div>
  </section>
)}
{lesson.sets && (
  <section className="lesson-section">
    <p className="section-label">
      Python Collections
    </p>

    <h2>{lesson.sets.title}</h2>

    <p className="lesson-body">
      {lesson.sets.introduction}
    </p>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.sets.keyIdea}</p>
    </div>

    <h3>Removing Duplicates with a Set</h3>

    <pre className="python-code">
      <code>{lesson.sets.example}</code>
    </pre>

    <div className="hash-result">
      <span>Output</span>
      <code>{lesson.sets.output}</code>
    </div>

    <h3>Line-by-Line Explanation</h3>

    <div className="code-explanations">
      {lesson.sets.lineByLine.map((item) => (
        <div
          className="code-explanation"
          key={item.line}
        >
          <code>{item.line}</code>
          <p>{item.explanation}</p>
        </div>
      ))}
    </div>

    <h3>Common Set Operations</h3>

    <div className="set-operations">
      {lesson.sets.operations.map((operation) => (
        <article
          className="set-operation"
          key={operation.name}
        >
          <div className="set-operation-header">
            <h4>{operation.name}</h4>

            <span>{operation.complexity}</span>
          </div>

          <code className="dictionary-syntax">
            {operation.code}
          </code>

          <p>{operation.explanation}</p>
        </article>
      ))}
    </div>

    <div className="membership-comparison">
      <h3>
        {lesson.sets.membershipComparison.title}
      </h3>

      <p>
        {lesson.sets.membershipComparison.explanation}
      </p>

      <div className="membership-options">
        <article className="membership-option list-membership">
          <span className="membership-label">
            Python List
          </span>

          <code>
            {lesson.sets.membershipComparison.list.code}
          </code>

          <strong>
            {lesson.sets.membershipComparison.list.complexity}
          </strong>

          <p>
            {lesson.sets.membershipComparison.list.reason}
          </p>
        </article>

        <article className="membership-option set-membership">
          <span className="membership-label">
            Python Set
          </span>

          <code>
            {lesson.sets.membershipComparison.set.code}
          </code>

          <strong>
            {lesson.sets.membershipComparison.set.complexity}
          </strong>

          <p>
            {lesson.sets.membershipComparison.set.reason}
          </p>
        </article>
      </div>
    </div>
  </section>
)}
{lesson.collectionComparison && (
  <section className="lesson-section">
    <p className="section-label">Data Structure Selection</p>

    <h2>{lesson.collectionComparison.title}</h2>

    <p className="lesson-body">
      {lesson.collectionComparison.introduction}
    </p>

    <div className="collection-table-wrapper">
      <table className="collection-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>List</th>
            <th>Set</th>
            <th>Dictionary</th>
          </tr>
        </thead>

        <tbody>
          {lesson.collectionComparison.rows.map((row) => (
            <tr key={row.feature}>
              <th scope="row">{row.feature}</th>
              <td>{row.list}</td>
              <td>{row.set}</td>
              <td>{row.dictionary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="collection-scenarios">
      <h3>Which Collection Should I Choose?</h3>

      <p>
        Read each problem and decide which Python collection fits the
        situation best.
      </p>

      <div className="scenario-grid">
        {lesson.collectionComparison.scenarios.map((scenario) => (
          <article className="scenario-card" key={scenario.problem}>
            <p className="scenario-problem">{scenario.problem}</p>

            <div className="scenario-answer">
              <span>Best choice</span>
              <strong>{scenario.choice}</strong>
            </div>

            <p>{scenario.reason}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)}

{lesson.collisions && (
  <section className="lesson-section">
    <p className="section-label">Hash Tables</p>
    <h2>{lesson.collisions.title}</h2>

    <p className="lesson-body">
      {lesson.collisions.introduction}
    </p>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.collisions.keyIdea}</p>
    </div>

    <div className="collision-model">
      <h3>{lesson.collisions.teachingModel.title}</h3>

      <p>{lesson.collisions.teachingModel.explanation}</p>

      <code className="collision-formula">
        {lesson.collisions.teachingModel.formula}
      </code>

      <div className="collision-entries">
        {lesson.collisions.teachingModel.entries.map((entry) => (
          <article className="collision-entry" key={entry.key}>
            <span>Key</span>

            <strong>{entry.key}</strong>

            <code>{entry.calculation}</code>

            <p>{entry.value}</p>
          </article>
        ))}
      </div>

      <div className="collision-target">
        <span>Both keys map to</span>

        <strong>
          Bucket {lesson.collisions.teachingModel.entries[0].bucket}
        </strong>

        <span className="collision-alert">Collision!</span>
      </div>
    </div>

    <div className="collision-process">
      <h3>What Happens?</h3>

      <div className="collision-steps">
        {lesson.collisions.whatHappens.map((item) => (
          <article className="collision-step" key={item.step}>
            <span className="collision-step-number">
              {item.step}
            </span>

            <div>
              <h4>{item.title}</h4>
              <p>{item.explanation}</p>
            </div>
          </article>
        ))}
      </div>
    </div>

    <h3>Python Example</h3>

    <pre className="python-code">
      <code>{lesson.collisions.pythonExample}</code>
    </pre>

    <div className="hash-result">
      <span>Output</span>
      <pre>{lesson.collisions.output}</pre>
    </div>

    <div className="key-idea">
      <strong>Python note:</strong>
      <p>{lesson.collisions.pythonNote}</p>
    </div>

    <div className="collision-warning">
      <strong>Learning note:</strong>
      <p>{lesson.collisions.warning}</p>
    </div>
  </section>
)}

{lesson.hashComplexity && (
  <section className="lesson-section">
    <p className="section-label">Algorithm Analysis</p>

    <h2>{lesson.hashComplexity.title}</h2>

    <p className="lesson-body">
      {lesson.hashComplexity.introduction}
    </p>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.hashComplexity.keyIdea}</p>
    </div>

    <div className="case-comparison">
      <article className="case-card average-case">
        <span>Typical Performance</span>

        <h3>
          {lesson.hashComplexity.averageVsWorst.average.title}
        </h3>

        <strong className="case-complexity">
          {lesson.hashComplexity.averageVsWorst.average.complexity}
        </strong>

        <p>
          {lesson.hashComplexity.averageVsWorst.average.explanation}
        </p>
      </article>

      <article className="case-card worst-case">
        <span>Unfavorable Performance</span>

        <h3>
          {lesson.hashComplexity.averageVsWorst.worst.title}
        </h3>

        <strong className="case-complexity">
          {lesson.hashComplexity.averageVsWorst.worst.complexity}
        </strong>

        <p>
          {lesson.hashComplexity.averageVsWorst.worst.explanation}
        </p>
      </article>
    </div>

    <div className="hash-complexity-table-wrapper">
      <table className="collection-table hash-complexity-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Python Example</th>
            <th>Average</th>
            <th>Worst Case</th>
          </tr>
        </thead>

        <tbody>
          {lesson.hashComplexity.operations.map((operation) => (
            <tr key={operation.operation}>
              <th scope="row">{operation.operation}</th>
              <td>
                <code>{operation.example}</code>
              </td>
              <td>{operation.average}</td>
              <td>{operation.worst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="space-complexity-card">
      <div>
        <span>Memory Analysis</span>
        <h3>{lesson.hashComplexity.spaceComplexity.title}</h3>
      </div>

      <strong>
        {lesson.hashComplexity.spaceComplexity.complexity}
      </strong>

      <p>
        {lesson.hashComplexity.spaceComplexity.explanation}
      </p>
    </div>

    <div className="hash-takeaway">
      <strong>Remember for CS3:</strong>
      <p>{lesson.hashComplexity.takeaway}</p>
    </div>
  </section>
)}


        {lesson.comparison && (

<section className="lesson-section">

  <p className="section-label">
    Data Structure Comparison
  </p>


  <h2>
    {lesson.comparison.title}
  </h2>


  <div className="growth-table-wrapper">

    <table className="growth-table">

      <thead>
        <tr>
          <th>
            Feature
          </th>

          <th>
            Array
          </th>

          <th>
            Linked List
          </th>
        </tr>
      </thead>


      <tbody>

        {lesson.comparison.rows.map((row) => (

          <tr key={row.feature}>

            <td>
              {row.feature}
            </td>

            <td>
              {row.array}
            </td>

            <td>
              {row.linkedList}
            </td>

          </tr>

        ))}

      </tbody>


    </table>

  </div>


</section>

)}


        {lesson.bigO && (



        <section className="lesson-section">

          <p className="section-label">
            Algorithm Analysis
          </p>


          <h2>
            {lesson.bigO.title}
          </h2>


          <p className="lesson-body">
            {lesson.bigO.introduction}
          </p>



          <div className="key-idea">

            <strong>
              Key idea:
            </strong>

            <p>
              {lesson.bigO.keyIdea}
            </p>

          </div>




          <div className="complexity-examples">

            {lesson.bigO.examples.map((example) => (

              <article
                className="complexity-card"
                key={example.notation}
              >


                <div className="complexity-heading">

                  <span className="complexity-badge">
                    {example.notation}
                  </span>


                  <h3>
                    {example.name}
                  </h3>

                </div>



                <p>
                  {example.explanation}
                </p>



                <h4>
                  Python example
                </h4>



                <pre className="python-code">

                  <code>
                    {example.code}
                  </code>

                </pre>




                <h4>
                  Line-by-line explanation
                </h4>



                <div className="code-explanations">

                  {example.lineByLine.map((item) => (

                    <div
                      className="code-explanation"
                      key={item.line}
                    >

                      <code>
                        {item.line}
                      </code>


                      <p>
                        {item.explanation}
                      </p>

                    </div>

                  ))}

                </div>




                <div className="why-box">

                  <strong>
                    Why is this {example.notation}?
                  </strong>


                  <p>
                    {example.why}
                  </p>

                </div>



              </article>

            ))}

          </div>





          {lesson.bigO.logarithmicExplanation && (

            <div className="logarithmic-section">

              <h3>
                {lesson.bigO.logarithmicExplanation.title}
              </h3>


              <p>
                {lesson.bigO.logarithmicExplanation.explanation}
              </p>


              <p>
                {lesson.bigO.logarithmicExplanation.example}
              </p>



              <div className="log-steps">

                {lesson.bigO.logarithmicExplanation.steps.map((step) => (

                  <article
                    className="log-step"
                    key={step.step}
                  >

                    <h4>
                      Step {step.step}
                    </h4>


                    <strong>
                      {step.remaining}
                    </strong>


                    <p>
                      {step.action}
                    </p>


                  </article>

                ))}

              </div>

            </div>

          )}

          
          
          {lesson.bigO.growthComparison && (
          <div className="growth-comparison">

            <h3>
              Big-O Growth Comparison
            </h3>


            <p>
              Compare how the approximate amount of work changes as the input
              size n becomes larger.
            </p>



            <div className="growth-table-wrapper">


              <table className="growth-table">


                <thead>

                  <tr>

                    <th>
                      Input size (n)
                    </th>


                    <th>
                      O(1)
                    </th>


                    <th>
                      O(log n)
                    </th>


                    <th>
                      O(n)
                    </th>


                    <th>
                      O(n log n)
                    </th>


                    <th>
                      O(n²)
                    </th>


                  </tr>

                </thead>



                <tbody>

                  {lesson.bigO.growthComparison.map((row) => (

                    <tr key={row.inputSize}>


                      <td>
                        {row.inputSize.toLocaleString()}
                      </td>


                      <td>
                        {row.constant.toLocaleString()}
                      </td>


                      <td>
                        {row.logarithmic.toLocaleString()}
                      </td>


                      <td>
                        {row.linear.toLocaleString()}
                      </td>


                      <td>
                        {row.linearithmic.toLocaleString()}
                      </td>


                      <td>
                        {row.quadratic.toLocaleString()}
                      </td>


                    </tr>

                  ))}


                </tbody>


              </table>


            </div>

            </div>
            )}
            
            </section>
        )}

{lesson.nodeExample && (

<section className="lesson-section">

<p className="section-label">
Node Structure
</p>


<h2>
{lesson.nodeExample.title}
</h2>


<p className="lesson-body">
{lesson.nodeExample.explanation}
</p>


<pre className="python-code">
<code>
{lesson.nodeExample.code}
</code>
</pre>


<ul className="algorithm-steps">

{lesson.nodeExample.steps.map((step)=>(
<li key={step}>
{step}
</li>
))}

</ul>


</section>

)}


{lesson.visualization && (

<section className="lesson-section">

<p className="section-label">
Visual Representation
</p>


<h2>
{lesson.visualization.title}
</h2>


<p className="lesson-body">
{lesson.visualization.explanation}
</p>


<div className="linked-list-display">

{lesson.visualization.nodes.map((node, index)=>(

<div 
className="linked-node"
key={node.value}
>

<div className="node-box">

  <div className="node-data">
    {node.value}
  </div>

  <div className="node-next">
    next
  </div>

</div>


{index !== lesson.visualization.nodes.length - 1 && (

<div className="node-pointer">
→
</div>

)}




</div>

))}


<div className="null-node">
None
</div>


</div>




</section>

)}
{lesson.traversal && (

<section className="lesson-section">

  <p className="section-label">
    Linked List Traversal
  </p>

  <h2>
    {lesson.traversal.title}
  </h2>

  <p className="lesson-body">
    {lesson.traversal.explanation}
  </p>

  <h3>
    Python Example
  </h3>

  <pre className="python-code">
    <code>
      {lesson.traversal.code}
    </code>
  </pre>

  <h3>
    Step-by-Step
  </h3>

  <ul className="algorithm-steps">

    {lesson.traversal.steps.map((step) => (

      <li key={step}>
        {step}
      </li>

    ))}

  </ul>

  <div className="why-box">

    <strong>
      Why is traversal O(n)?
    </strong>

    <p>
      To traverse a linked list, we begin at the head and follow each
      next reference until we reach None. If the list contains n nodes,
      we may need to visit all n nodes, so traversal takes O(n) time.
    </p>

  </div>

</section>

)}
{lesson.insertion && (

<section className="lesson-section">

  <p className="section-label">
    Linked List Insertion
  </p>

  <h2>
    {lesson.insertion.title}
  </h2>

  <p className="lesson-body">
    {lesson.insertion.explanation}
  </p>

  <h3>
    Python Example
  </h3>

  <pre className="python-code">
    <code>
      {lesson.insertion.code}
    </code>
  </pre>

  <h3>
    Step-by-Step
  </h3>

  <ul className="algorithm-steps">

    {lesson.insertion.steps.map((step) => (

      <li key={step}>
        {step}
      </li>

    ))}

  </ul>

  {lesson.insertion.visualization && (

<div className="insertion-visualization">

  <h3>Before Insertion</h3>

  <div className="linked-list-display">

    {lesson.insertion.visualization.before.map((value) => (

      <div
        className="linked-node"
        key={`before-${value}`}
      >

        <div className="node-box">

          <div className="node-data">
            {value}
          </div>

          <div className="node-next">
            next
          </div>

        </div>

        <div className="node-pointer">
          →
        </div>

      </div>

    ))}

    <div className="null-node">
      None
    </div>

  </div>


  <div className="insertion-action">
    Insert {lesson.insertion.visualization.newValue} at the head
  </div>


  <h3>After Insertion</h3>

  <div className="linked-list-display">

    {lesson.insertion.visualization.after.map((value) => (
        
        <div
        className={`linked-node ${

            value === lesson.insertion.visualization.newValue
            ? 'new-linked-node'
            : ''
        }`}
        key={`after-${value}`}
        >

        <div className="node-box">

          <div className="node-data">
            {value}
          </div>

          <div className="node-next">
            next
          </div>

        </div>

        <div className="node-pointer">
          →
        </div>

      </div>

    ))}

    <div className="null-node">
      None
    </div>

  </div>

</div>

)}

  <div className="why-box">

    <strong>
      Why can insertion at the beginning be O(1)?
    </strong>

    <p>
      We do not need to visit every node. We only create the new node,
      connect its next reference to the current head, and update head
      to point to the new node. The number of operations stays constant
      regardless of the size of the linked list.
    </p>

  </div>

</section>

)}

{lesson.deletion && (

<section className="lesson-section">

  <p className="section-label">
    Linked List Deletion
  </p>

  <h2>
    {lesson.deletion.title}
  </h2>

  <p className="lesson-body">
    {lesson.deletion.explanation}
  </p>

  <h3>
    Python Example
  </h3>

  <pre className="python-code">
    <code>
      {lesson.deletion.code}
    </code>
  </pre>

  <h3>
    Step-by-Step
  </h3>

  <ul className="algorithm-steps">

    {lesson.deletion.steps.map((step) => (

      <li key={step}>
        {step}
      </li>

    ))}

  </ul>


  {lesson.deletion.visualization && (

    <div className="deletion-visualization">

      <h3>
        Before Deletion
      </h3>

      <div className="linked-list-display">

        {lesson.deletion.visualization.before.map((value) => (

          <div
            className={`linked-node ${
              value === lesson.deletion.visualization.removedValue
                ? 'deleted-linked-node'
                : ''
            }`}
            key={`delete-before-${value}`}
          >

            <div className="node-box">

              <div className="node-data">
                {value}
              </div>

              <div className="node-next">
                next
              </div>

            </div>

            <div className="node-pointer">
              →
            </div>

          </div>

        ))}

        <div className="null-node">
          None
        </div>

      </div>


      <div className="deletion-action">
        Remove {lesson.deletion.visualization.removedValue}
      </div>


      <h3>
        After Deletion
      </h3>

      <div className="linked-list-display">

        {lesson.deletion.visualization.after.map((value) => (

          <div
            className="linked-node"
            key={`delete-after-${value}`}
          >

            <div className="node-box">

              <div className="node-data">
                {value}
              </div>

              <div className="node-next">
                next
              </div>

            </div>

            <div className="node-pointer">
              →
            </div>

          </div>

        ))}

        <div className="null-node">
          None
        </div>

      </div>

    </div>

  )}


  <div className="why-box">

    <strong>
      What is the time complexity?
    </strong>

    <p>
      If we already know the previous node, changing its next reference
      takes O(1) time. If we must first search through the list to find
      the node, the complete deletion operation can take O(n) time.
    </p>

  </div>

</section>

)}

{lesson.search && (

<section className="lesson-section">

  <p className="section-label">
    Linked List Search
  </p>

  <h2>
    {lesson.search.title}
  </h2>

  <p className="lesson-body">
    {lesson.search.explanation}
  </p>


  <h3>
    Python Example
  </h3>

  <pre className="python-code">
    <code>
      {lesson.search.code}
    </code>
  </pre>


  <h3>
    Line-by-Line Explanation
  </h3>

  <div className="code-explanations">

    {lesson.search.lineByLine.map((item) => (

      <div
        className="code-explanation"
        key={item.line}
      >

        <code>
          {item.line}
        </code>

        <p>
          {item.explanation}
        </p>

      </div>

    ))}

  </div>


  <h3>
    Search Trace: Find {lesson.search.target}
  </h3>

  <div className="search-trace">

    {lesson.search.trace.map((step, index) => (

      <article
        className={`search-step ${
          step.node === lesson.search.target
            ? 'search-found'
            : ''
        }`}
        key={step.node}
      >

        <span className="search-step-number">
          Step {index + 1}
        </span>

        <div className="search-node">
          {step.node}
        </div>

        <p>
          {step.message}
        </p>

      </article>

    ))}

  </div>


  <div className="why-box">

    <strong>
      Why is searching O(n)?
    </strong>

    <p>
      {lesson.search.why}
    </p>

  </div>

</section>

)}

{lesson.commonMistakes && (
  <section className="lesson-section common-mistakes-section">
    <p className="section-label">Common Mistakes</p>
    <h2>{lesson.commonMistakes.title}</h2>

    <p className="lesson-body">
      {lesson.commonMistakes.introduction}
    </p>

    <div className="common-mistakes-grid">
      {lesson.commonMistakes.mistakes.map((mistake) => (
        <article className="mistake-card" key={mistake.title}>
          <h3>{mistake.title}</h3>

          <p className="mistake-problem">
            {mistake.explanation}
          </p>

          <div className="mistake-code-grid">
            <div className="code-example bad-example">
              <span className="code-label">✕ Incorrect</span>

              <pre className="python-code">
                <code>{mistake.incorrectCode}</code>
              </pre>
            </div>

            <div className="code-example good-example">
              <span className="code-label">✓ Correct</span>

              <pre className="python-code">
                <code>{mistake.correctCode}</code>
              </pre>
            </div>
          </div>

          <div className="mistake-lesson">
            <strong>Remember:</strong>
            <p>{mistake.reminder}</p>
          </div>
        </article>
      ))}
    </div>

    <div className="key-idea">
      <strong>Key idea:</strong>
      <p>{lesson.commonMistakes.keyIdea}</p>
    </div>
  </section>
)}


{lesson.practice && (
  <section className="lesson-section">
    <p className="section-label">
      Practice
    </p>

    <h2>{lesson.practice.title}</h2>

    <p className="lesson-body">
      {lesson.practice.introduction}
    </p>

    <div className="practice-grid">
      {lesson.practice.questions.map((question, index) => (
        <article
          className="practice-card"
          key={question.question}
        >
          <div className="practice-header">
            <span className="practice-number">
              Question {index + 1}
            </span>

            <span className="practice-category">
              {question.category}
            </span>
          </div>

          <h3>{question.question}</h3>

          {question.code && (
            <pre className="python-code">
              <code>{question.code}</code>
            </pre>
          )}

          <details className="practice-answer">
            <summary>
              Reveal Answer
            </summary>

            <div className="practice-answer-content">
              <strong>
                Answer: {question.answer}
              </strong>

              <p>
                {question.explanation}
              </p>
            </div>
          </details>
        </article>
      ))}
    </div>
  </section>
)}



            {lesson.recursion && (
            <section className="lesson-section">
                
                <p className="section-label">
                    Recursion
                    
                    </p>
                    <h2>
                        
                        {lesson.recursion.title}
                        </h2>


<p className="lesson-body">
  {lesson.recursion.introduction}
</p>


<div className="key-idea">

<strong>
  Key idea:
</strong>

<p>
  {lesson.recursion.keyIdea}
</p>

</div>



<div className="complexity-card">

<h3>
  {lesson.recursion.example.title}
</h3>


<p>
  {lesson.recursion.example.explanation}
</p>



<h4>
  Python example
</h4>


<pre className="python-code">

<code>
{lesson.recursion.example.code}
</code>

</pre>



<h4>
  Base case
</h4>

<p>
{lesson.recursion.example.baseCase}
</p>



<h4>
  Recursive case
</h4>

<p>
{lesson.recursion.example.recursiveCase}
</p>


</div>





<div className="complexity-card">

<h3>
Call Stack Trace
</h3>


<div className="code-explanations">

{lesson.recursion.example.callStack.map((call) => (

<div
className="code-explanation"
key={call}
>

<code>
{call}
</code>

</div>

))}

</div>

</div>





<div className="why-box">

  <strong>
    {lesson.recursion.recurrence.title}
  </strong>

  <p>
    {lesson.recursion.recurrence.explanation}
  </p>

  <p>
    <code>
      {lesson.recursion.recurrence.example}
    </code>
  </p>

  <p>
    {lesson.recursion.recurrence.meaning}
  </p>

</div>


</section>
)}


{lesson.algorithms && (

<section className="lesson-section">

  <p className="section-label">
    Sorting Algorithms
  </p>


  <h2>
    Algorithm Comparisons
  </h2>


  <p className="lesson-body">
    Different sorting algorithms solve the same problem using
    different strategies. Understanding their efficiency helps us
    choose the correct algorithm for the situation.
  </p>



  <div className="complexity-examples">

    {lesson.algorithms.map((algorithm) => (

      <article
        className="complexity-card"
        key={algorithm.name}
      >


        <div className="complexity-heading">

          <span className="complexity-badge">
            {algorithm.notation}
          </span>


          <h3>
            {algorithm.name}
          </h3>

        </div>



        <p>
          {algorithm.explanation}
        </p>



        <h4>
          Python Example
        </h4>


        <pre className="python-code">

          <code>
            {algorithm.code}
          </code>

        </pre>



        <h4>
          How it works
        </h4>
        
        <ul className="algorithm-steps">
            
            {algorithm.steps.map((step) => (
                <li key={step}>
                    {step}
                    </li>
                ))}
                
                </ul>



        <div className="why-box">

          <strong>
            Why is this {algorithm.notation}?
          </strong>


          <p>
            {algorithm.why}
          </p>

        </div>


      </article>

    ))}

  </div>

</section>

)}


      </div>

    </main>
  )
}

export default TopicPage