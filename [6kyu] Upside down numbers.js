/*
link: https://www.codewars.com/kata/59f7597716049833200001eb

*** DESCRIPTION ***

Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same. 
To clarify, if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.
Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. 
They are 0, 1, 8.

*** EXAMPLES ***

Test.assertEquals(solve(0,10),3)
Test.assertEquals(solve(10000,15000),6)
*/

// *** SOLUTION ***

 function checkIfUpsideDown(n){
   let upsidedown = { 0: 0, 1: 1, 6: 9, 8: 8, 9: 6 }
   
   if(n.toString().split('').find(el => upsidedown[el]) === -1) return false
   let copy = n.toString().split('').reverse()
              .map(el => upsidedown[el]).join('')
   return copy == n
 }

function solve(x, y) {
   let counter = 0;
   while(x < y){
     if(checkIfUpsideDown(x)) counter++
     x++
   }
  return counter
};
