function range(start, end, step){
  var returnArray = [];

  if (end > start && step > 0)
  {
    var index = start;
    while (index < end)
    {

      returnArray.push(index);
      index += step;
    }
  }
  return returnArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
