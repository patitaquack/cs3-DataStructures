export const treesLesson = {
    id: 'trees',
  
    title: 'Heaps and Balanced Trees',
  
    subtitle:
      'Build a strong foundation in trees, then learn how heaps and balanced search trees organize data efficiently.',
  
    introduction:
      'Trees are hierarchical data structures made of connected nodes. Unlike a list, where data follows one linear path, a tree can branch into multiple paths. Trees are used to represent hierarchical relationships and support efficient searching, insertion, deletion, and priority-based operations.',
  
    objectives: [
      'Explain the basic structure of a tree.',
      'Identify roots, parents, children, siblings, leaves, and subtrees.',
      'Explain the difference between a general tree and a binary tree.',
      'Describe the Binary Search Tree ordering property.',
      'Explain why an unbalanced tree can become inefficient.',
      'Describe how balanced search trees keep their height under control.',
      'Explain the structure and purpose of a heap.',
      'Distinguish between min-heaps and max-heaps.',
      'Use Python to work with heap-based priority queues.',
      'Analyze common tree and heap operations using Big-O notation.',
      'Choose an appropriate tree structure for a computational problem.'
    ],
  
    vocabulary: [
      {
        term: 'Tree',
        definition:
          'A hierarchical data structure made of nodes connected by edges.'
      },
  
      {
        term: 'Node',
        definition:
          'An individual element in a tree that stores data and may connect to other nodes.'
      },
  
      {
        term: 'Root',
        definition:
          'The topmost node in a tree. A tree begins at the root.'
      },
  
      {
        term: 'Parent',
        definition:
          'A node that has one or more nodes directly below it.'
      },
  
      {
        term: 'Child',
        definition:
          'A node directly connected below another node.'
      },
  
      {
        term: 'Sibling',
        definition:
          'Nodes that share the same parent.'
      },
  
      {
        term: 'Leaf',
        definition:
          'A node that has no children.'
      },
  
      {
        term: 'Edge',
        definition:
          'A connection between two nodes in a tree.'
      },
  
      {
        term: 'Subtree',
        definition:
          'A smaller tree formed from a node and all of its descendants.'
      },
  
      {
        term: 'Depth',
        definition:
          'The number of edges from the root to a particular node.'
      },
  
      {
        term: 'Height',
        definition:
          'The length of the longest downward path from a node to a leaf.'
      },
  
      {
        term: 'Binary Tree',
        definition:
          'A tree in which each node has at most two children.'
      },
  
      {
        term: 'Binary Search Tree',
        definition:
          'A binary tree that keeps smaller keys in the left subtree and larger keys in the right subtree.'
      },
  
      {
        term: 'Balanced Tree',
        definition:
          'A tree that keeps its height controlled so operations do not become unnecessarily slow.'
      },
  
      {
        term: 'Heap',
        definition:
          'A complete binary tree that follows a heap-ordering property.'
      },
  
      {
        term: 'Priority Queue',
        definition:
          'A structure where elements are removed according to priority rather than simply by insertion order.'
      }
    ],

    treeAnatomy: {
        title: 'Understanding Tree Structure',
      
        introduction:
          'Before working with binary search trees, balanced trees, and heaps, we need to understand how nodes are related inside a tree.',
      
        example: {
          root: 50,
      
          levels: [
            [50],
            [30, 70],
            [20, 40, 60, 80]
          ]
        },
      
        relationships: [
          {
            label: 'Root',
            example: '50',
            explanation:
              '50 is the root because it is the topmost node in the tree.'
          },
      
          {
            label: 'Parent',
            example: '30',
            explanation:
              '30 is a parent because it has two children: 20 and 40.'
          },
      
          {
            label: 'Children',
            example: '20 and 40',
            explanation:
              '20 and 40 are children of node 30.'
          },
      
          {
            label: 'Siblings',
            example: '30 and 70',
            explanation:
              '30 and 70 are siblings because they share the same parent, 50.'
          },
      
          {
            label: 'Leaves',
            example: '20, 40, 60, and 80',
            explanation:
              'These nodes are leaves because they do not have any children.'
          }
        ],
      
        depthExample: {
          title: 'Understanding Depth',
      
          explanation:
            'Depth counts the number of edges from the root to a node.',
      
          rows: [
            {
              node: 50,
              depth: 0,
              reason: 'The root has depth 0.'
            },
            {
              node: 30,
              depth: 1,
              reason: 'There is one edge from 50 to 30.'
            },
            {
              node: 20,
              depth: 2,
              reason: 'The path 50 → 30 → 20 contains two edges.'
            }
          ]
        },
      
        heightExample: {
          title: 'Understanding Height',
      
          explanation:
            'Height measures the longest downward path from a node to a leaf.',
      
          treeHeight: 2,
      
          reason:
            'The longest path from root 50 to a leaf contains two edges, so this tree has height 2.'
        }
    },

    binaryTreeComparison: {
      title: 'Binary Tree vs. Binary Search Tree',
    
      introduction:
        'A binary tree describes the shape of a tree, while a Binary Search Tree adds an ordering rule. Every Binary Search Tree is a binary tree, but not every binary tree is a Binary Search Tree.',
    
      binaryTree: {
        title: 'Binary Tree',
    
        rule:
          'Each node may have at most two children.',
    
        explanation:
          'A binary tree does not automatically require smaller values on the left or larger values on the right.',
    
        levels: [
          [50],
          [80, 20],
          [10, 90, 60, 30]
        ]
      },
    
      binarySearchTree: {
        title: 'Binary Search Tree (BST)',
    
        rule:
          'For each node, smaller values belong in the left subtree and larger values belong in the right subtree.',
    
        explanation:
          'The ordering property allows a search algorithm to eliminate an entire side of the tree after each comparison.',
    
        levels: [
          [50],
          [30, 70],
          [20, 40, 60, 80]
        ]
      },
    
      rules: [
        {
          label: 'Left subtree',
          description:
            'Values in the left subtree are smaller than the current node.'
        },
        {
          label: 'Right subtree',
          description:
            'Values in the right subtree are larger than the current node.'
        },
        {
          label: 'Recursive rule',
          description:
            'The same ordering rule must also be true for every subtree.'
        }
      ],
    
      keyIdea:
        'Binary tells us how many children a node may have. Binary Search tells us that the values also follow an ordering rule.'
    },
    bstPython: {
        title: 'Working with a Binary Search Tree in Python',
      
        introduction:
          'A Binary Search Tree can be represented in Python using node objects. Each node stores a value and references to its left and right children.',
      
        nodeClass: {
          title: 'Creating a Tree Node',
      
          code: [
            'class Node:',
            '    def __init__(self, data):',
            '        self.data = data',
            '        self.left = None',
            '        self.right = None'
          ].join('\n'),
      
          lineByLine: [
            {
              line: 'class Node:',
              explanation:
                'Creates a new Python class named Node. Each object created from this class represents one node in the tree.'
            },
            {
              line: 'def __init__(self, data):',
              explanation:
                'Defines the constructor. It runs automatically whenever we create a new Node and receives the value we want the node to store.'
            },
            {
              line: 'self.data = data',
              explanation:
                'Stores the value inside the node.'
            },
            {
              line: 'self.left = None',
              explanation:
                'Creates a reference for the left child. None means the node does not currently have a left child.'
            },
            {
              line: 'self.right = None',
              explanation:
                'Creates a reference for the right child. None means the node does not currently have a right child.'
            }
          ]
        },
      
        search: {
          title: 'Searching a BST',
      
          target: 60,
      
          explanation:
            'BST search uses the ordering rule to decide whether to move left or right. This means we do not normally need to examine every node.',
      
          code: [
            'def search(root, target):',
            '    current = root',
            '',
            '    while current is not None:',
            '        if target == current.data:',
            '            return True',
            '',
            '        if target < current.data:',
            '            current = current.left',
            '        else:',
            '            current = current.right',
            '',
            '    return False'
          ].join('\n'),
      
          lineByLine: [
            {
              line: 'current = root',
              explanation:
                'Begin searching at the root of the tree.'
            },
            {
              line: 'while current is not None:',
              explanation:
                'Continue searching while there is still a node to examine.'
            },
            {
              line: 'if target == current.data:',
              explanation:
                'Check whether the current node contains the value we are looking for.'
            },
            {
              line: 'if target < current.data:',
              explanation:
                'If the target is smaller, the BST ordering rule tells us to search the left subtree.'
            },
            {
              line: 'current = current.left',
              explanation:
                'Move the current reference to the left child.'
            },
            {
              line: 'current = current.right',
              explanation:
                'If the target is larger, move to the right child instead.'
            },
            {
              line: 'return False',
              explanation:
                'If current becomes None, the target was not found in the tree.'
            }
          ],
      
          trace: [
            {
              node: 50,
              decision:
                '60 > 50, so move right.'
            },
            {
              node: 70,
              decision:
                '60 < 70, so move left.'
            },
            {
              node: 60,
              decision:
                '60 = 60. Target found!'
            }
          ],
      
          complexity: {
            balanced:
              'O(log n)',
            worst:
              'O(n)',
            explanation:
              'In a balanced BST, each comparison can eliminate a large portion of the remaining tree. If the tree becomes extremely unbalanced, however, it can behave like a linked list.'
          }
        }
      },
      balanceConcept: {
        title: 'Why Tree Balance Matters',
      
        introduction:
          'The shape of a Binary Search Tree affects how efficiently we can search it. A balanced tree keeps its height small, while an unbalanced tree can become a long chain of nodes.',
      
        balanced: {
          title: 'Balanced BST',
      
          explanation:
            'In a balanced BST, nodes are distributed across both sides of the tree. This keeps the height relatively small.',
      
          levels: [
            [50],
            [30, 70],
            [20, 40, 60, 80]
          ],
      
          height: 2,
      
          searchComplexity: 'O(log n)',
      
          reason:
            'Because the tree stays relatively short, each comparison can eliminate a large portion of the remaining nodes.'
        },
      
        unbalanced: {
          title: 'Unbalanced BST',
      
          explanation:
            'If values are inserted in an unfortunate order, a BST can become heavily unbalanced and start to resemble a linked list.',
      
          insertionOrder: [10, 20, 30, 40, 50],
      
          path: [10, 20, 30, 40, 50],
      
          height: 4,
      
          searchComplexity: 'O(n)',
      
          reason:
            'In the worst case, searching may require following every node in the chain one at a time.'
        },
      
        comparison: [
          {
            feature: 'Height',
            balanced: 'O(log n)',
            unbalanced: 'O(n)'
          },
          {
            feature: 'Search',
            balanced: 'O(log n)',
            unbalanced: 'O(n)'
          },
          {
            feature: 'Shape',
            balanced: 'Branches remain distributed',
            unbalanced: 'Can become a long chain'
          }
        ],
      
        keyIdea:
          'A Binary Search Tree does not automatically stay balanced. Balanced search tree structures use additional rules to prevent the tree from becoming too tall.'
      },
    

    heapConcept: {
      title: 'Understanding Heaps',
  
      introduction:
        'A heap is a complete binary tree designed to keep the highest-priority value near the top. Heaps are commonly used to implement priority queues.',
  
      keyIdea:
        'A heap follows a parent-child priority rule. It does not follow the left-smaller and right-larger ordering rule of a Binary Search Tree.',
  
      properties: [
        {
          label: 'Complete Binary Tree',
          explanation:
            'Every level is completely filled except possibly the last level, which is filled from left to right.'
        },
        {
          label: 'Heap Ordering',
          explanation:
            'Every parent follows a priority relationship with its children.'
        },
        {
          label: 'Root Priority',
          explanation:
            'The minimum or maximum value is always stored at the root, depending on the type of heap.'
        }
      ],
  
      minHeap: {
        title: 'Min-Heap',
  
        rule:
          'Every parent is less than or equal to each of its children.',
  
        explanation:
          'The smallest value is stored at the root, making it easy to access the minimum-priority value.',
  
        levels: [
          [10],
          [20, 15],
          [30, 40, 25, 50]
        ],
  
        rootValue: 10
      },
  
      maxHeap: {
        title: 'Max-Heap',
  
        rule:
          'Every parent is greater than or equal to each of its children.',
  
        explanation:
          'The largest value is stored at the root, making it easy to access the maximum-priority value.',
  
        levels: [
          [50],
          [40, 30],
          [10, 20, 15, 25]
        ],
  
        rootValue: 50
      },
  
      comparison: [
        {
          feature: 'Root',
          minHeap: 'Smallest value',
          maxHeap: 'Largest value'
        },
        {
          feature: 'Parent rule',
          minHeap: 'Parent ≤ children',
          maxHeap: 'Parent ≥ children'
        },
        {
          feature: 'Common use',
          minHeap: 'Remove the smallest priority first',
          maxHeap: 'Remove the largest priority first'
        }
      ],
  
      note:
        'A heap is not completely sorted. The heap property only guarantees the correct relationship between each parent and its children.'
    },
    heapArrayRepresentation: {
        title: 'How a Heap Is Stored in an Array',
    
        introduction:
          'A heap looks like a tree, but it is commonly stored inside an array. Because a heap is a complete binary tree, the position of each node can be calculated from its array index.',
    
        values: [10, 20, 15, 30, 40, 25, 50],
    
        rows: [
          {
            index: 0,
            value: 10,
            relationship: 'Root'
          },
          {
            index: 1,
            value: 20,
            relationship: 'Left child of 10'
          },
          {
            index: 2,
            value: 15,
            relationship: 'Right child of 10'
          },
          {
            index: 3,
            value: 30,
            relationship: 'Left child of 20'
          },
          {
            index: 4,
            value: 40,
            relationship: 'Right child of 20'
          },
          {
            index: 5,
            value: 25,
            relationship: 'Left child of 15'
          },
          {
            index: 6,
            value: 50,
            relationship: 'Right child of 15'
          }
        ],
    
        formulas: [
          {
            label: 'Parent index',
            formula: '(i - 1) // 2',
            explanation:
              'Use Python floor division to find the parent of the node at index i.'
          },
          {
            label: 'Left-child index',
            formula: '2 * i + 1',
            explanation:
              'Calculates the index of the current node’s left child.'
          },
          {
            label: 'Right-child index',
            formula: '2 * i + 2',
            explanation:
              'Calculates the index of the current node’s right child.'
          }
        ],
    
        example: {
          index: 1,
          value: 20,
          parentIndex: 0,
          parentValue: 10,
          leftChildIndex: 3,
          leftChildValue: 30,
          rightChildIndex: 4,
          rightChildValue: 40
        },
    
        keyIdea:
          'The complete-tree shape makes pointer objects unnecessary. Array indexes tell us where each node’s parent and children are located.'
      },
      heapOperations: {
        title: 'Heap Insertion and Removal',
      
        introduction:
          'A heap must preserve both its complete-tree shape and its heap-ordering property. After inserting or removing a value, nodes may move until the heap property is restored.',
      
        insertion: {
          title: 'Insert into a Min-Heap',
      
          value: 12,
      
          explanation:
            'Insert the new value at the next available array position, then move it upward while it is smaller than its parent.',
      
          startingHeap: [10, 20, 15, 30, 40, 25, 50],
      
          steps: [
            {
              label: 'Append 12',
              heap: [10, 20, 15, 30, 40, 25, 50, 12],
              explanation:
                'Place 12 at the end so the tree remains complete.'
            },
            {
              label: 'Compare with 30',
              heap: [10, 20, 15, 12, 40, 25, 50, 30],
              explanation:
                'Because 12 is smaller than its parent 30, swap them.'
            },
            {
              label: 'Compare with 20',
              heap: [10, 12, 15, 20, 40, 25, 50, 30],
              explanation:
                'Because 12 is smaller than 20, swap again. The min-heap property is now restored.'
            }
          ],
      
          complexity: 'O(log n)'
        },
      
        removal: {
          title: 'Remove the Minimum Value',
      
          removedValue: 10,
      
          explanation:
            'The minimum value is stored at the root. After removing it, move the final value to the root and move that value downward until the heap property is restored.',
      
          startingHeap: [10, 12, 15, 20, 40, 25, 50, 30],
      
          steps: [
            {
              label: 'Remove 10',
              heap: [30, 12, 15, 20, 40, 25, 50],
              explanation:
                'Remove the root and move the final value, 30, into the empty root position.'
            },
            {
              label: 'Compare with 12 and 15',
              heap: [12, 30, 15, 20, 40, 25, 50],
              explanation:
                'Swap 30 with the smaller child, 12.'
            },
            {
              label: 'Compare with 20 and 40',
              heap: [12, 20, 15, 30, 40, 25, 50],
              explanation:
                'Swap 30 with the smaller child, 20. The min-heap property is restored.'
            }
          ],
      
          complexity: 'O(log n)'
        },
      
        complexities: [
          {
            operation: 'View minimum',
            complexity: 'O(1)'
          },
          {
            operation: 'Insert',
            complexity: 'O(log n)'
          },
          {
            operation: 'Remove minimum',
            complexity: 'O(log n)'
          },
          {
            operation: 'Build a heap',
            complexity: 'O(n)'
          }
        ],
      
        keyIdea:
          'Insertion moves a value upward, while removal may move a value downward. Both operations follow at most one path through the height of the heap.'
      },
      pythonHeapq: {
        title: 'Using Python’s heapq Module',
      
        introduction:
          'Python provides the heapq module for working with heaps. The module operates on regular Python lists and creates a min-heap by default.',
      
        keyIdea:
          'In a Python min-heap, the smallest value is always stored at index 0. The remaining values follow the heap property but are not completely sorted.',
      
        example: {
          title: 'Creating and Updating a Min-Heap',
      
          code: [
            'import heapq',
            '',
            'numbers = [30, 10, 20, 50, 40]',
            '',
            'heapq.heapify(numbers)',
            'heapq.heappush(numbers, 15)',
            '',
            'smallest = heapq.heappop(numbers)',
            '',
            'print(smallest)',
            'print(numbers[0])'
          ].join('\n'),
      
          output: [
            '10',
            '15'
          ].join('\n'),
      
          lineByLine: [
            {
              line: 'import heapq',
              explanation:
                'Imports Python’s built-in heap queue module.'
            },
            {
              line: 'numbers = [30, 10, 20, 50, 40]',
              explanation:
                'Creates a regular Python list containing unsorted values.'
            },
            {
              line: 'heapq.heapify(numbers)',
              explanation:
                'Rearranges the existing list in place so it follows the min-heap property.'
            },
            {
              line: 'heapq.heappush(numbers, 15)',
              explanation:
                'Adds 15 to the heap and moves values as necessary to preserve the min-heap property.'
            },
            {
              line: 'smallest = heapq.heappop(numbers)',
              explanation:
                'Removes and returns the smallest value, which is currently stored at index 0.'
            },
            {
              line: 'print(smallest)',
              explanation:
                'Prints 10 because it was the smallest value removed from the heap.'
            },
            {
              line: 'print(numbers[0])',
              explanation:
                'Prints 15 because it is now the smallest value remaining in the heap.'
            }
          ]
        },
      
        operations: [
          {
            name: 'Build heap',
            code: 'heapq.heapify(numbers)',
            explanation:
              'Transform an existing list into a min-heap.',
            complexity: 'O(n)'
          },
          {
            name: 'Insert',
            code: 'heapq.heappush(numbers, value)',
            explanation:
              'Add a value while preserving the heap property.',
            complexity: 'O(log n)'
          },
          {
            name: 'View minimum',
            code: 'numbers[0]',
            explanation:
              'Read the smallest value without removing it.',
            complexity: 'O(1)'
          },
          {
            name: 'Remove minimum',
            code: 'heapq.heappop(numbers)',
            explanation:
              'Remove and return the smallest value.',
            complexity: 'O(log n)'
          }
        ],
      
        priorityQueue: {
          title: 'Building a Priority Queue',
      
          explanation:
            'A priority queue removes items according to priority. Python can store each entry as a tuple containing a priority number and a task.',
      
          code: [
            'import heapq',
            '',
            'tasks = []',
            '',
            'heapq.heappush(tasks, (3, "Study graphs"))',
            'heapq.heappush(tasks, (1, "Submit assignment"))',
            'heapq.heappush(tasks, (2, "Review heaps"))',
            '',
            'while tasks:',
            '    priority, task = heapq.heappop(tasks)',
            '    print(priority, task)'
          ].join('\n'),
      
          output: [
            '1 Submit assignment',
            '2 Review heaps',
            '3 Study graphs'
          ].join('\n'),
      
          steps: [
            {
              priority: 3,
              task: 'Study graphs'
            },
            {
              priority: 1,
              task: 'Submit assignment'
            },
            {
              priority: 2,
              task: 'Review heaps'
            }
          ],
      
          note:
            'Because heapq uses a min-heap, the tuple with the smallest priority number is removed first.'
        }
      },
      treeStructureSelection: {
        title: 'Choosing the Right Tree Structure',
      
        introduction:
          'Binary Search Trees, balanced trees, heaps, and priority queues solve different problems. Choosing the correct structure depends on which operations need to be efficient.',
      
        structures: [
          {
            name: 'Binary Search Tree',
            bestFor:
              'Maintaining ordered data when the tree is expected to remain reasonably balanced.',
            strength:
              'Supports ordered searching, insertion, and deletion.',
            caution:
              'An ordinary BST can become unbalanced and behave like a linked list.',
            search: 'Average O(log n)',
            modification: 'Average O(log n)'
          },
          {
            name: 'AVL Tree',
            bestFor:
              'Applications that require consistently efficient searching.',
            strength:
              'Automatically uses rotations to keep its height controlled.',
            caution:
              'Insertions and deletions may require additional rotation work.',
            search: 'O(log n)',
            modification: 'O(log n)'
          },
          {
            name: 'Min-Heap',
            bestFor:
              'Repeatedly accessing and removing the smallest value.',
            strength:
              'Provides immediate access to the minimum value at the root.',
            caution:
              'Searching for an arbitrary value may require examining the entire heap.',
            search: 'O(n)',
            modification: 'O(log n)'
          },
          {
            name: 'Priority Queue',
            bestFor:
              'Processing tasks, events, or jobs according to priority.',
            strength:
              'Removes the highest-priority item without completely sorting all items.',
            caution:
              'Priority order is different from normal insertion order.',
            search: 'Not the main purpose',
            modification: 'O(log n)'
          }
        ],
      
        scenarios: [
          {
            problem:
              'You repeatedly need to remove the smallest number from a changing collection.',
            answer: 'Min-Heap',
            reason:
              'The minimum value is stored at the root and can be removed efficiently.'
          },
          {
            problem:
              'You need consistently fast searching, insertion, and deletion in ordered data.',
            answer: 'AVL Tree',
            reason:
              'The tree automatically stays balanced, keeping its height O(log n).'
          },
          {
            problem:
              'A hospital system must process patients according to urgency.',
            answer: 'Priority Queue',
            reason:
              'Patients can be removed according to priority rather than arrival order.'
          },
          {
            problem:
              'You need ordered data but can accept slower worst-case performance.',
            answer: 'Binary Search Tree',
            reason:
              'A regular BST is simpler, although it does not automatically stay balanced.'
          }
        ],
      
        keyIdea:
          'Use a search tree when ordered searching matters. Use a heap when quickly accessing the minimum or maximum priority matters.'
      },

    
      
      selfBalancingTrees: {
        title: 'How Balanced Search Trees Stay Balanced',
      
        introduction:
          'A normal Binary Search Tree does not automatically stay balanced. Self-balancing search trees detect when one side becomes too tall and reorganize nodes while preserving the BST ordering rule.',
      
        avl: {
          title: 'AVL Trees',
      
          explanation:
            'An AVL tree is a self-balancing Binary Search Tree. For every node, the heights of the left and right subtrees are kept close to each other.',
      
          balanceFactor: {
            formula:
              'height(left subtree) - height(right subtree)',
      
            allowed:
              '-1, 0, or 1',
      
            explanation:
              'If the balance factor becomes less than -1 or greater than 1, the tree needs to be rebalanced.'
          }
        },
      
        rotationExample: {
          title: 'Rebalancing with a Rotation',
      
          introduction:
            'Suppose we insert 10, 20, and 30 in that order. A regular BST creates a chain leaning to the right.',
      
          insertionOrder: [10, 20, 30],
      
          before: {
            path: [10, 20, 30],
            height: 2,
            balanceFactor: -2
          },
      
          rotation:
            'Left rotation at node 10',
      
          after: {
            levels: [
              [20],
              [10, 30]
            ],
            height: 1
          },
      
          steps: [
            'Insert 10 as the root.',
            'Insert 20 to the right of 10.',
            'Insert 30 to the right of 20.',
            'Node 10 becomes too heavily weighted toward the right.',
            'Perform a left rotation at node 10.',
            'Node 20 becomes the new root, with 10 on the left and 30 on the right.'
          ]
        },
      
        complexity: [
          {
            operation: 'Search',
            complexity: 'O(log n)'
          },
          {
            operation: 'Insertion',
            complexity: 'O(log n)'
          },
          {
            operation: 'Deletion',
            complexity: 'O(log n)'
          }
        ],
      
        keyIdea:
          'Rotations change the shape of the tree without breaking the Binary Search Tree ordering property. Keeping the height near O(log n) keeps search, insertion, and deletion efficient.'
      },
      commonMistakes: {
        title: 'Common Tree and Heap Mistakes',

        introduction:
          'Trees and heaps follow specific structural rules. Confusing those rules can produce incorrect searches, misleading complexity claims, and unexpected priority-queue behavior.',

        mistakes: [
          {
            title: 'Treating Every Binary Tree as a Binary Search Tree',

            problem:
              'Comparing the target with the current node only tells us which direction to move when the tree follows the Binary Search Tree ordering property.',

            badCode: [
              '# This is not safe for an ordinary binary tree',
              'current = root',
              '',
              'if target < current.data:',
              '    current = current.left',
              'else:',
              '    current = current.right'
            ].join('\n'),

            goodCode: [
              'def contains(node, target):',
              '    if node is None:',
              '        return False',
              '',
              '    if node.data == target:',
              '        return True',
              '',
              '    return (',
              '        contains(node.left, target)',
              '        or contains(node.right, target)',
              '    )'
            ].join('\n'),

            lesson:
              'A general binary tree has no value-ordering guarantee, so both subtrees may need to be searched. Directional searching works only in a BST.'
          },

          {
            title: 'Assuming Every BST Search Is O(log n)',

            problem:
              'A regular Binary Search Tree can become a long chain when values are inserted in an unfavorable order.',

            badCode: [
              '# Incorrect assumption:',
              '# Every BST search is O(log n)'
            ].join('\n'),

            goodCode: [
              '# Balanced BST search: O(log n)',
              '# Unbalanced BST search: O(n)'
            ].join('\n'),

            lesson:
              'O(log n) search depends on the tree remaining balanced. In the worst case, an ordinary BST behaves like a linked list.'
          },

          {
            title: 'Assuming a Heap Is Completely Sorted',

            problem:
              'A heap only guarantees the correct relationship between each parent and its children. The entire array is not stored in sorted order.',

            badCode: [
              'import heapq',
              '',
              'values = [30, 10, 20, 40]',
              'heapq.heapify(values)',
              '',
              '# This does not print the values in sorted order',
              'print(values)'
            ].join('\n'),

            goodCode: [
              'import heapq',
              '',
              'values = [30, 10, 20, 40]',
              'heapq.heapify(values)',
              '',
              'while values:',
              '    print(heapq.heappop(values))'
            ].join('\n'),

            lesson:
              'Use repeated heappop() operations when values must be removed in priority order. Do not treat the heap array as a sorted list.'
          },

          {
            title: 'Reversing Python Priority Numbers',

            problem:
              'Python heapq is a min-heap, so the tuple with the smallest first value is removed first.',

            badCode: [
              'patients = []',
              '',
              '# Critical was given a larger number',
              'heapq.heappush(patients, (3, "Critical"))',
              'heapq.heappush(patients, (1, "Routine"))'
            ].join('\n'),

            goodCode: [
              'patients = []',
              '',
              '# Smaller number means higher priority',
              'heapq.heappush(patients, (1, "Critical"))',
              'heapq.heappush(patients, (3, "Routine"))'
            ].join('\n'),

            lesson:
              'With Python heapq, smaller priority numbers come out first. Assign priority values consistently with that rule.'
          }
        ]
      },
      practice: {
        title: 'Check Your Understanding',

        introduction:
          'Use these questions to practice tree vocabulary, BST searching, balancing, heaps, priority queues, and Big-O analysis.',

        questions: [
          {
            category: 'Tree Anatomy',

            question:
              'If the root has depth 0, what is the depth of a grandchild of the root?',

            answer: '2',

            explanation:
              'Depth counts edges from the root. One edge reaches the child, and a second edge reaches the grandchild.'
          },

          {
            category: 'BST Search',

            question:
              'In the BST 50 → 30 and 70, which direction should we move when searching for 60?',

            answer: 'Right from 50, then left from 70',

            explanation:
              'Because 60 is greater than 50, we move right to 70. Because 60 is less than 70, we then move left.'
          },

          {
            category: 'Complexity',

            question:
              'What is the search complexity of a balanced BST, and what can it become when the tree is extremely unbalanced?',

            answer: 'O(log n) when balanced; O(n) when unbalanced',

            explanation:
              'A balanced tree eliminates a large portion of the remaining nodes after each comparison. A highly unbalanced tree may behave like a linked list.'
          },

          {
            category: 'Heap Property',

            question:
              'Which value must appear at the root of a min-heap?',

            answer: 'The smallest value',

            explanation:
              'Every parent in a min-heap must be less than or equal to its children. Therefore, the minimum value is stored at the root.'
          },

          {
            category: 'Heap Array',

            question:
              'Using zero-based indexing, what are the left-child and right-child indexes of the node at index 2?',

            code: [
              'left_child = 2 * i + 1',
              'right_child = 2 * i + 2'
            ].join('\n'),

            answer: 'Left child: 5; right child: 6',

            explanation:
              'Substituting i = 2 gives 2 × 2 + 1 = 5 and 2 × 2 + 2 = 6.'
          },

          {
            category: 'Python heapq',

            question:
              'What value is removed by the first heappop() call?',

            code: [
              'import heapq',
              '',
              'values = [30, 10, 20]',
              'heapq.heapify(values)',
              '',
              'print(heapq.heappop(values))'
            ].join('\n'),

            answer: '10',

            explanation:
              'Python heapq implements a min-heap, so heappop() removes the smallest value.'
          },

          {
            category: 'Priority Queue',

            question:
              'Which task is removed first from this priority queue?',

            code: [
              'import heapq',
              '',
              'tasks = []',
              'heapq.heappush(tasks, (3, "Study"))',
              'heapq.heappush(tasks, (1, "Submit assignment"))',
              'heapq.heappush(tasks, (2, "Review"))',
              '',
              'print(heapq.heappop(tasks))'
            ].join('\n'),

            answer: '(1, "Submit assignment")',

            explanation:
              'Tuples are compared beginning with their first value. Because 1 is the smallest priority number, that task is removed first.'
          },

          {
            category: 'Heap Complexity',

            question:
              'What are the Big-O complexities of viewing the minimum and inserting into a min-heap?',

            answer: 'View minimum: O(1); insert: O(log n)',

            explanation:
              'The minimum is already stored at index 0. An inserted value may need to move upward through the height of the heap.'
          },

          {
            category: 'Structure Selection',

            question:
              'Which structure should you choose when you repeatedly need the smallest-priority item?',

            answer: 'A min-heap priority queue',

            explanation:
              'A min-heap keeps the smallest-priority item at the root and supports efficient insertion and removal.'
          },

          {
            category: 'AVL Trees',

            question:
              'Why does an AVL tree perform rotations?',

            answer: 'To restore balance while preserving BST ordering',

            explanation:
              'Rotations change the shape of the tree without breaking the Binary Search Tree property. This keeps the height near O(log n).'
          }
        ]
      },
      

  }