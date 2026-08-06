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
          'A problem-solving technique where a function calls itself using a smaller version of the original problem.',
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
  
    bigO: {
      title: 'Understanding Big-O',
  
      introduction:
        'Big-O notation describes how the amount of work performed by an algorithm grows as the input size n grows. It helps us compare algorithms based on their growth rather than the exact number of seconds they take to run.',
  
      keyIdea:
        'Big-O is about growth. We ask what happens to the amount of work when n becomes very large.',
  
      examples: [
        {
          notation: 'O(1)',
  
          name: 'Constant Time',
  
          explanation:
            'An O(1) algorithm performs the same amount of work regardless of how large the input becomes.',
  
          code: [
            'def get_first_item(items):',
            '    return items[0]',
          ].join('\n'),
  
          lineByLine: [
            {
              line: 'def get_first_item(items):',
              explanation:
                'Defines a function that receives a list called items.',
            },
  
            {
              line: 'return items[0]',
              explanation:
                'Directly accesses the first item using index 0.',
            },
          ],
  
          why:
            'The algorithm performs one operation no matter how large the list becomes.',
        },
  
  
        {
          notation: 'O(n)',
  
          name: 'Linear Time',
  
          explanation:
            'An O(n) algorithm processes each item once. The amount of work grows at the same rate as the input size.',
  
          code: [
            'def print_items(items):',
            '    for item in items:',
            '        print(item)',
          ].join('\n'),
  
          lineByLine: [
            {
              line: 'def print_items(items):',
              explanation:
                'Creates a function that receives a list.',
            },
  
            {
              line: 'for item in items:',
              explanation:
                'Loops through every element in the list.',
            },
  
            {
              line: 'print(item)',
              explanation:
                'Runs once for every item.',
            },
          ],
  
          why:
            'If the list doubles in size, the number of operations also doubles.',
        },
        
        {
            
            
            notation: 'O(n²)',
            
            name: 'Quadratic Time',
            
            
            
            
            explanation:
            
            'O(n²) usually occurs when a loop is placed inside another loop.',
            
            
            code: [
                
                'def print_pairs(items):',
                '    for first in items:',
                
                '        for second in items:',
                
                '            print(first, second)',
      ].join('\n'),

      lineByLine: [
        {
          line: 'for first in items:',
          explanation:
            'The outer loop runs n times.',
        },

        {
          line: 'for second in items:',
          explanation:
            'The inner loop also runs n times for every outer loop.',
        },

        {
          line: 'print(first, second)',
          explanation:
            'The statement executes n × n times.',
        },
      ],

      why:
        'The nested loops create n² operations.',
    },

  ],


  logarithmicExplanation: {

    title: 'Understanding O(log n) - Logarithmic Time',

    explanation:
      'Logarithmic algorithms are efficient because they reduce the problem size after each step.',

    example:
      'Binary search is a classic example. Instead of checking every item, it repeatedly removes half of the remaining search space.',

    steps: [
      {
        step: 1,

        remaining: '1000 items',

        action:
          'Check the middle item and eliminate the half that cannot contain the answer.',
      },

      {
        step: 2,

        remaining: '500 items',

        action:
          'Continue searching only the remaining half.',
      },

      {
        step: 3,

        remaining: '250 items',

        action:
          'Repeat the process until the answer is found.',
      },
    ],
  },


  growthComparison: [

    {
      inputSize: 1,

      constant: 1,

      logarithmic: 0,

      linear: 1,

      linearithmic: 0,

      quadratic: 1,
    },


    {
      inputSize: 10,

      constant: 1,

      logarithmic: 3,

      linear: 10,

      linearithmic: 30,

      quadratic: 100,
    },


    {
      inputSize: 100,

      constant: 1,

      logarithmic: 7,

      linear: 100,

      linearithmic: 700,

      quadratic: 10000,
    },


    {
      inputSize: 1000,

      constant: 1,

      logarithmic: 10,

      linear: 1000,

      linearithmic: 10000,

      quadratic: 1000000,
    },

  ],


  recursion: {

    title: 'Understanding Recursion',

    introduction:
      'Recursion is a problem-solving technique where a function solves a smaller version of the same problem until reaching a condition that stops the process.',


    keyIdea:
      'Every recursive function needs two parts: a base case that stops recursion and a recursive case that moves toward the base case.',


    example: {

      title: 'Factorial Example',


      code: [
        'def factorial(n):',
        '    if n == 1:',
        '        return 1',
        '    return n * factorial(n - 1)',
      ].join('\n'),


      explanation:
        'This function calculates n factorial. Instead of solving the entire problem at once, it reduces the problem by calling itself with n - 1.',


      baseCase:
        'if n == 1: return 1 stops the recursive calls.',


      recursiveCase:
        'return n * factorial(n - 1) reduces the problem size and calls the function again.',


        callStack: [
            'factorial(4)',
            '4 * factorial(3)',
            '3 * factorial(2)',
            '2 * factorial(1)',
            'return 1',
            'return 2',
            'return 6',
            'return 24',
          ],
    
        },
    
    
        recurrence: {
    
          title: 'Recurrence Relation',
    
          explanation:
            'A recurrence relation describes the running time of a recursive algorithm by relating the problem size n to a smaller version of itself.',
    
          example:
            'T(n) = T(n-1) + O(1)',
    
          meaning:
            'The algorithm performs one recursive call on a smaller input plus a constant amount of additional work.',
    
        },
    
      },
    
    },
}
