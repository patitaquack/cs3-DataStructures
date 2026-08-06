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