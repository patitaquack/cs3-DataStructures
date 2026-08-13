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
  }
}