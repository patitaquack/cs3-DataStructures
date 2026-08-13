export const designLesson = {
  id: 'design',

  title: 'Algorithm Design',

  subtitle:
    'Compare major problem-solving strategies and learn how to choose an effective approach.',

  introduction:
    'Algorithm design is the process of creating a clear and efficient method for solving a computational problem. Different problems require different strategies. In this lesson, you will compare greedy algorithms, divide and conquer, dynamic programming, backtracking, and randomized algorithms using Python examples.',

  objectives: [
    'Explain what an algorithm design strategy is.',
    'Recognize problems that can be solved with a greedy approach.',
    'Explain how divide and conquer breaks a problem into smaller independent parts.',
    'Identify overlapping subproblems and optimal substructure.',
    'Compare memoization and tabulation in dynamic programming.',
    'Explain how backtracking explores choices and abandons invalid paths.',
    'Describe how randomized algorithms use random choices.',
    'Compare the time and space tradeoffs of major design strategies.',
    'Choose an appropriate strategy for a computational problem.',
  ],

  vocabulary: [
    {
      term: 'Algorithm design',
      definition:
        'The process of developing a step-by-step strategy for solving a computational problem.',
    },
    {
      term: 'Greedy algorithm',
      definition:
        'A strategy that repeatedly chooses the option that appears best at the current step.',
    },
    {
      term: 'Divide and conquer',
      definition:
        'A strategy that divides a problem into smaller independent subproblems, solves them, and combines their results.',
    },
    {
      term: 'Dynamic programming',
      definition:
        'A strategy that solves overlapping subproblems and stores their results so they do not need to be computed repeatedly.',
    },
    {
      term: 'Backtracking',
      definition:
        'A strategy that explores possible choices and reverses a choice when it cannot lead to a valid solution.',
    },
    {
      term: 'Randomized algorithm',
      definition:
        'An algorithm that uses random choices as part of its problem-solving process.',
    },
    {
      term: 'Subproblem',
      definition:
        'A smaller version or portion of the original problem.',
    },
    {
      term: 'Optimal solution',
      definition:
        'The best valid solution according to the goal of the problem.',
    },
    {
      term: 'Optimal substructure',
      definition:
        'A property where an optimal solution can be constructed from optimal solutions to smaller subproblems.',
    },
    {
      term: 'Overlapping subproblems',
      definition:
        'Smaller problems that are solved repeatedly during the execution of an algorithm.',
    },
    {
      term: 'Memoization',
      definition:
        'A top-down dynamic programming technique that stores results produced by recursive calls.',
    },
    {
      term: 'Tabulation',
      definition:
        'A bottom-up dynamic programming technique that fills a table of solutions iteratively.',
    },
    {
      term: 'State',
      definition:
        'The information needed to describe the current stage of a problem.',
    },
    {
      term: 'Choice',
      definition:
        'One possible decision an algorithm can make from its current state.',
    },
    {
      term: 'Constraint',
      definition:
        'A rule or condition that a valid solution must satisfy.',
    },
  ],
  strategyOverview: {
  title: 'Five Major Design Strategies',

  introduction:
    'Algorithm design strategies provide different ways to organize the steps of a solution. The best strategy depends on the structure of the problem.',

  strategies: [
    {
      name: 'Greedy',
      coreIdea:
        'Choose the option that appears best at the current step.',
      usefulFor:
        'Problems where locally optimal choices lead to a globally optimal solution.',
      example:
        'Selecting the smallest available edge in Kruskal’s algorithm.'
    },
    {
      name: 'Divide and Conquer',
      coreIdea:
        'Divide the problem into smaller independent problems, solve them, and combine the results.',
      usefulFor:
        'Problems that naturally separate into similar independent parts.',
      example:
        'Merge sort divides a list into halves and merges the sorted results.'
    },
    {
      name: 'Dynamic Programming',
      coreIdea:
        'Store solutions to overlapping subproblems so they are not calculated repeatedly.',
      usefulFor:
        'Problems with overlapping subproblems and optimal substructure.',
      example:
        'Computing Fibonacci numbers with memoization or tabulation.'
    },
    {
      name: 'Backtracking',
      coreIdea:
        'Explore a possible choice and reverse it when it cannot produce a valid solution.',
      usefulFor:
        'Problems involving combinations, constraints, or multiple possible choices.',
      example:
        'Finding a valid arrangement for the N-Queens problem.'
    },
    {
      name: 'Randomized',
      coreIdea:
        'Use random choices to influence the algorithm’s behavior.',
      usefulFor:
        'Problems where randomness can simplify the algorithm or improve expected performance.',
      example:
        'Selecting a random pivot in randomized quicksort.'
    }
  ],

  keyIdea:
    'Choosing an algorithm design strategy begins by identifying the structure of the problem: independent parts, repeated work, local choices, constrained choices, or useful randomness.'
},
  greedyAlgorithms: {
    title: 'Greedy Algorithms',

    introduction:
      'A greedy algorithm builds a solution one decision at a time. At each step, it chooses the option that appears best right now without reconsidering earlier choices.',

    keyIdea:
      'A greedy choice is locally optimal. It produces a globally optimal solution only when the problem has the correct structure.',

    process: [
      {
        step: 1,
        title: 'Identify the available choices',
        explanation:
          'Determine which decisions the algorithm can make at the current step.',
      },
      {
        step: 2,
        title: 'Choose the best immediate option',
        explanation:
          'Apply a rule that selects the choice that appears most useful right now.',
      },
      {
        step: 3,
        title: 'Commit to the choice',
        explanation:
          'Add the choice to the solution without returning to change it later.',
      },
      {
        step: 4,
        title: 'Repeat',
        explanation:
          'Continue making locally optimal choices until the solution is complete.',
      },
    ],

    activitySelection: {
      title: 'Activity Selection Example',

      explanation:
        'Suppose only one activity can occur at a time. The greedy strategy selects the available activity that finishes earliest, leaving as much time as possible for later activities.',

      activities: [
        {
          name: 'A',
          start: 1,
          finish: 4,
        },
        {
          name: 'B',
          start: 3,
          finish: 5,
        },
        {
          name: 'C',
          start: 0,
          finish: 6,
        },
        {
          name: 'D',
          start: 5,
          finish: 7,
        },
        {
          name: 'E',
          start: 8,
          finish: 9,
        },
        {
          name: 'F',
          start: 5,
          finish: 9,
        },
      ],

      code: [
        'def select_activities(activities):',
        '    activities.sort(key=lambda activity: activity[2])',
        '',
        '    selected = []',
        '    last_finish = 0',
        '',
        '    for name, start, finish in activities:',
        '        if start >= last_finish:',
        '            selected.append(name)',
        '            last_finish = finish',
        '',
        '    return selected',
      ].join('\n'),

      trace: [
        {
          activity: 'A',
          decision: 'Select',
          explanation:
            'Activity A finishes first, so it becomes the first selected activity.',
        },
        {
          activity: 'B',
          decision: 'Skip',
          explanation:
            'Activity B begins before activity A finishes.',
        },
        {
          activity: 'C',
          decision: 'Skip',
          explanation:
            'Activity C overlaps with activity A.',
        },
        {
          activity: 'D',
          decision: 'Select',
          explanation:
            'Activity D begins after activity A has finished.',
        },
        {
          activity: 'E',
          decision: 'Select',
          explanation:
            'Activity E begins after activity D has finished.',
        },
        {
          activity: 'F',
          decision: 'Skip',
          explanation:
            'Activity F overlaps with an activity already selected.',
        },
      ],

      result: ['A', 'D', 'E'],
    },

    whenItWorks: [
      'The problem has a greedy-choice property.',
      'A locally optimal choice can be part of a globally optimal solution.',
      'Earlier choices do not need to be reconsidered.',
    ],

    limitation: {
      title: 'Greedy Does Not Always Work',

      explanation:
        'Some problems require reconsidering earlier decisions or comparing several possible combinations. In those cases, dynamic programming or backtracking may be more appropriate.',

      example:
        'Choosing the largest coin first does not always produce the fewest coins when a currency uses unusual coin values.',
    },
  },
    divideAndConquer: {
    title: 'Divide and Conquer',

    introduction:
      'Divide and conquer solves a problem by breaking it into smaller independent subproblems, solving each subproblem, and combining their results.',

    keyIdea:
      'The smaller subproblems should be independent. Solving one subproblem should not require repeatedly solving the same work from another subproblem.',

    process: [
      {
        step: 1,
        title: 'Divide',
        explanation:
          'Break the original problem into smaller subproblems of the same general type.',
      },
      {
        step: 2,
        title: 'Conquer',
        explanation:
          'Solve each smaller subproblem, often by applying the same algorithm recursively.',
      },
      {
        step: 3,
        title: 'Combine',
        explanation:
          'Join the smaller solutions together to produce the solution to the original problem.',
      },
    ],

    mergeSort: {
      title: 'Merge Sort Example',

      explanation:
        'Merge sort repeatedly divides a list into halves. After each half is sorted, the algorithm merges the halves back together in sorted order.',

      original: [38, 27, 43, 3, 9, 82, 10],

      divideLevels: [
        [[38, 27, 43], [3, 9, 82, 10]],
        [[38], [27, 43], [3, 9], [82, 10]],
        [[38], [27], [43], [3], [9], [82], [10]],
      ],

      mergeLevels: [
        [[38], [27, 43], [3, 9], [10, 82]],
        [[27, 38, 43], [3, 9, 10, 82]],
        [[3, 9, 10, 27, 38, 43, 82]],
      ],

      result: [3, 9, 10, 27, 38, 43, 82],

      code: [
        'def merge_sort(values):',
        '    if len(values) <= 1:',
        '        return values',
        '',
        '    middle = len(values) // 2',
        '    left_half = values[:middle]',
        '    right_half = values[middle:]',
        '',
        '    sorted_left = merge_sort(left_half)',
        '    sorted_right = merge_sort(right_half)',
        '',
        '    return merge(sorted_left, sorted_right)',
        '',
        '',
        'def merge(left, right):',
        '    result = []',
        '    left_index = 0',
        '    right_index = 0',
        '',
        '    while left_index < len(left) and right_index < len(right):',
        '        if left[left_index] <= right[right_index]:',
        '            result.append(left[left_index])',
        '            left_index += 1',
        '        else:',
        '            result.append(right[right_index])',
        '            right_index += 1',
        '',
        '    result.extend(left[left_index:])',
        '    result.extend(right[right_index:])',
        '',
        '    return result',
      ].join('\n'),

      lineByLine: [
        {
          line: 'if len(values) <= 1:',
          explanation:
            'A list containing zero or one value is already sorted. This is the recursive base case.',
        },
        {
          line: 'middle = len(values) // 2',
          explanation:
            'Calculate the middle position so the list can be divided into two parts.',
        },
        {
          line: 'left_half = values[:middle]',
          explanation:
            'Create the left half of the list.',
        },
        {
          line: 'right_half = values[middle:]',
          explanation:
            'Create the right half of the list.',
        },
        {
          line: 'sorted_left = merge_sort(left_half)',
          explanation:
            'Recursively divide and sort the left half.',
        },
        {
          line: 'sorted_right = merge_sort(right_half)',
          explanation:
            'Recursively divide and sort the right half.',
        },
        {
          line: 'return merge(sorted_left, sorted_right)',
          explanation:
            'Combine the two sorted halves into one sorted list.',
        },
      ],
    },

    complexity: [
      {
        measurement: 'Divide levels',
        complexity: 'O(log n)',
        explanation:
          'The list can only be divided in half about log n times.',
      },
      {
        measurement: 'Work per level',
        complexity: 'O(n)',
        explanation:
          'Merging all the values at one level requires processing n values.',
      },
      {
        measurement: 'Total time',
        complexity: 'O(n log n)',
        explanation:
          'There are O(log n) levels, and each level performs O(n) work.',
      },
      {
        measurement: 'Extra space',
        complexity: 'O(n)',
        explanation:
          'Merge sort creates temporary lists while combining values.',
      },
    ],

    comparison: {
      title: 'Independent vs. Overlapping Subproblems',

      divideAndConquer:
        'The subproblems are generally independent. Merge sort handles separate halves of the list.',

      dynamicProgramming:
        'The same subproblems appear repeatedly. Dynamic programming stores their results to avoid repeated work.',
    },

    keyIdea:
      'Merge sort demonstrates all three stages: divide the list into halves, conquer by sorting each half recursively, and combine by merging the sorted halves.',
  },
    dynamicProgramming: {
    title: 'Dynamic Programming',

    introduction:
      'Dynamic programming improves algorithms that repeatedly solve the same smaller problems. It stores each result so that the work can be reused instead of performed again.',

    keyIdea:
      'Dynamic programming trades additional memory for less repeated computation.',

    requirements: [
      {
        name: 'Overlapping Subproblems',
        explanation:
          'The algorithm encounters the same smaller problems multiple times.',
      },
      {
        name: 'Optimal Substructure',
        explanation:
          'The best solution to the original problem can be constructed from the best solutions to smaller subproblems.',
      },
    ],

    fibonacci: {
      title: 'Fibonacci Example',

      explanation:
        'The Fibonacci sequence is a useful example because a basic recursive solution repeatedly calculates the same values.',

      target: 6,

      recurrence:
        'fib(n) = fib(n - 1) + fib(n - 2)',

      result: 8,

      naive: {
        title: 'Naive Recursion',

        explanation:
          'This version is short, but it repeats many calculations as the recursion tree grows.',

        code: [
          'def fib(n):',
          '    if n <= 1:',
          '        return n',
          '',
          '    return fib(n - 1) + fib(n - 2)',
          '',
          'print(fib(6))',
        ].join('\n'),

        repeatedWork: [
          {
            call: 'fib(4)',
            explanation:
              'Calculated from more than one recursive branch.',
          },
          {
            call: 'fib(3)',
            explanation:
              'Repeated several times while calculating larger values.',
          },
          {
            call: 'fib(2)',
            explanation:
              'Repeated throughout the recursion tree.',
          },
        ],
      },

      memoization: {
        title: 'Memoization: Top-Down',

        explanation:
          'Memoization keeps the recursive structure but stores previously computed results in a cache.',

        code: [
          'def fib(n, memo=None):',
          '    if memo is None:',
          '        memo = {}',
          '',
          '    if n in memo:',
          '        return memo[n]',
          '',
          '    if n <= 1:',
          '        return n',
          '',
          '    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)',
          '    return memo[n]',
          '',
          'print(fib(6))',
        ].join('\n'),

        trace: [
          {
            input: 2,
            value: 1,
            explanation:
              'Calculate fib(2) once and store the result.',
          },
          {
            input: 3,
            value: 2,
            explanation:
              'Reuse fib(2) when calculating fib(3).',
          },
          {
            input: 4,
            value: 3,
            explanation:
              'Build the next result from values already stored.',
          },
          {
            input: 5,
            value: 5,
            explanation:
              'Reuse fib(4) and fib(3).',
          },
          {
            input: 6,
            value: 8,
            explanation:
              'Combine the stored results for fib(5) and fib(4).',
          },
        ],
      },

      tabulation: {
        title: 'Tabulation: Bottom-Up',

        explanation:
          'Tabulation starts with the smallest known answers and iteratively builds a table until reaching the requested result.',

        code: [
          'def fib(n):',
          '    if n <= 1:',
          '        return n',
          '',
          '    table = [0] * (n + 1)',
          '    table[1] = 1',
          '',
          '    for i in range(2, n + 1):',
          '        table[i] = table[i - 1] + table[i - 2]',
          '',
          '    return table[n]',
          '',
          'print(fib(6))',
        ].join('\n'),

        table: [
          { index: 0, value: 0 },
          { index: 1, value: 1 },
          { index: 2, value: 1 },
          { index: 3, value: 2 },
          { index: 4, value: 3 },
          { index: 5, value: 5 },
          { index: 6, value: 8 },
        ],
      },
    },

    comparison: [
      {
        feature: 'Direction',
        memoization: 'Top-down',
        tabulation: 'Bottom-up',
      },
      {
        feature: 'Main technique',
        memoization: 'Recursion with a cache',
        tabulation: 'Iteration with a table',
      },
      {
        feature: 'States calculated',
        memoization: 'Only states that are requested',
        tabulation: 'Every state needed to reach the result',
      },
      {
        feature: 'Uses recursion',
        memoization: 'Yes',
        tabulation: 'No',
      },
    ],

    complexity: [
      {
        approach: 'Naive Recursion',
        time: 'O(2ⁿ)',
        space: 'O(n)',
        explanation:
          'Repeated recursive branches cause exponential work.',
      },
      {
        approach: 'Memoization',
        time: 'O(n)',
        space: 'O(n)',
        explanation:
          'Each Fibonacci value is calculated once and stored.',
      },
      {
        approach: 'Tabulation',
        time: 'O(n)',
        space: 'O(n)',
        explanation:
          'The loop calculates one table entry for every value through n.',
      },
    ],

    limitation:
      'Dynamic programming is most useful when subproblems overlap. If the smaller problems are independent, divide and conquer may be a better fit.',
  },
    backtracking: {
    title: 'Backtracking',

    introduction:
      'Backtracking explores possible choices one at a time. When a choice violates a constraint or cannot lead to a solution, the algorithm reverses that choice and tries another path.',

    keyIdea:
      'Backtracking follows the pattern: choose, explore, undo, and try another choice.',

    process: [
      {
        step: 1,
        title: 'Choose',
        explanation:
          'Select one of the available choices and add it to the current solution.',
      },
      {
        step: 2,
        title: 'Check constraints',
        explanation:
          'Determine whether the current choice keeps the partial solution valid.',
      },
      {
        step: 3,
        title: 'Explore',
        explanation:
          'Continue recursively from the new state when the choice is valid.',
      },
      {
        step: 4,
        title: 'Undo',
        explanation:
          'Remove the choice when it leads to a dead end, then try another option.',
      },
    ],

    subsetSum: {
      title: 'Subset Sum Example',

      explanation:
        'Find a subset of the numbers whose sum equals the target. At each position, the algorithm can include the current number or skip it.',

      numbers: [3, 4, 5, 6],

      target: 9,

      code: [
        'def subset_sum(numbers, target, index=0, chosen=None):',
        '    if chosen is None:',
        '        chosen = []',
        '',
        '    if target == 0:',
        '        return chosen.copy()',
        '',
        '    if target < 0 or index == len(numbers):',
        '        return None',
        '',
        '    chosen.append(numbers[index])',
        '',
        '    result = subset_sum(',
        '        numbers,',
        '        target - numbers[index],',
        '        index + 1,',
        '        chosen',
        '    )',
        '',
        '    if result is not None:',
        '        return result',
        '',
        '    chosen.pop()',
        '',
        '    return subset_sum(',
        '        numbers,',
        '        target,',
        '        index + 1,',
        '        chosen',
        '    )',
      ].join('\n'),

      trace: [
        {
          step: 1,
          choice: 'Choose 3',
          selected: [3],
          remaining: 6,
          status: 'Explore',
          explanation:
            'Add 3 to the subset. The remaining target is 6.',
        },
        {
          step: 2,
          choice: 'Choose 4',
          selected: [3, 4],
          remaining: 2,
          status: 'Explore',
          explanation:
            'Add 4 and continue searching for numbers totaling 2.',
        },
        {
          step: 3,
          choice: 'Choose 5',
          selected: [3, 4, 5],
          remaining: -3,
          status: 'Dead end',
          explanation:
            'The remaining target becomes negative, so this path cannot work.',
        },
        {
          step: 4,
          choice: 'Undo 5 and 4',
          selected: [3],
          remaining: 6,
          status: 'Backtrack',
          explanation:
            'Remove choices that led to the dead end and try another path.',
        },
        {
          step: 5,
          choice: 'Choose 6',
          selected: [3, 6],
          remaining: 0,
          status: 'Solution',
          explanation:
            'The remaining target is zero, so a valid subset has been found.',
        },
      ],

      result: [3, 6],
    },

    whenUseful: [
      'The problem contains several possible choices.',
      'A partial solution can be checked against constraints.',
      'Invalid paths can be abandoned before exploring every possibility.',
      'The goal is to find one solution, every solution, or the best valid solution.',
    ],

    complexity: {
      time: 'Often O(2ⁿ) or worse',
      space: 'O(n)',
      explanation:
        'Subset sum may explore include-or-skip choices for every number. The recursion depth is at most the number of values.',
    },

    limitation:
      'Backtracking can still be expensive because the number of possible choices may grow exponentially. Effective constraint checks help prune invalid paths early.',
  },
    randomizedAlgorithms: {
    title: 'Randomized Algorithms',

    introduction:
      'A randomized algorithm uses one or more random choices while it runs. Randomness can help avoid consistently poor behavior and can make some algorithms simpler or faster on average.',

    keyIdea:
      'The same input may cause different decisions during separate runs, but the algorithm should still produce a correct result.',

    process: [
      {
        step: 1,
        title: 'Identify a decision',
        explanation:
          'Find a step where the algorithm can choose from several valid options.',
      },
      {
        step: 2,
        title: 'Make a random choice',
        explanation:
          'Use randomness to select one of the available options.',
      },
      {
        step: 3,
        title: 'Continue the algorithm',
        explanation:
          'Use the selected option to process the current problem.',
      },
      {
        step: 4,
        title: 'Analyze expected performance',
        explanation:
          'Consider how the algorithm behaves across many possible random choices.',
      },
    ],

    randomizedQuickSort: {
      title: 'Randomized Quicksort Example',

      explanation:
        'Quicksort partitions values around a pivot. Randomized quicksort selects the pivot randomly, reducing the chance of repeatedly choosing a poor pivot for a particular input order.',

      values: [8, 3, 7, 4, 9, 2, 6, 5],

      code: [
        'import random',
        '',
        'def randomized_quicksort(values):',
        '    if len(values) <= 1:',
        '        return values',
        '',
        '    pivot = random.choice(values)',
        '',
        '    smaller = [value for value in values if value < pivot]',
        '    equal = [value for value in values if value == pivot]',
        '    larger = [value for value in values if value > pivot]',
        '',
        '    return (',
        '        randomized_quicksort(smaller)',
        '        + equal',
        '        + randomized_quicksort(larger)',
        '    )',
      ].join('\n'),

      traceIntroduction:
        'Because the pivot is random, different executions may create different partitions. This trace shows one possible execution.',

      trace: [
        {
          step: 1,
          title: 'Choose pivot 5',
          values: [8, 3, 7, 4, 9, 2, 6, 5],
          pivot: 5,
          smaller: [3, 4, 2],
          equal: [5],
          larger: [8, 7, 9, 6],
          explanation:
            'Values smaller than 5 move left, while values larger than 5 move right.',
        },
        {
          step: 2,
          title: 'Sort the smaller partition',
          values: [3, 4, 2],
          pivot: 3,
          smaller: [2],
          equal: [3],
          larger: [4],
          explanation:
            'A possible random pivot of 3 separates the smaller partition.',
        },
        {
          step: 3,
          title: 'Sort the larger partition',
          values: [8, 7, 9, 6],
          pivot: 7,
          smaller: [6],
          equal: [7],
          larger: [8, 9],
          explanation:
            'A possible random pivot of 7 separates the larger partition.',
        },
        {
          step: 4,
          title: 'Combine the results',
          explanation:
            'Combine each sorted smaller partition, pivot group, and sorted larger partition.',
        },
      ],

      result: [2, 3, 4, 5, 6, 7, 8, 9],
    },

    whyRandomnessHelps: [
      {
        title: 'Avoid predictable bad inputs',
        explanation:
          'Random decisions make it more difficult for a particular input order to repeatedly cause poor behavior.',
      },
      {
        title: 'Improve expected performance',
        explanation:
          'Although an individual run may be slow, performance across many random choices can be efficient.',
      },
      {
        title: 'Simplify decision-making',
        explanation:
          'Random selection can replace a complicated deterministic rule for choosing among several valid options.',
      },
    ],

    complexity: {
      title: 'Randomized Quicksort Complexity',

      average: 'O(n log n)',

      worstCase: 'O(n²)',

      explanation:
        'Random pivot selection usually creates reasonably balanced partitions, producing O(n log n) expected time. The worst case is still O(n²) if highly unbalanced partitions repeatedly occur.',
    },

    limitation: {
      title: 'Randomized Does Not Mean Incorrect',

      explanation:
        'Randomness changes how the algorithm makes decisions, not the required correctness of its final result.',

      example:
        'Randomized quicksort may choose different pivots during separate runs, but every run must still return the values in sorted order.',
    },
  },
}