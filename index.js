function convertToCelsius(Fahrenheit) {
  return (Fahrenheit - 32) * (5 / 9);
}

function describeTemperature(f) {
const celsius = convertToCelsius(f)
console.log ("Celsius" + celsius)

 if (celsius < 0) 
    return "very cold"; 

   else if (celsius < 20) {
    return "cold";
  } 
  
  else if (celsius < 30) {
    return "warm";
  } 
  
  else if (celsius < 40) {
    return "hot";
  } 
  
  else {
    return "very hot";}}


const f = prompt("Put in Fahrenheit tempurature for conversion");
const description = describeTemperature(f);
alert("This tempurature feels" + description);
