/*
link: https://www.codewars.com/kata/5cd4aec6abc7260028dcd942/train/javascript;

***INSTRUCTIONS***
Given a number, num, return the shortest amount of steps it would take from 1, to land exactly on that number.
A step is defined as either:
    Adding 1 to the number: num += 1
    Doubling the number: num *= 2

***EXAMPLE***

num == 3 would return 2 steps:

1 -- +1 --> 2:        1 step
2 -- +1 --> 3:        2 steps

2 steps

*********

num == 12 would return 4 steps:

1 -- +1 --> 2:        1 step
2 -- +1 --> 3:        2 steps
3 -- x2 --> 6:        3 steps
6 -- x2 --> 12:       4 steps


*/

//***SOLUTION***

function shortestStepsToNum(num) {
   let counter = 0; //set counter
    while(num > 1){
     //if current number is even, divide it by two; if its odd, subtract 1
      num % 2 == 0 ? num /= 2 : num--
      counter++
    }
  return counter
}
