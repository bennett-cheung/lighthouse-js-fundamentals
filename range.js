function range(start, end, step){
  var returnArray = [];

  if (end > start && step > 0)
  {
    for (var i = start; i < end; i+=step) {
      returnArray.push(i);
    }
  }
  return returnArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
