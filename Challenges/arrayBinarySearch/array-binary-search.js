function binarySearch(sortedArray, searchKey) {
    let result;
    for (let i = 0; i < sortedArray.length; i++) {   
        if (searchKey === sortedArray[i]) {
            result = i;
        }
    }
    if (result === undefined) {
        result = -1;
    }
    return result;
}

console.log(binarySearch([1, 2, 3, 4, 5], 7));

console.log(binarySearch([1, 2, 3, 4, 5], 4));