function merge(array1, array2)
{
  /*var returnArray = array1.concat(array2);
  returnArray.sort();*/

  var returnArray = [];


  while (array1.length > 0 && array2.length > 0)
  {
    //use the shift function to take out elements we already added to the return array
    if (array1[0] <= array2[0] )
    {
      returnArray.push(array1.shift());
      ;
    }
    else
    {
      returnArray.push(array2.shift());
    }
  }
  if (array1.length > 0)
    returnArray = returnArray.concat(array1);

  if (array2.length > 0)
    returnArray = returnArray.concat(array2);

  return returnArray;
}


console.log(merge([4,5,6],[1,2,3,4]));
console.log(merge([4], [2,5,8]));
console.log(merge([1,2,6], []));