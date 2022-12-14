var x = prompt("Enter the value");

if (x>="a" && x<="z" || x>="A" && x<="Z" )
{
  alert("Given value is alphabet");
}
else if(x>="0" && x<="9")
{
  alert("Given value is integer");
}
else
{
  alert("Given value is special charecter");
}