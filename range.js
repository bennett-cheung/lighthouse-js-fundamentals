function range(start, end, step){
  var returnArray = [];

  if (end > start && step > 0)
  {
    var index = start;
    while (index <= end)
    {

      returnArray.push(index);
      index += step;
    }
  }
  return returnArray;
}

console.log(range(0, 8, 2));
console.log(range(10, 30, 5));
console.log(range(-9, 3, 3));
