function insertShiftArray(arr, newItem) {
    let middle = arr.length / 2;
    let output = [];
    for (let i = 0; i < middle; i++) {      
        output[i] = newItem;
    }   
    return output;
}

console.log(insertShiftArray([1, 2, 3, 4, 5, 6], 3.5));

// I'm stuck at this point! This code is returning an array that inserts newItem into the array up to the midpoint, but does not preserve the original array items and inserts newItem 3 times ([3.5, 3.5, 3.5] in the case of the above console.log). I had a slightly different partial-solution that was turning the whole array into [3.5]; I'm not sure which was closer to working properly. I spent about 1.5 hours on this.
