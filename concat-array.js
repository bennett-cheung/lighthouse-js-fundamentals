function concat(array1, array2){
  var returnArray = array1;

  for (var i = 0; i < array2.length; i++) {
    returnArray.push(array2[i]);
  }

  return returnArray;
}

console.log(concat([1,2,3], [4,5,6]));
console.log(concat([5,10],[]));