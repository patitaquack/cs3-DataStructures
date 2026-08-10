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
  <section className="lesson-section">
    <p className="section-label">
      Common Mistakes
    </p>

    <h2>
      {lesson.commonMistakes.title}
    </h2>

    <p className="lesson-body">
      {lesson.commonMistakes.introduction}
    </p>

    <div className="common-mistakes-grid">
      {lesson.commonMistakes.mistakes.map((mistake) => (
        <article
          className="mistake-card"
          key={mistake.title}
        >
          <h3>{mistake.title}</h3>

          <p className="mistake-problem">
            {mistake.problem}
          </p>

          <div className="mistake-code-grid">

            <div className="code-example bad-example">
              <span className="code-label">
                ❌ Incorrect
              </span>

              <pre className="python-code">
                <code>{mistake.badCode}</code>
              </pre>
            </div>

            <div className="code-example good-example">
              <span className="code-label">
                ✓ Correct
              </span>

              <pre className="python-code">
                <code>{mistake.goodCode}</code>
              </pre>
            </div>

          </div>

          <div className="mistake-lesson">
            <strong>Remember:</strong>
            <p>{mistake.lesson}</p>
          </div>
        </article>
      ))}
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