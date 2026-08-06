export const sortingLesson = {
    id: 'sorting',
  
    title: 'Sorting Algorithms',
  
    subtitle:
      'Learn how algorithms organize data and compare different sorting strategies.',
  
  
    introduction:
      'Sorting is the process of arranging data into a specific order. Sorting algorithms are fundamental in computer science because organized data can be searched, analyzed, and processed more efficiently. In this lesson, you will learn how common sorting algorithms work and how their efficiency compares using Big-O notation.',
  
  
    objectives: [
      'Explain why sorting is important in computer science.',
      'Understand how comparison-based sorting works.',
      'Trace Bubble Sort step by step.',
      'Trace Selection Sort step by step.',
      'Explain how Insertion Sort builds a sorted portion of a list.',
      'Understand how Merge Sort uses divide and conquer.',
      'Understand how Quick Sort uses partitioning and recursion.',
      'Compare sorting algorithms using Big-O notation.',
    ],
  
  
    vocabulary: [
  
      {
        term: 'Sorting',
  
        definition:
          'The process of arranging data into a specific order, such as smallest to largest or alphabetical order.',
      },
  
  
      {
        term: 'Comparison',
  
        definition:
          'Checking the relationship between two values to determine their order.',
      },
  
  
      {
        term: 'Swap',
  
        definition:
          'The process of exchanging the positions of two elements in a collection.',
      },
  
  
      {
        term: 'In-place Algorithm',
  
        definition:
          'An algorithm that rearranges data using little or no additional memory.',
      },
  
  
      {
        term: 'Stable Sort',
  
        definition:
          'A sorting algorithm that keeps equal elements in the same relative order they originally appeared.',
      },
  
  
      {
        term: 'Divide and Conquer',
  
        definition:
          'A strategy that breaks a problem into smaller problems, solves them, and combines the results.',
      },
  
  
      {
        term: 'Partition',
  
        definition:
          'The process of dividing data into sections based on a chosen value called a pivot.',
      },
  
    ],
  
  
    algorithms: [
  
      {
        name: 'Bubble Sort',
  
        notation: 'O(n²)',
  
  
        explanation:
          'Bubble Sort repeatedly compares neighboring elements and swaps them when they are in the wrong order. After each pass, the largest remaining value moves toward the end of the list.',
  
  
        code: [
          'def bubble_sort(arr):',
          '    n = len(arr)',
          '',
          '    for i in range(n):',
          '        for j in range(0, n - i - 1):',
          '            if arr[j] > arr[j + 1]:',
          '                arr[j], arr[j + 1] = arr[j + 1], arr[j]',
        ].join('\n'),
  
  
        steps: [
          'Compare neighboring elements.',
          'Swap elements if they are in the wrong order.',
          'Continue passing through the list.',
          'Largest values move toward the end.',
        ],
  
  
        why:
          'The algorithm uses nested loops. Each element may be compared with many other elements, creating approximately n × n comparisons.',
      },
      {
        name: 'Selection Sort',
  
        notation: 'O(n²)',
  
  
        explanation:
          'Selection Sort repeatedly searches for the smallest element in the unsorted portion of the list and places it in the correct position.',
  
  
        code: [
          'def selection_sort(arr):',
          '    n = len(arr)',
          '',
          '    for i in range(n):',
          '        min_index = i',
          '',
          '        for j in range(i + 1, n):',
          '            if arr[j] < arr[min_index]:',
          '                min_index = j',
          '',
          '        arr[i], arr[min_index] = arr[min_index], arr[i]',
        ].join('\n'),
  
  
        steps: [
          'Start at the first unsorted position.',
          'Search the remaining list for the smallest value.',
          'Swap the smallest value into the correct position.',
          'Repeat until the list is sorted.',
        ],
  
  
        why:
          'The algorithm searches through the remaining elements for every position. This creates nested loops resulting in approximately n² comparisons.',
      },
      {
        name: 'Insertion Sort',
  
        notation: 'O(n²)',
  
  
        explanation:
          'Insertion Sort builds a sorted portion of the list one element at a time. Each new element is inserted into its correct location among the previously sorted elements.',
  
  
        code: [
          'def insertion_sort(arr):',
          '    for i in range(1, len(arr)):',
          '        current = arr[i]',
          '        j = i - 1',
          '',
          '        while j >= 0 and arr[j] > current:',
          '            arr[j + 1] = arr[j]',
          '            j -= 1',
          '',
          '        arr[j + 1] = current',
        ].join('\n'),
  
  
        steps: [
          'Assume the first element is already sorted.',
          'Take the next element.',
          'Move larger values one position forward.',
          'Insert the element into the correct location.',
        ],
  
  
        why:
          'In the worst case, each element may need to be compared with every previous element, creating quadratic growth.',
      },
      {
        name: 'Merge Sort',
  
        notation: 'O(n log n)',
  
  
        explanation:
          'Merge Sort uses divide and conquer. It splits the list into smaller halves, recursively sorts each half, and then merges the sorted halves together.',
  
  
        code: [
          'def merge_sort(arr):',
          '    if len(arr) <= 1:',
          '        return arr',
          '',
          '    middle = len(arr) // 2',
          '    left = merge_sort(arr[:middle])',
          '    right = merge_sort(arr[middle:])',
          '',
          '    return merge(left, right)',
        ].join('\n'),
  
  
        steps: [
          'Divide the list into two halves.',
          'Recursively sort each half.',
          'Merge the sorted halves together.',
          'Continue until the entire list is sorted.',
        ],
  
  
        why:
          'The list is divided log n times, and each level requires n work to merge the results, creating O(n log n).',
      },
      {
        name: 'Quick Sort',
  
        notation: 'O(n log n)',
  
  
        explanation:
          'Quick Sort selects a pivot value and partitions the list into smaller values and larger values. It then recursively sorts the partitions.',
  
  
        code: [
          'def quick_sort(arr):',
          '    if len(arr) <= 1:',
          '        return arr',
          '',
          '    pivot = arr[0]',
          '',
          '    smaller = [x for x in arr[1:] if x <= pivot]',
          '    larger = [x for x in arr[1:] if x > pivot]',
          '',
          '    return quick_sort(smaller) + [pivot] + quick_sort(larger)',
        ].join('\n'),
  
  
        steps: [
          'Choose a pivot value.',
          'Partition elements into smaller and larger groups.',
          'Recursively sort each group.',
          'Combine the results.',
        ],
  
  
        why:
          'The average case divides the problem into smaller sections, producing O(n log n). The worst case occurs when partitions are extremely uneven.',
      },
      
  
    ],
  
  }