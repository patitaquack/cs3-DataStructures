export const linkedListsLesson = {

    title: "Linked Lists",
  
    subtitle:
      "Understand nodes, pointers, insertion, deletion, and linked list complexity.",
  
  
    introduction:
      "A linked list is a linear data structure where elements are stored inside nodes. Unlike arrays, linked list elements are not stored next to each other in memory. Each node stores data and a reference to the next node.",
  
  
    objectives: [
  
      "Understand how linked lists store data using nodes.",
  
      "Explain the difference between arrays and linked lists.",
  
      "Create and connect nodes together.",
  
      "Traverse a linked list from head to tail.",
  
      "Insert and delete nodes efficiently.",
  
      "Analyze linked list operations using Big-O notation."
  
    ],
  
  
    vocabulary: [
  
      {
        term: "Node",
        definition:
          "A container that stores a value and a reference to another node."
      },
  
      {
        term: "Head",
        definition:
          "The first node in a linked list. The head provides access to the entire structure."
      },
  
      {
        term: "Tail",
        definition:
          "The final node in a linked list. Its next reference points to None."
      },
  
      {
        term: "Pointer",
        definition:
          "A reference that stores the location of another node."
      },
  
      {
        term: "Traversal",
        definition:
          "The process of visiting each node from the beginning to the end of the list."
      }
  
    ],
  
  
  
    comparison: {
  
      title: "Arrays vs Linked Lists",
  
      rows: [
  
        {
          feature: "Memory",
          array:
            "Stored continuously in memory",
          linkedList:
            "Nodes can exist anywhere in memory"
        },
  
  
        {
          feature: "Access",
          array:
            "Fast random access O(1)",
          linkedList:
            "Must traverse nodes O(n)"
        },
  
  
        {
          feature: "Insertion",
          array:
            "Usually O(n) because elements shift",
          linkedList:
            "O(1) when location is known"
        },
  
  
        {
          feature: "Deletion",
          array:
            "Usually O(n)",
          linkedList:
            "O(1) when the previous node is known; O(n) if searching is required"
        }
  
      ]
  
    },
  
  
  
    nodeExample: {
  
      title: "Creating a Node",
  
      explanation:
        "A linked list is built by connecting nodes together. Each node contains data and a pointer to the next node.",
  
  
      code:
  `class Node:
  
      def __init__(self, data):
          self.data = data
          self.next = None
  
  
  
  node1 = Node(10)
  node2 = Node(20)
  
  node1.next = node2`,
  
  
      steps: [
  
        "Create node1 containing value 10.",
  
        "Create node2 containing value 20.",
  
        "Connect node1 to node2 using the next pointer.",
  
        "The list now looks like: 10 → 20 → None"
  
      ]
  
    },
  
  
  
  
    traversal: {
  
      title:
        "Traversing a Linked List",
  
      explanation:
        "Traversal begins at the head node and follows each next pointer until reaching None.",
  
  
      code:
  `current = head
  
  while current:
  
      print(current.data)
  
      current = current.next`,
  
  
      steps: [
  
        "Start with the head node.",
  
        "Read the current node's data.",
  
        "Move to the next node.",
  
        "Stop when current becomes None."
  
      ]
  
    },
  
  
  
  
    insertion: {
        title:
          "Insert a Node at the Beginning",
      
        explanation:
          "Adding a node at the beginning only requires changing two references.",
      
          code: [
            "new_node.next = head",
            "head = new_node"
          ].join("\n"),
      
        steps: [
          "Create a new node.",
          "Point the new node to the current head.",
          "Move head to the new node."
        ],
      
        visualization: {
          before: [10, 20, 30],
          newValue: 5,
          after: [5, 10, 20, 30]
        }
      },
      deletion: {
        title:
          "Delete a Node",
      
        explanation:
          "Deletion requires changing references so the previous node skips over the removed node.",
      
        code:
          `previous.next = current.next`,
      
        steps: [
          "Find the node before the one being removed.",
          "Change the previous node's next reference.",
          "The removed node is no longer connected to the list."
        ],

        visualization: {
            before: [10, 20, 30],
            removedValue: 20,
            after: [10, 30]
          }
      },

      search: {
        title:
          "Searching a Linked List",
      
        explanation:
          "Searching starts at the head and checks one node at a time until the target is found or the end of the list is reached.",
      
        target: 30,
      
        code: [
          "def search(head, target):",
          "    current = head",
          "",
          "    while current is not None:",
          "        if current.data == target:",
          "            return True",
          "",
          "        current = current.next",
          "",
          "    return False"
        ].join("\n"),
      
        lineByLine: [
          {
            line: "current = head",
            explanation:
              "Begin the search at the first node."
          },
          {
            line: "while current is not None:",
            explanation:
              "Continue searching while there is still a node to examine."
          },
          {
            line: "if current.data == target:",
            explanation:
              "Compare the value stored in the current node with the target."
          },
          {
            line: "return True",
            explanation:
              "Stop immediately when the target is found."
          },
          {
            line: "current = current.next",
            explanation:
              "Move current forward to the next node."
          },
          {
            line: "return False",
            explanation:
              "Return False if the end of the list is reached without finding the target."
          }
        ],
      
        trace: [
          {
            node: 10,
            message:
              "10 is not 30 → move to the next node."
          },
          {
            node: 20,
            message:
              "20 is not 30 → move to the next node."
          },
          {
            node: 30,
            message:
              "30 equals the target → found!"
          }
        ],
      
        why:
          "In the worst case, every node must be examined, so searching a linked list takes O(n) time."
      },
      commonMistakes: {
        title: "Common Linked List Mistakes",
      
        introduction:
          "Linked lists depend on references between nodes. A small reference mistake can disconnect part of the list or cause a loop to run forever.",
      
        mistakes: [
          {
            title: "Forgetting to Move to the Next Node",
      
            problem:
              "If current never changes inside a traversal loop, Python keeps examining the same node forever.",
      
            badCode: [
              "current = head",
              "",
              "while current is not None:",
              "    print(current.data)"
            ].join("\n"),
      
            goodCode: [
              "current = head",
              "",
              "while current is not None:",
              "    print(current.data)",
              "    current = current.next"
            ].join("\n"),
      
            lesson:
              "During traversal, current must move forward using current = current.next."
          },
      
          {
            title: "Losing the Rest of the List",
      
            problem:
              "Changing head before connecting a new node can make the original list unreachable.",
      
            badCode: [
              "head = new_node",
              "new_node.next = head"
            ].join("\n"),
      
            goodCode: [
              "new_node.next = head",
              "head = new_node"
            ].join("\n"),
      
            lesson:
              "Connect the new node to the existing list before changing head."
          },
      
          {
            title: "Using null Instead of None",
      
            problem:
              "Python uses None to represent the absence of a next node. The word null is used in some other programming languages.",
      
            badCode:
              "self.next = null",
      
            goodCode:
              "self.next = None",
      
            lesson:
              "For this Python-focused course, remember: the end of a linked list points to None."
          },
      
          {
            title: "Assuming Linked Lists Have O(1) Index Access",
      
            problem:
              "Unlike Python lists, a linked list cannot immediately jump to an arbitrary position.",
      
            badCode:
              "Assume we can instantly access node 500",
      
            goodCode: [
              "current = head",
              "",
              "while current is not None:",
              "    current = current.next"
            ].join("\n"),
      
            lesson:
              "To reach a later node, we must follow next references from the head. Access by position is therefore O(n)."
          }
        ]
      },

      practice: {
        title: "Check Your Understanding",
      
        introduction:
          "Use these questions to practice tracing references, predicting results, and analyzing linked list complexity.",
      
        questions: [
          {
            category: "Tracing",
      
            question:
              "Suppose the list is 10 → 20 → 30 → None. What value does current contain after moving forward twice?",
      
            code: [
              "current = head",
              "current = current.next",
              "current = current.next"
            ].join("\n"),
      
            answer:
              "30",
      
            explanation:
              "current begins at 10. The first current.next moves to 20. The second moves to 30."
          },
      
          {
            category: "Predict the Output",
      
            question:
              "What does this traversal print if the list is 4 → 8 → 12 → None?",
      
            code: [
              "current = head",
              "",
              "while current is not None:",
              "    print(current.data)",
              "    current = current.next"
            ].join("\n"),
      
            answer:
              "4, 8, 12",
      
            explanation:
              "The loop begins at the head and prints each node before moving to the next node."
          },
      
          {
            category: "Big-O",
      
            question:
              "What is the worst-case time complexity of searching a singly linked list containing n nodes?",
      
            answer:
              "O(n)",
      
            explanation:
              "The target might be the final node or might not exist at all, so the algorithm may need to examine every node."
          },
      
          {
            category: "Insertion",
      
            question:
              "Starting with 10 → 20 → 30 → None, what does the list become after inserting 5 at the head?",
      
            code: [
              "new_node.next = head",
              "head = new_node"
            ].join("\n"),
      
            answer:
              "5 → 10 → 20 → 30 → None",
      
            explanation:
              "The new node first points to the old head, 10. Then head is changed so that it points to 5."
          },
      
          {
            category: "Deletion",
      
            question:
              "If previous points to node 10 and current points to node 20, what happens after this statement?",
      
            code:
              "previous.next = current.next",
      
            answer:
              "The list changes from 10 → 20 → 30 to 10 → 30.",
      
            explanation:
              "current.next points to 30. Assigning that reference to previous.next makes node 10 point directly to node 30, bypassing node 20."
          },
      
          {
            category: "Debugging",
      
            question:
              "What is wrong with this traversal?",
      
            code: [
              "current = head",
              "",
              "while current is not None:",
              "    print(current.data)"
            ].join("\n"),
      
            answer:
              "current never moves to the next node.",
      
            explanation:
              "Without current = current.next, the loop repeatedly examines the same node and never reaches None."
          }
        ]
      },

    
    visualization: {

        title:
        "How Nodes Connect Together",
        
        explanation:
        "Each node stores data and a reference to the next node. The head points to the first node, and each node points forward until reaching None.",
        
        
        nodes: [
        
        {
        value: 10
        },
        
        {
        value: 20
        },
        
        {
        value: 30
        }
        
        ]
        
        },
  
  
  
  
    bigO: {
  
      title:
        "Linked List Complexity",
  
      introduction:
        "Linked lists are efficient when inserting and deleting nodes, but slower when searching for values.",
  
  
      keyIdea:
        "Linked lists trade fast access for fast modification.",
  
  
      examples: [
  
        {
  
          notation: "O(1)",
  
          name:
            "Insert at Head",
  
          explanation:
            "Only the head pointer and new node reference need to change.",
  
  
            code: [
                "new_node.next = head",
                "head = new_node"
              ].join("\n"),
  
  
          lineByLine: [
  
            {
              line:
                "new_node.next = head",
  
              explanation:
                "Connect the new node to the existing list."
            },
  
  
            {
              line:
                "head = new_node",
  
              explanation:
                "Make the new node the first node."
            }
  
          ],
  
  
          why:
            "The number of nodes does not matter. Only two references change."
  
        },
  
  
        {
  
          notation: "O(n)",
  
          name:
            "Search",
  
          explanation:
            "The list may need to be scanned from the beginning until the value is found.",
  
  
          code:
  `current = head
  
  while current:
  
      if current.data == target:
          return True
  
      current = current.next`,
  
  
          lineByLine: [
  
            {
              line:
                "current = head",
  
              explanation:
                "Start searching from the first node."
            },
  
  
            {
              line:
                "current = current.next",
  
              explanation:
                "Move to the next node."
            }
  
          ],
  
  
          why:
            "In the worst case, every node must be checked."
  
        }
  
      ]
  
    }
  
  }