function whichSchool(age){
  var returnSchool = "";
  if (age < 13)
  {
    returnSchool= "Elementary School";
  }
  else if (age >= 13 && age <=18)
  {
    returnSchool= "Secondary School";
  }
  else
  {
    returnSchool= "Lighthouse Labs";
  }
  return returnSchool;
}

console.log(whichSchool(35));
console.log(whichSchool(8));
console.log(whichSchool(14));