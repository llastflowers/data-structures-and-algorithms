function reverseArray(arr) {
    let output = [];
    for(let i = 0; i < arr.length; i++) {      
        output[i] = arr[arr.length - i - 1];
    }   
    return output;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]));