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
                  'Defines a Python function named get_first_item. The parameter items represents the list given to the function.',
              },
              {
                line: 'return items[0]',
                explanation:
                  'Uses index 0 to directly access and return the first item in the list.',
              },
            ],
    
            why:
              'Python does not need to search through the entire list to access index 0. Whether the list contains 5 items or 5 million items, we still perform one direct lookup.',
          },
          {
            notation: 'O(n)',
            name: 'Linear Time',
    
            explanation:
              'An O(n) algorithm performs more work as the input grows. If the algorithm processes every item once, the amount of work grows at approximately the same rate as the number of items.',
    
            code: [
              'def print_items(items):',
              '    for item in items:',
              '        print(item)',
            ].join('\n'),
    
            lineByLine: [
              {
                line: 'def print_items(items):',
                explanation:
                  'Defines a function named print_items. The parameter items represents the list we want to process.',
              },
              {
                line: 'for item in items:',
                explanation:
                  'Starts a loop that visits every item in the list one time.',
              },
              {
                line: 'print(item)',
                explanation:
                  'Prints the current item. This statement executes once for every loop iteration.',
              },
            ],
    
            why:
              'If the list contains n items, the loop runs n times. When the input doubles, the number of loop iterations also doubles. Therefore, the running time grows linearly with n.',
          },
          {
            notation: 'O(n²)',
            name: 'Quadratic Time',
          
            explanation:
              'An O(n²) algorithm often occurs when one loop over the input is placed inside another loop over the same input.',
          
            code: [
              'def print_pairs(items):',
              '    for first in items:',
              '        for second in items:',
              '            print(first, second)',
            ].join('\n'),
          
            lineByLine: [
              {
                line: 'def print_pairs(items):',
                explanation:
                  'Defines a function named print_pairs that receives a list called items.',
              },
              {
                line: 'for first in items:',
                explanation:
                  'The outer loop visits every item in the list.',
              },
              {
                line: 'for second in items:',
                explanation:
                  'For every iteration of the outer loop, the inner loop visits every item again.',
              },
              {
                line: 'print(first, second)',
                explanation:
                  'Prints one pair. Because this line is inside both loops, it executes n × n times.',
              },
            ],
          
            why:
              'The outer loop runs n times, and for each outer-loop iteration the inner loop also runs n times. This gives n × n operations, which is n². Therefore, the algorithm is O(n²).',
          },
          {
            notation: 'O(log n)',
            name: 'Logarithmic Time',
          
            explanation:
              'An O(log n) algorithm reduces the amount of remaining work by a constant fraction, often one half, during each step. Binary search is a classic example.',
          
            code: [
              'def binary_search(items, target):',
              '    left = 0',
              '    right = len(items) - 1',
              '',
              '    while left <= right:',
              '        middle = (left + right) // 2',
              '',
              '        if items[middle] == target:',
              '            return middle',
              '        elif items[middle] < target:',
              '            left = middle + 1',
              '        else:',
              '            right = middle - 1',
              '',
              '    return -1',
            ].join('\n'),
          
            lineByLine: [
              {
                line: 'left = 0',
                explanation:
                  'Sets the left boundary to the first index of the list.',
              },
              {
                line: 'right = len(items) - 1',
                explanation:
                  'Sets the right boundary to the final index of the list.',
              },
              {
                line: 'while left <= right:',
                explanation:
                  'Continues searching while there is still a valid section of the list to examine.',
              },
              {
                line: 'middle = (left + right) // 2',
                explanation:
                  'Calculates the middle index. Python // performs integer division, giving us a whole-number index.',
              },
              {
                line: 'if items[middle] == target:',
                explanation:
                  'Checks whether the middle value is the value we are searching for.',
              },
              {
                line: 'left = middle + 1',
                explanation:
                  'If the target is larger, eliminates the left half and continues searching on the right.',
              },
              {
                line: 'right = middle - 1',
                explanation:
                  'If the target is smaller, eliminates the right half and continues searching on the left.',
              },
              {
                line: 'return -1',
                explanation:
                  'Returns -1 when the target was not found in the list.',
              },
            ],
          
            why:
              'Each iteration eliminates approximately half of the remaining search area. Because the problem repeatedly shrinks by half, the number of iterations grows logarithmically rather than linearly.',
          },
          {
            notation: 'O(n log n)',
            name: 'Linearithmic Time',
          
            explanation:
              'O(n log n) often appears when an algorithm performs O(n) work across O(log n) levels. It grows faster than linear time but much more slowly than quadratic time.',
          
            code: [
              'def process_in_levels(items):',
              '    size = 1',
              '',
              '    while size < len(items):',
              '        for item in items:',
              '            print(item)',
              '',
              '        size *= 2',
            ].join('\n'),
          
            lineByLine: [
              {
                line: 'size = 1',
                explanation:
                  'Starts size at 1. We will repeatedly double this value.',
              },
              {
                line: 'while size < len(items):',
                explanation:
                  'The while loop continues until size reaches the input size. Because size doubles each time, this loop runs about log n times.',
              },
              {
                line: 'for item in items:',
                explanation:
                  'During each level, the for loop processes all n items.',
              },
              {
                line: 'print(item)',
                explanation:
                  'Represents the work performed on each item.',
              },
              {
                line: 'size *= 2',
                explanation:
                  'Doubles size after each level. This repeated doubling creates the logarithmic part of the complexity.',
              },
            ],
          
            why:
              'The while loop runs approximately log n times because size doubles after every iteration. During each of those iterations, the for loop processes n items. Multiplying the two amounts of work gives n × log n, or O(n log n).',
          },
        ],
        growthComparison: [
            {
              inputSize: 1,
              constant: 1,
              logarithmic: 1,
              linear: 1,
              linearithmic: 1,
              quadratic: 1,
            },
            {
              inputSize: 5,
              constant: 1,
              logarithmic: 3,
              linear: 5,
              linearithmic: 15,
              quadratic: 25,
            },
            {
              inputSize: 10,
              constant: 1,
              logarithmic: 4,
              linear: 10,
              linearithmic: 40,
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
      },
    }