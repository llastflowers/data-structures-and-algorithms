function binarySearch(sortedArray, searchKey) {
    for (let i = 0; i < sortedArray.length; i++) {      
        if (searchKey === sortedArray[i]) {
            return i;
        }

        // for (let i = 0; i < sortedArray.length; i++) {      
        //     if (searchKey !== sortedArray[i]) {
        //         return -1;
        //     }
        // }   
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));