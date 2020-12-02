/*
link: https://www.codewars.com/kata/515f51d438015969f7000013

***INSTRUCTRIONS***

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

*/

//***SOLUTION***

function pyramid(n) {
  if(n == 0) return []
  let solution = pyramid(n - 1)
  let current = []
  while(n > 0){
    current.push(1)
    n--
  }
  solution.push(current);
  return solution
}

/*
***WHAT DID I LEARN***
> Practiced recursion
*/
