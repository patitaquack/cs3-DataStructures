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