var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var index = 0;
while (index < ingredients.length)
{
  console.log(ingredients[index]);
  index ++;
}

console.log("---------------------");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("---------------------");
for (i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}