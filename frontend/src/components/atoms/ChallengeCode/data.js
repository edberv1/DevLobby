export const mockQuestions = [
    {
      id: 1,
      name: "Check Prime Number",
      content: `Write a JavaScript function that takes a number as input and returns true if the number is a prime number, otherwise returns false.`,
      difficulty: "Easy"
    },
    {
      id: 2,
      name: "Generate Sequence of Numbers",
      content: `Write a JavaScript function that takes a positive integer n as an argument and returns all numbers from 1 to n as an array.
    
      For example, for n = 5, the function should return the array [1, 2, 3, 4, 5].
    
      Make sure to solve this question using only JavaScript and without using any built-in array methods to generate the array.
    
      This question encourages participants to write a JavaScript function to generate an array of integers from 1 to a given number n.`,
      difficulty: "Easy"
    },
    {
      id: 3,
      name: "Count Vowels",
      content: `Write a JavaScript function that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string.`,
      difficulty: "Easy"
    },
    {
      id: 4,
      name: "Find Largest Element",
      content: `Write a JavaScript function that takes an array of numbers as input and returns the largest element in the array.`,
      difficulty: "Medium"
    },
    {
      id: 5,
      name: "Array Prototype Last",
      content: `Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
  
      You may assume the array is the output of JSON.parse.
    
      Example 1:
    
      Input: nums = [null, {}, 3]
      Output: 3
      Explanation: Calling nums.last() should return the last element: 3.
      Example 2:
    
      Input: nums = []
      Output: -1
      Explanation: Because there are no elements, return -1.
    
      Constraints:
    
      arr is a valid JSON array
      0 <= arr.length <= 1000`,
      difficulty: "Medium"
    },
    {
      id: 6,
      name: "Check Palindrome",
      content: `Write a JavaScript function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), otherwise returns false.`,
      difficulty: "Medium"
    },
    {
      id: 7,
      name: "Binary Subarrays With Sum",
      content: `Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
    
      A subarray is a contiguous part of the array.
    
      Example 1:
    
      Input: nums = [1,0,1,0,1], goal = 2
      Output: 4
      Explanation: The 4 subarrays are bolded and underlined below:
      [1,0,1,0,1]
      [1,0,1,0,1]
      [1,0,1,0,1]
      [1,0,1,0,1]
      Example 2:
    
      Input: nums = [0,0,0,0,0], goal = 0
      Output: 15
    
      Constraints:
    
      1 <= nums.length <= 3 * 10^4
      nums[i] is either 0 or 1.
      0 <= goal <= nums.length`,
      difficulty: "Hard"
    },
    {
      id: 8,
      name: "Fibonacci Sequence",
      content: `Write a JavaScript function that generates an array containing the Fibonacci sequence up to a given number n.`,
      difficulty: "Hard"
    },
    {
      id: 9,
      name: "Array Intersection",
      content: `Write a JavaScript function to find the intersection of two arrays. The intersection of two arrays is the common elements that appear in both arrays.`,
      difficulty: "Hard"
    },
    {
      id: 10,
      name: "Unique Paths",
      content: `A robot is located at the top-left corner of a m x n grid.
  
      The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid.
  
      How many possible unique paths are there?
      
      Example 1:
      
      Input: m = 3, n = 7
      Output: 28
      Example 2:
      
      Input: m = 3, n = 2
      Output: 3
      Explanation:
      From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
      1. Right -> Down -> Down
      2. Down -> Down -> Right
      3. Down -> Right -> Down`,
      difficulty: "Hard"
    }
  ];
  