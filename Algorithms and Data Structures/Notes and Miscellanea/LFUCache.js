// Least frequently used cache

// Time constraints: O(1), constant time
// LFUCache has a capacity
// If we reach capacity, we must remove the least frequently used cache

// What does it mean to be least frequently used:
// -The thing that was accessed least (get called least times)
// -Thing used longest time ago (if accessed count is equal)

Use an object to reference key - node pairs
Use an object to use linked lists and numbers to keep track of least accessed

obj = {
  1: linked list
  2: linked list
  etc
}

each get moves a node from one key in the freq obj to the next