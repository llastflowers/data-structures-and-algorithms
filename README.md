## Table of Contents

1. [Array Reverse](./Challenges/arrayReverse/array-reverse.js)

2. [Array Shift](./Challenges/arrayShift/array-shift.js)

3. [Binary Search](./Challenges/arrayBinarySearch/array-binary-search.js)

-----

# 1. Reverse an Array
Write a function that takes in an array and reverses it without using built-in JS methods.

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
Write a function that takes in an array and a value to be added, and returns an array with the new value added at the middle index, without using built-in JS methods.

## Challenge
Write a function that takes in an array and a value to be added, and returns an array with the new value added at the middle index, without using built-in methods.

## Approach & Efficiency
One approach to doing this may be to loop through the array until the halfway point (by seeing if that index %2 equals half of the array.length/if that index x2 equals array.length?), and then I have to insert a new value after that array item, without using push, which I'm going to have to research how to do!

## Solution ("Whiteboarding")
- I need to loop through an array to the halfway point
- I need to stop the loop at this index by determining that the index x2 is equal to array.length
- I need to insert the new item into the array at this position



# 3. Binary Search
Write a function that takes in a sorted array and a search key, without using built-in methods.

## Challenge
Write a function that takes in a sorted array and a search key, without using built-in methods.

## Approach & Efficiency


## Solution ("Whiteboarding")
- I need to 