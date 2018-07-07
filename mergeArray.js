function merge(array1, array2)
{
  var returnArray = array1.concat(array2);
  returnArray.sort();
  return returnArray;
}


console.log(merge([4,5,6],[1,2,3,4]));
console.log(merge([4], [2,5,8]));
console.log(merge([1,2,6], []));