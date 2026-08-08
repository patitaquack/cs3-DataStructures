export const hashingLesson = {
    id: 'hashing',
  
    title: 'Hashing and Python Collections',
  
    subtitle:
      'Learn how hash tables power Python dictionaries and sets, and how to choose the right collection for a problem.',
  
    introduction:
      'Hashing is a technique for locating data efficiently. Instead of searching through every item one at a time, a hash function helps determine where information should be stored and where it can later be found. In Python, dictionaries and sets use hashing behind the scenes.',
  
    objectives: [
      'Explain what hashing is and why it is useful.',
      'Describe the purpose of a hash function.',
      'Explain how a hash table stores and retrieves data.',
      'Use Python dictionaries to store key-value pairs.',
      'Use Python sets to store unique values.',
      'Explain what happens when two values create a collision.',
      'Compare lists, sets, and dictionaries.',
      'Analyze common dictionary and set operations using Big-O notation.',
      'Choose an appropriate Python collection for a computational problem.'
    ],
  
    vocabulary: [
      {
        term: 'Hashing',
        definition:
          'A technique that transforms a key into information that helps determine where the associated data should be stored or located.'
      },
  
      {
        term: 'Hash function',
        definition:
          'A function that takes a key and produces a hash value used by a hash table to help locate that key.'
      },
  
      {
        term: 'Hash table',
        definition:
          'A data structure that uses hashing to organize data for efficient insertion, lookup, and deletion.'
      },
  
      {
        term: 'Key',
        definition:
          'A value used to identify and retrieve information stored in a mapping such as a Python dictionary.'
      },
  
      {
        term: 'Value',
        definition:
          'The information associated with a key in a key-value pair.'
      },
  
      {
        term: 'Dictionary',
        definition:
          'A Python mapping that stores data as key-value pairs.'
      },
  
      {
        term: 'Set',
        definition:
          'A Python collection that stores unique elements and supports fast membership testing on average.'
      },
  
      {
        term: 'Collision',
        definition:
          'A situation where different keys initially compete for the same location in a hash table.'
      },
  
      {
        term: 'Bucket',
        definition:
          'A conceptual location in a hash table associated with storing or locating entries.'
      },
  
      {
        term: 'Hashable',
        definition:
          'A Python object that has a hash value that remains stable during its lifetime and can therefore be used as a dictionary key or set element.'
      }
    ],
    hashingProcess: {
        title: 'How Hashing Works',
      
        introduction:
          'A hash table uses a key to determine where information should be stored. The example below uses a simplified model so we can see the process clearly.',
      
        steps: [
          {
            label: 'Key',
            value: '"name"',
            explanation:
              'We begin with the dictionary key we want to store or find.'
          },
      
          {
            label: 'Hash Function',
            value: 'hash("name")',
            explanation:
              'Python computes a hash value from the key.'
          },
      
          {
            label: 'Table Location',
            value: 'bucket',
            explanation:
              'The hash value helps Python determine where to look inside the hash table.'
          },
      
          {
            label: 'Stored Value',
            value: '"Damaris"',
            explanation:
              'Once the key is located, Python can retrieve the value associated with it.'
          }
        ],
      
        example: [
          'student = {',
          '    "name": "Damaris",',
          '    "major": "Computer Science"',
          '}',
          '',
          'print(student["name"])'
        ].join('\n'),
      
        result:
          'Damaris',
      
        note:
          'This is a simplified conceptual model. Python dictionaries use a more sophisticated internal implementation, but the important idea is that hashing helps Python locate keys efficiently.'
      },
      dictionary: {
        title: 'Python Dictionaries (dict)',
      
        introduction:
          'A dictionary stores information as key-value pairs. Instead of accessing information by a numeric position, we use a key that describes the value we want.',
      
        keyIdea:
          'Dictionary keys must be unique and hashable. Values do not need to be unique.',
      
        example: [
          'student = {',
          '    "name": "Damaris",',
          '    "major": "Computer Science"',
          '}',
          '',
          'student["year"] = 3',
          '',
          'print(student["name"])',
          'print(student["year"])'
        ].join('\n'),
      
        output: [
          'Damaris',
          '3'
        ].join('\n'),
      
        lineByLine: [
          {
            line: 'student = { ... }',
            explanation:
              'Creates a dictionary named student. The dictionary contains key-value pairs inside curly braces.'
          },
      
          {
            line: '"name": "Damaris"',
            explanation:
              'The key is "name" and its associated value is "Damaris".'
          },
      
          {
            line: '"major": "Computer Science"',
            explanation:
              'The key "major" is associated with the value "Computer Science".'
          },
      
          {
            line: 'student["year"] = 3',
            explanation:
              'Adds a new key called "year" to the dictionary and stores the value 3.'
          },
      
          {
            line: 'print(student["name"])',
            explanation:
              'Looks up the key "name" and prints the value associated with it.'
          },
      
          {
            line: 'print(student["year"])',
            explanation:
              'Looks up the newly added "year" key and prints its value.'
          }
        ],
      
        operations: [
          {
            name: 'Lookup',
            code: 'student["name"]',
            explanation:
              'Retrieve the value associated with a key.',
            complexity: 'Average O(1)'
          },
      
          {
            name: 'Insert',
            code: 'student["year"] = 3',
            explanation:
              'Add a new key-value pair.',
            complexity: 'Average O(1)'
          },
      
          {
            name: 'Update',
            code: 'student["year"] = 4',
            explanation:
              'Assign a new value to an existing key.',
            complexity: 'Average O(1)'
          },
      
          {
            name: 'Membership',
            code: '"name" in student',
            explanation:
              'Check whether a key exists in the dictionary.',
            complexity: 'Average O(1)'
          },
      
          {
            name: 'Delete',
            code: 'del student["major"]',
            explanation:
              'Remove a key and its associated value.',
            complexity: 'Average O(1)'
          }
        ],
      
        safeLookup: {
          title: 'Avoiding KeyError with get()',
      
          explanation:
            'Using square brackets with a missing key raises a KeyError. The get() method lets us safely request a key and provide a default value if the key does not exist.',
      
          riskyCode:
            'student["gpa"]',
      
          safeCode:
            'student.get("gpa", "Not recorded")',
      
          result:
            'Not recorded'
        }
      },

      sets: {
        title: 'Python Sets (set)',
      
        introduction:
          'A set is a collection of unique values. Sets are especially useful when we need to remove duplicates or quickly determine whether a value has already been seen.',
      
        keyIdea:
          'Sets store unique, hashable elements. Because sets use hashing, membership testing is O(1) on average.',
      
        example: [
          'numbers = [1, 2, 2, 3, 3, 4]',
          '',
          'unique_numbers = set(numbers)',
          '',
          'print(len(unique_numbers))',
          'print(3 in unique_numbers)'
        ].join('\n'),
      
        output: [
          '4',
          'True'
        ].join('\n'),
      
        lineByLine: [
          {
            line: 'numbers = [1, 2, 2, 3, 3, 4]',
            explanation:
              'Creates a Python list containing repeated values.'
          },
      
          {
            line: 'unique_numbers = set(numbers)',
            explanation:
              'Converts the list into a set. Duplicate values are automatically removed.'
          },
      
          {
            line: 'print(len(unique_numbers))',
            explanation:
              'Prints the number of unique values. There are four: 1, 2, 3, and 4.'
          },
      
          {
            line: 'print(3 in unique_numbers)',
            explanation:
              'Checks whether 3 is stored in the set. Because 3 exists, Python returns True.'
          }
        ],
      
        operations: [
          {
            name: 'Add',
            code: 'unique_numbers.add(5)',
            explanation:
              'Add a value to the set.',
            complexity: 'Average O(1)'
          },
      
          {
            name: 'Membership',
            code: '3 in unique_numbers',
            explanation:
              'Check whether a value exists in the set.',
            complexity: 'Average O(1)'
          },
      
          {
            name: 'Remove',
            code: 'unique_numbers.remove(3)',
            explanation:
              'Remove an existing value. remove() raises a KeyError if the value does not exist.',
            complexity: 'Average O(1)'
          },
      
          {
            name: 'Discard',
            code: 'unique_numbers.discard(99)',
            explanation:
              'Remove a value if it exists. Unlike remove(), discard() does not raise an error when the value is missing.',
            complexity: 'Average O(1)'
          }
        ],
      
        membershipComparison: {
          title: 'List Search vs Set Membership',
      
          explanation:
            'A list may need to examine values one at a time. A set uses hashing to locate a value much more directly on average.',
      
          list: {
            code: 'target in values_list',
            complexity: 'O(n)',
            reason:
              'In the worst case, Python may need to examine every item in the list.'
          },
      
          set: {
            code: 'target in values_set',
            complexity: 'Average O(1)',
            reason:
              'Hashing allows Python to locate the value directly on average.'
          }
        }
      },
      collectionComparison: {
        title: 'Choosing the Right Python Collection',
      
        introduction:
          'Lists, sets, and dictionaries solve different kinds of problems. Choosing the correct structure can make your program clearer and more efficient.',
      
        rows: [
          {
            feature: 'Stores',
            list: 'A sequence of values',
            set: 'Unique values',
            dictionary: 'Key-value pairs'
          },
          {
            feature: 'Duplicates',
            list: 'Allowed',
            set: 'Not allowed',
            dictionary: 'Keys must be unique; values may repeat'
          },
          {
            feature: 'How we access data',
            list: 'By index, such as items[0]',
            set: 'No index-based access',
            dictionary: 'By key, such as student["name"]'
          },
          {
            feature: 'Membership testing',
            list: 'O(n)',
            set: 'Average O(1)',
            dictionary: 'Average O(1) for keys'
          },
          {
            feature: 'Best used when',
            list: 'Order and position matter',
            set: 'Uniqueness or fast membership testing matters',
            dictionary: 'Values need to be associated with meaningful keys'
          }
        ],
      
        scenarios: [
          {
            problem: 'Store students in registration order',
            choice: 'List',
            reason:
              'A list preserves sequence and allows values to be accessed by position.'
          },
          {
            problem: 'Check whether a username has already been used',
            choice: 'Set',
            reason:
              'A set stores unique values and provides average O(1) membership testing.'
          },
          {
            problem: 'Store each student ID with that student’s grade',
            choice: 'Dictionary',
            reason:
              'A dictionary connects each student ID key with its corresponding grade value.'
          }
        ]
      },
      collisions: {
        title: 'Understanding Hash Collisions',
      
        introduction:
          'A collision happens when two different keys are directed to the same location in a hash table. Hash tables must be able to handle collisions without losing either value.',
      
        keyIdea:
          'A collision does not mean the keys are equal. It means two different keys initially compete for the same table location.',
      
        teachingModel: {
          title: 'A Simplified Example',
      
          explanation:
            'To make collisions easy to see, imagine a small hash table with 5 locations. For this teaching example, we will use key % 5 to choose a location.',
      
          formula:
            'bucket = key % 5',
      
          entries: [
            {
              key: 12,
              calculation: '12 % 5 = 2',
              bucket: 2,
              value: 'Student A'
            },
            {
              key: 17,
              calculation: '17 % 5 = 2',
              bucket: 2,
              value: 'Student B'
            }
          ]
        },
      
        whatHappens: [
          {
            step: 1,
            title: 'Hash the first key',
            explanation:
              'Key 12 maps to location 2, so its value can be stored there.'
          },
          {
            step: 2,
            title: 'Hash the second key',
            explanation:
              'Key 17 also maps to location 2.'
          },
          {
            step: 3,
            title: 'Detect the collision',
            explanation:
              'The keys are different, but they initially want the same location.'
          },
          {
            step: 4,
            title: 'Resolve the collision',
            explanation:
              'The hash table uses its collision-handling strategy so both keys and values can still be stored and retrieved correctly.'
          }
        ],
      
        pythonExample: [
          'students = {',
          '    12: "Student A",',
          '    17: "Student B"',
          '}',
          '',
          'print(students[12])',
          'print(students[17])'
        ].join('\n'),
      
        output: [
          'Student A',
          'Student B'
        ].join('\n'),
      
        pythonNote:
          'Python dictionaries handle collisions internally. As Python programmers, we normally do not resolve dictionary collisions ourselves. The important concept is understanding why collisions can happen and why a hash table needs a strategy for handling them.',
      
        warning:
          'The key % 5 calculation above is only a simplified teaching model. It is not a description of the full algorithm Python uses internally for dictionaries.'
      },
      
      hashComplexity: {
        title: 'Hash Table Time and Space Complexity',
      
        introduction:
          'Dictionaries and sets are popular because many of their most common operations are O(1) on average. However, average-case performance and worst-case performance are not always the same.',
      
        keyIdea:
          'Average O(1) means the operation usually takes constant time. It does not mean the operation is guaranteed to take exactly the same amount of work every time.',
      
        averageVsWorst: {
          average: {
            title: 'Average Case',
            complexity: 'O(1)',
            explanation:
              'With a well-distributed hash table, Python can usually locate a key or set element without examining every stored item.'
          },
      
          worst: {
            title: 'Worst Case',
            complexity: 'O(n)',
            explanation:
              'In an unfavorable situation involving many collisions, an operation may require substantially more work and can approach linear time.'
          }
        },
      
        operations: [
          {
            operation: 'Dictionary lookup',
            example: 'student["name"]',
            average: 'O(1)',
            worst: 'O(n)'
          },
          {
            operation: 'Dictionary insert/update',
            example: 'student["year"] = 3',
            average: 'O(1)',
            worst: 'O(n)'
          },
          {
            operation: 'Dictionary deletion',
            example: 'del student["major"]',
            average: 'O(1)',
            worst: 'O(n)'
          },
          {
            operation: 'Set membership',
            example: 'value in values',
            average: 'O(1)',
            worst: 'O(n)'
          },
          {
            operation: 'Set add',
            example: 'values.add(value)',
            average: 'O(1)',
            worst: 'O(n)'
          },
          {
            operation: 'List membership',
            example: 'value in items',
            average: 'O(n)',
            worst: 'O(n)'
          }
        ],
      
        spaceComplexity: {
          title: 'Space Complexity',
      
          complexity: 'O(n)',
      
          explanation:
            'A dictionary or set needs memory to store its elements and additional hash-table storage. As the number of stored items n grows, the required memory also grows.'
        },
      
        takeaway:
          'For CS3 problems, remember the phrase average O(1) for dictionary key lookup and set membership. Also remember that storing n items requires O(n) space.'
      }
  }
  