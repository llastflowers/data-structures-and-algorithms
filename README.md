## Table of Contents

1. [Array Reverse](./Challenges/arrayReverse/array-reverse.js)

2. [Array Shift](./Challenges/arrayShift/array-shift.js)

3. [Binary Search](./Challenges/arrayBinarySearch/array-binary-search.js)

6. [Linked List Insertions](./Challenges/linkedList/linked-list.js)

11. [Queue With Stacks](./Challenges/queueWithStacks/queue-with-stacks.js)

-----

# 1. Reverse an Array

## Challenge
Write a function that takes in an array and reverses it without using built-in methods.

## Approach & Efficiency
The code challenge instructions had a small hint where they gave examples of things we can do with arrays for the stretch goal that don't involve the forbidden methods "(Hint: what different techniques do you have when working with arrays? Recursion, loops, indexes, modifying the array input directly…)"

It seems like one possible solution would be to for-loop backwards through the array and create a new array out of the items in that order,or to re-assign the indices of the array items.

## Solution ("Whiteboarding")
- I need to create a new empty array
- start at the end of the array and take the last item first, adding it to the beginning of the new array
- continue to loop through the array from end to beginning, adding each array item to the new array in reverse
- result should be a reversed version of the original array



# 2. Shift an Array

## Challenge
Write a function that takes in an array and a value to be added, and returns an array with the new value added at the middle index, without using built-in methods.

## Approach & Efficiency
One approach to doing this may be to loop through the array until the halfway point (by seeing if that index %2 equals half of the array.length/if that index x2 equals array.length?), and then I have to insert a new value after that array item, without using push, which I'm going to have to research how to do!

## Solution ("Whiteboarding")
- I need to loop through an array to the halfway point
- I need to stop the loop at this index by determining that the index x2 is equal to array.length
- I need to insert the new item into the array at this position



# 3. Binary Search

## Challenge
Write a function that takes in a sorted array and a search key and returns the index of the array's element that is equal to the search key, or -1 if the element does not exist, without using built-in methods.

## Approach & Efficiency
I am going to try to for-loop through the array and return i if the element is in the array, then try a nested for-loop to return -1 if it is not found (because I think an if/else will return -1 if the item at position 0 is not equal to the search key).


## Solution ("Whiteboarding")
- I need to loop through the array to look for an element that is equal to the search key
- If the element is found, I need to return the index of the element
- If the element is not found, I need to return -1



# 6. Linked List Insertion

## Challenge
Write methods for the Linked List class:
- .append(value)
- .insertBefore(value, newVal)
- .insertAfter(value, newVal)

## Approach & Efficiency
I already did the append(value) in the group whiteboarding exercise so I copied the solution here. I'll use 'valueToInsert' and 'givenValue' as arguments for the second two methods. I'll build on the LLs from my previous tests to make sure these are working.


## Solution ("Whiteboarding")
- I need to loop through the nodes until the end and then add a new node with the given value
- I need to loop through the nodes until I find the given value and then insert a new node with the given new value right before it
- I need to loop through the nodes until I find the given value and then insert a new node with the given new value right after it



# 11. Linked List Insertion

## Challenge
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

- enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.

- dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.

The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency
Make two stacks with one being empty; move all the items from one stack to the other in order to effectively reverse them; perform methods; move back to other stack to return to normal stack order.

## Solution ("Whiteboarding")
[Whiteboard Image](./assets/queue-with-stacks.jpg)