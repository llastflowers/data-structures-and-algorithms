function FizzBuzzTree(tree) {
  let node;
  if(node.value % 3 === 0) {
    node.value = 'Fizz';
  } else if(node.value % 5 === 0) {
    node.value = 'Buzz';
  } else if(node.value % 3 === 0 && node.value & 5 === 0) {
    node.value = 'FizzBuzz';
  } else node.value = node.value.toString();
  
  // takes a tree as arg
  // if node.value / 3 = 0, node.value = 'Fizz'
  // if node.value / 5 = 0, node.value = 'Buzz'
  // if node.value / 3 = 0 AND node.value / 5 = 0, node.value = 'Fizzbuzz'
  // else node.value = node.value.toString()  
}

module.exports = { FizzBuzzTree };
