export const graphsLesson = {
    id: 'graphs',
  
    title: 'Graph Algorithms',
  
    subtitle:
      'Learn how graphs represent connected data and how algorithms explore paths, relationships, and networks.',
  
    introduction:
      'A graph is a data structure used to represent connections between objects. The objects are called vertices, and the connections between them are called edges. Graphs model roads, computer networks, social relationships, course prerequisites, and many other real-world systems.',
  
    objectives: [
      'Explain the basic structure of a graph.',
      'Identify vertices, edges, neighbors, paths, and cycles.',
      'Distinguish between directed and undirected graphs.',
      'Distinguish between weighted and unweighted graphs.',
      'Represent graphs using adjacency lists and adjacency matrices.',
      'Trace Breadth-First Search using a queue.',
      'Trace Depth-First Search using recursion or a stack.',
      'Explain when topological sorting can be used.',
      'Explain how Dijkstra’s algorithm finds shortest paths.',
      'Compare Prim’s and Kruskal’s minimum spanning tree algorithms.',
      'Analyze common graph operations using Big-O notation.',
      'Choose an appropriate graph algorithm for a computational problem.'
    ],
  
    vocabulary: [
      {
        term: 'Graph',
        definition:
          'A data structure made of vertices and edges that represent objects and the connections between them.'
      },
  
      {
        term: 'Vertex',
        definition:
          'An individual object or location stored in a graph. A vertex is also commonly called a node.'
      },
  
      {
        term: 'Edge',
        definition:
          'A connection between two vertices in a graph.'
      },
  
      {
        term: 'Neighbor',
        definition:
          'A vertex that is directly connected to another vertex by an edge.'
      },
  
      {
        term: 'Path',
        definition:
          'A sequence of vertices connected by edges.'
      },
  
      {
        term: 'Cycle',
        definition:
          'A path that begins and ends at the same vertex.'
      },
  
      {
        term: 'Directed Graph',
        definition:
          'A graph whose edges have a direction, such as A → B.'
      },
  
      {
        term: 'Undirected Graph',
        definition:
          'A graph whose edges represent two-way connections, such as A — B.'
      },
  
      {
        term: 'Weighted Graph',
        definition:
          'A graph whose edges store values such as distance, cost, or travel time.'
      },
  
      {
        term: 'Degree',
        definition:
          'The number of edges connected to a vertex in an undirected graph.'
      },
  
      {
        term: 'Connected Graph',
        definition:
          'A graph in which a path exists between every pair of vertices.'
      },
  
      {
        term: 'Adjacency List',
        definition:
          'A graph representation that stores each vertex together with a collection of its neighbors.'
      },
  
      {
        term: 'Adjacency Matrix',
        definition:
          'A two-dimensional table where each position indicates whether two vertices are connected.'
      },
  
      {
        term: 'Breadth-First Search',
        definition:
          'A graph traversal algorithm that explores vertices level by level using a queue.'
      },
  
      {
        term: 'Depth-First Search',
        definition:
          'A graph traversal algorithm that follows one path deeply before backtracking.'
      },
  
      {
        term: 'Topological Sort',
        definition:
          'An ordering of vertices in a directed acyclic graph where each prerequisite appears before the vertex that depends on it.'
      },
  
      {
        term: 'Shortest Path',
        definition:
          'A path between two vertices with the smallest total distance or cost.'
      },
  
      {
        term: 'Minimum Spanning Tree',
        definition:
          'A collection of edges that connects every vertex in a weighted undirected graph with the minimum total cost and no cycles.'
      }
    ],
    graphFundamentals: {
        title: 'Understanding Graph Structure',
    
        introduction:
          'A graph represents objects as vertices and connections as edges. This example is an undirected graph, so every connection can be followed in either direction.',
    
        vertices: [
          {
            id: 'A',
            x: 350,
            y: 65
          },
          {
            id: 'B',
            x: 165,
            y: 200
          },
          {
            id: 'C',
            x: 535,
            y: 200
          },
          {
            id: 'D',
            x: 250,
            y: 350
          },
          {
            id: 'E',
            x: 450,
            y: 350
          }
        ],
    
        edges: [
          {
            from: 'A',
            to: 'B'
          },
          {
            from: 'A',
            to: 'C'
          },
          {
            from: 'B',
            to: 'D'
          },
          {
            from: 'B',
            to: 'E'
          },
          {
            from: 'C',
            to: 'E'
          },
          {
            from: 'D',
            to: 'E'
          }
        ],
    
        facts: [
          {
            label: 'Vertices',
            value: '5',
            explanation:
              'The graph contains vertices A, B, C, D, and E.'
          },
          {
            label: 'Edges',
            value: '6',
            explanation:
              'Six connections join pairs of vertices.'
          },
          {
            label: 'Neighbors of B',
            value: 'A, D, and E',
            explanation:
              'B is directly connected to these three vertices.'
          },
          {
            label: 'Example Path',
            value: 'A → B → D',
            explanation:
              'Each consecutive pair of vertices is connected by an edge.'
          },
          {
            label: 'Example Cycle',
            value: 'B → D → E → B',
            explanation:
              'This path returns to the vertex where it began.'
          }
        ],
    
        keyIdea:
          'Vertices represent the objects in a problem. Edges represent the relationships or connections between those objects.'
      },
      graphTypes: {
        title: 'Directed vs. Undirected Graphs',
    
        introduction:
          'The direction of an edge determines whether a connection can be followed one way or both ways.',
    
        undirected: {
          title: 'Undirected Graph',
    
          rule:
            'Each edge represents a two-way relationship.',
    
          explanation:
            'If A is connected to B, then B is also connected to A.',
    
          vertices: [
            { id: 'A', x: 150, y: 110 },
            { id: 'B', x: 350, y: 110 },
            { id: 'C', x: 250, y: 300 }
          ],
    
          edges: [
            { from: 'A', to: 'B' },
            { from: 'A', to: 'C' },
            { from: 'B', to: 'C' }
          ],
    
          examples: [
            'Friendship connections',
            'Two-way roads',
            'Computer network links'
          ]
        },
    
        directed: {
          title: 'Directed Graph',
    
          rule:
            'Each edge points from one vertex toward another vertex.',
    
          explanation:
            'A connection from A to B does not automatically create a connection from B to A.',
    
          vertices: [
            { id: 'A', x: 150, y: 110 },
            { id: 'B', x: 350, y: 110 },
            { id: 'C', x: 250, y: 300 }
          ],
    
          edges: [
            { from: 'A', to: 'B' },
            { from: 'B', to: 'C' },
            { from: 'C', to: 'A' }
          ],
    
          examples: [
            'Social-media follows',
            'One-way roads',
            'Course prerequisites'
          ]
        },
    
        keyIdea:
          'Undirected edges can be followed in both directions. Directed edges have a specific starting vertex and ending vertex.'
      },
      
     
    
      graphWeights: {
        title: 'Weighted vs. Unweighted Graphs',
    
        introduction:
          'Some graphs only record whether a connection exists. Other graphs attach a number to each edge to represent distance, cost, time, or another measurement.',
    
        unweighted: {
          title: 'Unweighted Graph',
    
          rule:
            'Every edge is treated as an equal connection.',
    
          explanation:
            'An unweighted graph records which vertices are connected without assigning a cost to those connections.',
    
          vertices: [
            { id: 'A', x: 150, y: 110 },
            { id: 'B', x: 350, y: 110 },
            { id: 'C', x: 250, y: 300 }
          ],
    
          edges: [
            { from: 'A', to: 'B' },
            { from: 'A', to: 'C' },
            { from: 'B', to: 'C' }
          ],
    
          examples: [
            'Friendship connections',
            'Webpage links',
            'Simple communication networks'
          ]
        },
    
        weighted: {
          title: 'Weighted Graph',
    
          rule:
            'Each edge stores a numerical value called a weight.',
    
          explanation:
            'The weight can represent distance, cost, travel time, capacity, or another measurement.',
    
          vertices: [
            { id: 'A', x: 150, y: 110 },
            { id: 'B', x: 350, y: 110 },
            { id: 'C', x: 250, y: 300 }
          ],
    
          edges: [
            { from: 'A', to: 'B', weight: 4 },
            { from: 'A', to: 'C', weight: 7 },
            { from: 'B', to: 'C', weight: 2 }
          ],
    
          examples: [
            'Road distances',
            'Airline ticket prices',
            'Network transmission times'
          ]
        },
    
        pathComparison: {
          title: 'Comparing Path Cost',
    
          paths: [
            {
              path: 'A → C',
              calculation: '7',
              total: 7
            },
            {
              path: 'A → B → C',
              calculation: '4 + 2',
              total: 6
            }
          ],
    
          explanation:
            'Although A → B → C uses more edges, its total weight is smaller. Weighted shortest-path algorithms compare total cost rather than only counting edges.'
        },
    
        keyIdea:
          'In an unweighted graph, connections are treated equally. In a weighted graph, an algorithm must consider the numerical cost attached to each edge.'
      },

  graphRepresentations: {
    title: 'Representing Graphs in Python',

    introduction:
      'A graph can be stored in several ways. Two common representations are adjacency lists and adjacency matrices. The best choice depends on the number of vertices, the number of edges, and the operations the program needs to perform.',

    vertices: ['A', 'B', 'C', 'D'],

    adjacencyList: {
      title: 'Adjacency List',

      explanation:
        'An adjacency list stores each vertex together with a collection of its neighboring vertices.',

      code: [
        'graph = {',
        '    "A": ["B", "C"],',
        '    "B": ["A", "D"],',
        '    "C": ["A", "D"],',
        '    "D": ["B", "C"]',
        '}'
      ].join('\n'),

      rows: [
        {
          vertex: 'A',
          neighbors: ['B', 'C']
        },
        {
          vertex: 'B',
          neighbors: ['A', 'D']
        },
        {
          vertex: 'C',
          neighbors: ['A', 'D']
        },
        {
          vertex: 'D',
          neighbors: ['B', 'C']
        }
      ],

      spaceComplexity: 'O(V + E)',

      bestFor:
        'Graphs with relatively few edges, also called sparse graphs.'
    },

    adjacencyMatrix: {
      title: 'Adjacency Matrix',

      explanation:
        'An adjacency matrix uses a two-dimensional table. A value of 1 means an edge exists, while 0 means there is no edge.',

      headers: ['A', 'B', 'C', 'D'],

      rows: [
        {
          vertex: 'A',
          values: [0, 1, 1, 0]
        },
        {
          vertex: 'B',
          values: [1, 0, 0, 1]
        },
        {
          vertex: 'C',
          values: [1, 0, 0, 1]
        },
        {
          vertex: 'D',
          values: [0, 1, 1, 0]
        }
      ],

      spaceComplexity: 'O(V²)',

      bestFor:
        'Graphs with many edges, also called dense graphs.'
    },

    comparison: [
      {
        feature: 'Storage',
        adjacencyList: 'O(V + E)',
        adjacencyMatrix: 'O(V²)'
      },
      {
        feature: 'Check one edge',
        adjacencyList: 'O(degree)',
        adjacencyMatrix: 'O(1)'
      },
      {
        feature: 'Visit neighbors',
        adjacencyList: 'O(degree)',
        adjacencyMatrix: 'O(V)'
      },
      {
        feature: 'Best use',
        adjacencyList: 'Sparse graphs',
        adjacencyMatrix: 'Dense graphs'
      }
    ],

    notation: {
      vertices:
        'V represents the number of vertices in the graph.',

      edges:
        'E represents the number of edges in the graph.'
    },

    keyIdea:
      'Adjacency lists usually use less memory for sparse graphs. Adjacency matrices use more memory but make checking whether a specific edge exists very fast.'
  
},

breadthFirstSearch: {
  title: 'Breadth-First Search (BFS)',

  introduction:
    'Breadth-First Search explores a graph level by level. It visits all immediate neighbors before moving farther away from the starting vertex.',

  keyIdea:
    'BFS uses a queue. The first vertex added to the queue is the first vertex removed.',

  start: 'A',

  graph: {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'E'],
    D: ['B', 'E'],
    E: ['B', 'C', 'D']
  },

  code: [
    'from collections import deque',
    '',
    'def bfs(graph, start):',
    '    visited = {start}',
    '    queue = deque([start])',
    '',
    '    while queue:',
    '        vertex = queue.popleft()',
    '        print(vertex)',
    '',
    '        for neighbor in graph[vertex]:',
    '            if neighbor not in visited:',
    '                visited.add(neighbor)',
    '                queue.append(neighbor)'
  ].join('\n'),

  lineByLine: [
    {
      line: 'visited = {start}',
      explanation:
        'Creates a set containing the starting vertex so it is not visited again.'
    },
    {
      line: 'queue = deque([start])',
      explanation:
        'Places the starting vertex into the queue.'
    },
    {
      line: 'while queue:',
      explanation:
        'Continues while there are vertices waiting to be explored.'
    },
    {
      line: 'vertex = queue.popleft()',
      explanation:
        'Removes the vertex that has been waiting in the queue the longest.'
    },
    {
      line: 'for neighbor in graph[vertex]:',
      explanation:
        'Examines every neighbor of the current vertex.'
    },
    {
      line: 'if neighbor not in visited:',
      explanation:
        'Prevents the same vertex from being processed repeatedly.'
    },
    {
      line: 'queue.append(neighbor)',
      explanation:
        'Adds each newly discovered neighbor to the end of the queue.'
    }
  ],

  trace: [
    {
      step: 1,
      current: 'A',
      queue: ['B', 'C'],
      visited: ['A', 'B', 'C'],
      message:
        'Visit A, then add its neighbors B and C to the queue.'
    },
    {
      step: 2,
      current: 'B',
      queue: ['C', 'D', 'E'],
      visited: ['A', 'B', 'C', 'D', 'E'],
      message:
        'Visit B, then add its unvisited neighbors D and E.'
    },
    {
      step: 3,
      current: 'C',
      queue: ['D', 'E'],
      visited: ['A', 'B', 'C', 'D', 'E'],
      message:
        'Visit C. Its neighbors have already been discovered.'
    },
    {
      step: 4,
      current: 'D',
      queue: ['E'],
      visited: ['A', 'B', 'C', 'D', 'E'],
      message:
        'Visit D. Its neighbors have already been discovered.'
    },
    {
      step: 5,
      current: 'E',
      queue: [],
      visited: ['A', 'B', 'C', 'D', 'E'],
      message:
        'Visit E. The queue is now empty.'
    }
  ],

  order: ['A', 'B', 'C', 'D', 'E'],

  complexity: {
    time: 'O(V + E)',
    space: 'O(V)',
    explanation:
      'Each vertex is visited once and each edge is examined. The visited set and queue can store up to V vertices.'
  },

  shortestPathNote:
    'In an unweighted graph, BFS finds shortest paths measured by the number of edges from the starting vertex.'
},
depthFirstSearch: {
  title: 'Depth-First Search (DFS)',

  introduction:
    'Depth-First Search explores one path as deeply as possible before returning to explore another path. DFS can be implemented with recursion or an explicit stack.',

  keyIdea:
    'DFS goes deep first. When it reaches a vertex with no unvisited neighbors, it backtracks.',

  start: 'A',

  graph: {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'E'],
    D: ['B', 'E'],
    E: ['B', 'C', 'D']
  },

  code: [
    'def dfs(graph, vertex, visited):',
    '    if vertex in visited:',
    '        return',
    '',
    '    visited.add(vertex)',
    '    print(vertex)',
    '',
    '    for neighbor in graph[vertex]:',
    '        dfs(graph, neighbor, visited)',
    '',
    '',
    'visited = set()',
    'dfs(graph, "A", visited)'
  ].join('\n'),

  lineByLine: [
    {
      line: 'def dfs(graph, vertex, visited):',
      explanation:
        'Defines a recursive function that receives the graph, the current vertex, and the visited set.'
    },
    {
      line: 'if vertex in visited:',
      explanation:
        'Checks whether this vertex has already been explored.'
    },
    {
      line: 'return',
      explanation:
        'Stops this recursive call when the vertex was already visited.'
    },
    {
      line: 'visited.add(vertex)',
      explanation:
        'Marks the current vertex as visited so it is not processed again.'
    },
    {
      line: 'print(vertex)',
      explanation:
        'Processes the current vertex. In this example, processing means printing it.'
    },
    {
      line: 'for neighbor in graph[vertex]:',
      explanation:
        'Examines every neighbor connected to the current vertex.'
    },
    {
      line: 'dfs(graph, neighbor, visited)',
      explanation:
        'Recursively explores each neighbor, following one path deeply before returning.'
    },
    {
      line: 'visited = set()',
      explanation:
        'Creates an empty set for tracking visited vertices.'
    },
    {
      line: 'dfs(graph, "A", visited)',
      explanation:
        'Starts the traversal at vertex A.'
    }
  ],

  trace: [
    {
      step: 1,
      current: 'A',
      path: ['A'],
      visited: ['A'],
      message:
        'Visit A, then continue to its first unvisited neighbor, B.'
    },
    {
      step: 2,
      current: 'B',
      path: ['A', 'B'],
      visited: ['A', 'B'],
      message:
        'Visit B and continue deeper to D.'
    },
    {
      step: 3,
      current: 'D',
      path: ['A', 'B', 'D'],
      visited: ['A', 'B', 'D'],
      message:
        'Visit D. Its next unvisited neighbor is E.'
    },
    {
      step: 4,
      current: 'E',
      path: ['A', 'B', 'D', 'E'],
      visited: ['A', 'B', 'D', 'E'],
      message:
        'Visit E and continue to its unvisited neighbor, C.'
    },
    {
      step: 5,
      current: 'C',
      path: ['A', 'B', 'D', 'E', 'C'],
      visited: ['A', 'B', 'D', 'E', 'C'],
      message:
        'Visit C. Every reachable vertex has now been visited.'
    }
  ],

  order: ['A', 'B', 'D', 'E', 'C'],

  complexity: {
    time: 'O(V + E)',
    space: 'O(V)',
    explanation:
      'DFS visits each vertex once and examines each edge. The visited set and recursive call stack can use space proportional to the number of vertices.'
  },

  backtrackingNote:
    'Backtracking happens when the current vertex has no unvisited neighbors. The function returns to the previous recursive call and continues checking that vertex’s remaining neighbors.'
},
topologicalSort: {
  title: 'Topological Sorting',

  introduction:
    'A topological sort arranges the vertices of a directed graph so every prerequisite appears before the vertex that depends on it. It can only be performed on a Directed Acyclic Graph (DAG).',

  keyIdea:
    'Repeatedly choose a vertex with an in-degree of 0, add it to the ordering, and remove its outgoing edges.',

  vertices: ['A', 'B', 'C', 'D', 'E'],

  edges: [
    { from: 'A', to: 'C' },
    { from: 'B', to: 'C' },
    { from: 'B', to: 'D' },
    { from: 'C', to: 'E' },
    { from: 'D', to: 'E' }
  ],

  graph: {
    A: ['C'],
    B: ['C', 'D'],
    C: ['E'],
    D: ['E'],
    E: []
  },

  code: [
    'from collections import deque',
    '',
    'def topological_sort(graph):',
    '    indegree = {vertex: 0 for vertex in graph}',
    '',
    '    for vertex in graph:',
    '        for neighbor in graph[vertex]:',
    '            indegree[neighbor] += 1',
    '',
    '    queue = deque(',
    '        vertex for vertex in graph',
    '        if indegree[vertex] == 0',
    '    )',
    '',
    '    order = []',
    '',
    '    while queue:',
    '        vertex = queue.popleft()',
    '        order.append(vertex)',
    '',
    '        for neighbor in graph[vertex]:',
    '            indegree[neighbor] -= 1',
    '',
    '            if indegree[neighbor] == 0:',
    '                queue.append(neighbor)',
    '',
    '    if len(order) != len(graph):',
    '        return None',
    '',
    '    return order'
  ].join('\n'),

  lineByLine: [
    {
      line: 'indegree = {vertex: 0 for vertex in graph}',
      explanation:
        'Creates an in-degree count for every vertex.'
    },
    {
      line: 'indegree[neighbor] += 1',
      explanation:
        'Counts each edge entering a vertex.'
    },
    {
      line: 'if indegree[vertex] == 0',
      explanation:
        'Finds vertices that currently have no prerequisites.'
    },
    {
      line: 'vertex = queue.popleft()',
      explanation:
        'Removes the next available vertex from the queue.'
    },
    {
      line: 'order.append(vertex)',
      explanation:
        'Adds the selected vertex to the topological ordering.'
    },
    {
      line: 'indegree[neighbor] -= 1',
      explanation:
        'Removes the effect of the current vertex’s outgoing edge.'
    },
    {
      line: 'if indegree[neighbor] == 0:',
      explanation:
        'Checks whether all prerequisites for the neighbor have now been removed.'
    },
    {
      line: 'queue.append(neighbor)',
      explanation:
        'Adds the newly available vertex to the queue.'
    },
    {
      line: 'if len(order) != len(graph):',
      explanation:
        'Detects a cycle when some vertices cannot be added to the ordering.'
    }
  ],

  initialIndegree: [
    { vertex: 'A', indegree: 0 },
    { vertex: 'B', indegree: 0 },
    { vertex: 'C', indegree: 2 },
    { vertex: 'D', indegree: 1 },
    { vertex: 'E', indegree: 2 }
  ],

  trace: [
    {
      step: 1,
      current: 'A',
      queue: ['B'],
      order: ['A'],
      message:
        'Remove A. The in-degree of C decreases from 2 to 1.'
    },
    {
      step: 2,
      current: 'B',
      queue: ['C', 'D'],
      order: ['A', 'B'],
      message:
        'Remove B. C and D now have in-degree 0, so both enter the queue.'
    },
    {
      step: 3,
      current: 'C',
      queue: ['D'],
      order: ['A', 'B', 'C'],
      message:
        'Remove C. The in-degree of E decreases from 2 to 1.'
    },
    {
      step: 4,
      current: 'D',
      queue: ['E'],
      order: ['A', 'B', 'C', 'D'],
      message:
        'Remove D. E now has in-degree 0, so it enters the queue.'
    },
    {
      step: 5,
      current: 'E',
      queue: [],
      order: ['A', 'B', 'C', 'D', 'E'],
      message:
        'Remove E. The queue is empty and every vertex has been processed.'
    }
  ],

  order: ['A', 'B', 'C', 'D', 'E'],

  complexity: {
    time: 'O(V + E)',
    space: 'O(V)',
    explanation:
      'The algorithm processes every vertex and examines every directed edge. The in-degree table, queue, and result can each store up to V vertices.'
  },

  cycleNote:
    'If the result contains fewer than V vertices, the graph contains a cycle and no topological ordering exists.',

  applicationNote:
    'Topological sorting is useful for course prerequisites, task scheduling, dependency resolution, and build systems.'
},
dijkstra: {
  title: "Dijkstra's Shortest-Path Algorithm",

  introduction:
    "Dijkstra's algorithm finds the shortest paths from one starting vertex to every other reachable vertex in a weighted graph. It repeatedly selects the unvisited vertex with the smallest known distance.",

  keyIdea:
    "Always process the unvisited vertex with the smallest currently known distance.",

  warning:
    "Dijkstra's algorithm requires nonnegative edge weights. It should not be used when a graph contains negative-weight edges.",

  start: "A",

  vertices: [
    { id: "A", x: 110, y: 190 },
    { id: "B", x: 280, y: 70 },
    { id: "C", x: 280, y: 310 },
    { id: "D", x: 480, y: 100 },
    { id: "E", x: 570, y: 270 }
  ],

  edges: [
    { from: "A", to: "B", weight: 4 },
    { from: "A", to: "C", weight: 2 },
    { from: "C", to: "B", weight: 1 },
    { from: "B", to: "D", weight: 5 },
    { from: "C", to: "D", weight: 8 },
    { from: "C", to: "E", weight: 10 },
    { from: "D", to: "E", weight: 2 }
  ],

  trace: [
    {
      step: 1,
      current: "A",
      visited: ["A"],
      distances: {
        A: "0",
        B: "4",
        C: "2",
        D: "∞",
        E: "∞"
      },
      message:
        "Begin at A. The distance to A is 0. Update neighbors B and C."
    },
    {
      step: 2,
      current: "C",
      visited: ["A", "C"],
      distances: {
        A: "0",
        B: "3",
        C: "2",
        D: "10",
        E: "12"
      },
      message:
        "C has the smallest unvisited distance. Traveling through C improves the distance to B from 4 to 3."
    },
    {
      step: 3,
      current: "B",
      visited: ["A", "C", "B"],
      distances: {
        A: "0",
        B: "3",
        C: "2",
        D: "8",
        E: "12"
      },
      message:
        "B is processed next. The route through B improves the distance to D from 10 to 8."
    },
    {
      step: 4,
      current: "D",
      visited: ["A", "C", "B", "D"],
      distances: {
        A: "0",
        B: "3",
        C: "2",
        D: "8",
        E: "10"
      },
      message:
        "D is processed next. Traveling from D to E improves the distance to E from 12 to 10."
    },
    {
      step: 5,
      current: "E",
      visited: ["A", "C", "B", "D", "E"],
      distances: {
        A: "0",
        B: "3",
        C: "2",
        D: "8",
        E: "10"
      },
      message:
        "E is the final unvisited vertex. All shortest distances are now finalized."
    }
  ],

  shortestPaths: [
    {
      vertex: "A",
      distance: 0,
      path: "A"
    },
    {
      vertex: "B",
      distance: 3,
      path: "A → C → B"
    },
    {
      vertex: "C",
      distance: 2,
      path: "A → C"
    },
    {
      vertex: "D",
      distance: 8,
      path: "A → C → B → D"
    },
    {
      vertex: "E",
      distance: 10,
      path: "A → C → B → D → E"
    }
  ],

  code: [
    "import heapq",
    "",
    "def dijkstra(graph, start):",
    "    distances = {vertex: float('inf') for vertex in graph}",
    "    distances[start] = 0",
    "",
    "    priority_queue = [(0, start)]",
    "",
    "    while priority_queue:",
    "        current_distance, current = heapq.heappop(priority_queue)",
    "",
    "        if current_distance > distances[current]:",
    "            continue",
    "",
    "        for neighbor, weight in graph[current]:",
    "            new_distance = current_distance + weight",
    "",
    "            if new_distance < distances[neighbor]:",
    "                distances[neighbor] = new_distance",
    "                heapq.heappush(",
    "                    priority_queue,",
    "                    (new_distance, neighbor)",
    "                )",
    "",
    "    return distances"
  ].join("\n"),

  lineByLine: [
    {
      line: "distances = {vertex: float('inf') for vertex in graph}",
      explanation:
        "Initially, the shortest distance to every vertex is unknown, so each distance is set to infinity."
    },
    {
      line: "distances[start] = 0",
      explanation:
        "The distance from the starting vertex to itself is 0."
    },
    {
      line: "priority_queue = [(0, start)]",
      explanation:
        "The priority queue begins with the starting vertex and its distance."
    },
    {
      line: "current_distance, current = heapq.heappop(priority_queue)",
      explanation:
        "Remove the vertex with the smallest known distance."
    },
    {
      line: "if current_distance > distances[current]:",
      explanation:
        "Ignore an outdated queue entry if a shorter route has already been discovered."
    },
    {
      line: "new_distance = current_distance + weight",
      explanation:
        "Calculate the distance to a neighbor through the current vertex."
    },
    {
      line: "if new_distance < distances[neighbor]:",
      explanation:
        "Check whether the newly discovered route is shorter."
    },
    {
      line: "distances[neighbor] = new_distance",
      explanation:
        "Store the improved shortest distance."
    },
    {
      line: "heapq.heappush(priority_queue, (new_distance, neighbor))",
      explanation:
        "Add the updated vertex and distance to the priority queue."
    },
    {
      line: "return distances",
      explanation:
        "Return the shortest known distance from the start to every vertex."
    }
  ],

  complexity: {
    time: "O((V + E) log V)",
    space: "O(V + E)",
    explanation:
      "With an adjacency list and a min-heap priority queue, vertices and edges are processed while priority-queue operations require logarithmic time."
  }
},
commonMistakes: {
  title: 'Common Graph Algorithm Mistakes',

  introduction:
    'Graph algorithms often fail because a small bookkeeping rule is missed. These examples show common errors and how to correct them.',

  mistakes: [
    {
      title: 'Forgetting the Visited Set',

      explanation:
        'Without recording visited vertices, a traversal can revisit the same vertices forever when the graph contains a cycle.',

      incorrectCode: [
        'def dfs(graph, vertex):',
        '    print(vertex)',
        '',
        '    for neighbor in graph[vertex]:',
        '        dfs(graph, neighbor)'
      ].join('\n'),

      correctCode: [
        'def dfs(graph, vertex, visited):',
        '    if vertex in visited:',
        '        return',
        '',
        '    visited.add(vertex)',
        '    print(vertex)',
        '',
        '    for neighbor in graph[vertex]:',
        '        dfs(graph, neighbor, visited)'
      ].join('\n'),

      reminder:
        'Mark each vertex as visited before exploring its neighbors.'
    },

    {
      title: 'Using a Stack for Breadth-First Search',

      explanation:
        'BFS must process vertices in first-in, first-out order. A stack changes the traversal into depth-first behavior.',

      incorrectCode: [
        'stack = [start]',
        'current = stack.pop()'
      ].join('\n'),

      correctCode: [
        'from collections import deque',
        '',
        'queue = deque([start])',
        'current = queue.popleft()'
      ].join('\n'),

      reminder:
        'Use a queue for BFS and a stack or recursion for DFS.'
    },

    {
      title: 'Using Dijkstra’s Algorithm with Negative Weights',

      explanation:
        'Dijkstra’s greedy choice is not reliable when an edge has a negative weight.',

      incorrectCode: [
        'edges = {',
        '    "A": [("B", -4)]',
        '}',
        '',
        '# Dijkstra is not valid for this graph'
      ].join('\n'),

      correctCode: [
        '# Use Dijkstra only when every edge',
        '# weight is nonnegative.',
        '',
        '# Use Bellman-Ford when negative',
        '# weights are allowed.'
      ].join('\n'),

      reminder:
        'Check the edge-weight requirements before choosing a shortest-path algorithm.'
    },

    {
      title: 'Topologically Sorting a Graph with a Cycle',

      explanation:
        'A topological ordering exists only for a directed acyclic graph.',

      incorrectCode: [
        '# A → B',
        '# B → C',
        '# C → A',
        '',
        '# This graph contains a cycle'
      ].join('\n'),

      correctCode: [
        '# Detect the cycle first.',
        '',
        '# If fewer than V vertices are processed,',
        '# no topological ordering exists.'
      ].join('\n'),

      reminder:
        'Topological sort requires a DAG: a directed graph with no cycles.'
    }
  ],

  keyIdea:
    'Choose the correct supporting structure, track visited vertices, and verify that the graph satisfies the algorithm’s requirements.'
},
practice: {
  title: 'Check Your Understanding',

  introduction:
    'Use these questions to practice graph vocabulary, representations, traversals, shortest paths, topological sorting, minimum spanning trees, and Big-O analysis.',

  questions: [
    {
      category: 'Graph Anatomy',

      question:
        'In an undirected graph with edges A — B, A — C, and B — D, which vertices are neighbors of A?',

      answer:
        'B and C',

      explanation:
        'A neighbor is a vertex directly connected by an edge. A has direct edges to B and C.'
    },

    {
      category: 'Graph Type',

      question:
        'A course-prerequisite graph uses arrows from each prerequisite to the course that depends on it. Is this graph directed or undirected?',

      answer:
        'Directed',

      explanation:
        'A prerequisite relationship has a specific direction: the prerequisite must come before the dependent course.'
    },

    {
      category: 'Representation',

      question:
        'Which representation usually uses less memory for a sparse graph: an adjacency list or an adjacency matrix?',

      answer:
        'An adjacency list',

      explanation:
        'An adjacency list stores only existing neighbors and uses O(V + E) space. An adjacency matrix reserves O(V²) positions.'
    },

    {
      category: 'Breadth-First Search',

      question:
        'What traversal order does BFS produce from A when neighbors are processed in the order shown?',

      code: [
        'graph = {',
        '    "A": ["B", "C"],',
        '    "B": ["D"],',
        '    "C": [],',
        '    "D": []',
        '}'
      ].join('\n'),

      answer:
        'A, B, C, D',

      explanation:
        'BFS uses a first-in, first-out queue. It visits A, then its neighbors B and C, and finally D.'
    },

    {
      category: 'Depth-First Search',

      question:
        'What does DFS do when the current vertex has no unvisited neighbors?',

      answer:
        'It backtracks to the previous vertex',

      explanation:
        'DFS returns to the previous recursive call or stack position and continues checking for other unvisited neighbors.'
    },

    {
      category: 'Topological Sort',

      question:
        'What condition must a directed graph satisfy before a topological ordering can exist?',

      answer:
        'It must be a directed acyclic graph (DAG)',

      explanation:
        'A directed cycle creates circular dependencies, so no vertex in that cycle can be placed before all its prerequisites.'
    },

    {
      category: 'Dijkstra',

      question:
        'Can Dijkstra’s algorithm be used safely when a graph contains negative edge weights?',

      answer:
        'No',

      explanation:
        'Dijkstra’s algorithm assumes all edge weights are nonnegative. A later negative edge could invalidate a distance that was already finalized.'
    },

    {
      category: 'Shortest-Path Complexity',

      question:
        'Using an adjacency list and a min-heap priority queue, what is Dijkstra’s time complexity?',

      answer:
        'O((V + E) log V)',

      explanation:
        'The algorithm processes vertices and edges while its priority-queue operations require logarithmic time.'
    },

    {
      category: 'Minimum Spanning Tree',

      question:
        'How many edges does a spanning tree contain when a connected graph has V vertices?',

      answer:
        'V - 1 edges',

      explanation:
        'A spanning tree connects every vertex without forming a cycle. Connecting V vertices this way requires exactly V - 1 edges.'
    },

    {
      category: 'Algorithm Selection',

      question:
        'Which algorithm starts from a selected vertex and repeatedly adds the smallest edge leaving the current tree: Prim’s or Kruskal’s?',

      answer:
        'Prim’s algorithm',

      explanation:
        'Prim’s algorithm grows one connected tree from a starting vertex. Kruskal’s algorithm considers edges globally in increasing weight order.'
    }
  ]
}



}
      
  