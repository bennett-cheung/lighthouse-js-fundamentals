function loopy(){

  for (var i = 100; i <= 200; i++) {
    var printValue = "";
    if (i % 3 === 0 && i % 4 === 0)
    {
      printValue = "LoopyLighthouse";
    }
    else if (i % 3 === 0)
    {
      printValue = "Loopy";
    }
    else if (i % 4 === 0)
    {
      printValue = "Lighthouse";
    }
    else
    {
      printValue = i;
    }

    console.log(printValue);
  }
}

loopy();