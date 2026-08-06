export const analysisLesson = {
    id: 'analysis',
  
    title: 'Analysis and Recursion',
  
    subtitle:
      'Learn how to measure algorithm efficiency, trace loops, and understand recursive problem solving.',
  
    introduction:
      'Two programs can produce the same answer but require very different amounts of time and memory. Algorithm analysis helps us compare those solutions. In this lesson, you will learn how input size affects an algorithm, how Big-O describes growth, and how iterative and recursive algorithms behave.',
  
    objectives: [
      'Explain what input size n represents.',
      'Distinguish between time complexity and space complexity.',
      'Determine Big-O complexity from simple loop structures.',
      'Trace an iterative algorithm step by step.',
      'Identify the base case and recursive case of a recursive function.',
      'Trace recursive function calls and understand the call stack.',
      'Understand how a recurrence equation describes the running time of a recursive algorithm.',
    ],
  
    vocabulary: [
      {
        term: 'Algorithm',
        definition:
          'A step-by-step procedure used to solve a problem or complete a computation.',
      },
      {
        term: 'Input size (n)',
        definition:
          'A value representing how much data an algorithm must process. For a list, n usually represents the number of elements.',
      },
      {
        term: 'Time complexity',
        definition:
          'A description of how the amount of work performed by an algorithm grows as the input size grows.',
      },
      {
        term: 'Space complexity',
        definition:
          'A description of how the amount of memory required by an algorithm grows as the input size grows.',
      },
      {
        term: 'Big-O notation',
        definition:
          'A way of describing an upper bound on how an algorithm grows as the input size n becomes large.',
      },
      {
        term: 'Iteration',
        definition:
          'Repeating instructions with a loop such as for or while.',
      },
      {
        term: 'Recursion',
        definition:
          'A problem-solving technique in which a function calls itself using a smaller version of the original problem.',
      },
      {
        term: 'Base case',
        definition:
          'The condition that stops a recursive function from calling itself again.',
      },
      {
        term: 'Recursive case',
        definition:
          'The part of a recursive function that reduces the problem and makes another recursive call.',
      },
      {
        term: 'Call stack',
        definition:
          'The structure Python uses to keep track of active function calls and where execution should return.',
      },
      {
        term: 'Recurrence relation',
        definition:
          'An equation that describes the running time of a recursive algorithm in terms of smaller inputs.',
      },
    ],
  }