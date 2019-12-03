Table of Contents

1. [Array Reverse](./Challenges/arrayReverse/array-reverse.js)

-----

# 1. Reverse an Array
Write a function that takes in an array and reverses it without using built-in JS methods.

## Challenge
Write a function that takes in an array and reverses it without using built-in JS methods.

## Approach & Efficiency
The code challenge instructions had a small hint where they gave examples of things we can do with arrays for the stretch goal that don't involve the forbidden methods "(Hint: what different techniques do you have when working with arrays? Recursion, loops, indexes, modifying the array input directly…)"

It seems like one possible solution would be to for-loop backwards through the array and create a new array out of the items in that order,or to re-assign the indices of the array items.

## Solution ("Whiteboarding")
- I need to create a new empty array
- start at the end of the array and take the last item first, adding it to the beginning of the new array
- continue to loop through the array from end to beginning, adding each array item to the new array in reverse
- result should be a reversed version of the original array

# 2. 