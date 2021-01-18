/*
link: https://www.codewars.com/kata/5239f06d20eeab9deb00049b

***DESCRIPTION***
The function 'fibonacci' should return an array of fibonacci numbers. 
The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

***EXAMPLES***

fibonacci(4) => [0,1,1,2]
fibonacci(-1) => should return []

*/

//***SOLUTION***

function fibonacci(n) {
  if(n <= 0) return []
  let solution = [0, 1];
  while(n > 2){
    solution.push(solution[solution.length - 2] + solution[solution.length - 1]);
    n--
  }
  return solution 
}
