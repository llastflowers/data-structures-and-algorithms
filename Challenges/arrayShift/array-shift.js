function insertShiftArray(arr, newItem) {
    let middle = arr.length / 2;
    let output = [];
    for (let i = 0; i < middle; i++) {      
        output[i] = newItem;
    }   
    return output;
}

console.log(insertShiftArray([1, 2, 3, 4, 5, 6], 3.5));
