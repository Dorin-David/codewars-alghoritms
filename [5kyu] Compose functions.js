/*
link: https://www.codewars.com/kata/51f9d3db4095e07f130001ee/train/javascript

***DESCRIPTION***

Write a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.
The function will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn. 
If only a single parameter is passed in, return that parameter.

***EXAMPLES***

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

compose(5, doubleTheValue) // should === 10
compose(5, doubleTheValue, addOneToTheValue) // should === 11

*/

//***SOLUTION***

function compose(arg, ...functions){
let argument = arg
for(let i = 0; i < functions.length; i++){
  argument = functions[i](argument)
}
return argument
}
