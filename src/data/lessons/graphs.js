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
      }
  }