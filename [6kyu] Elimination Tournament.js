/*
link: https://www.codewars.com/kata/5f631ed489e0e101a70c70a0

***DESCRIPTION***

In this Kata you will be given an array representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.
During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. 
If the number of contestants is odd, the last one of the current array becomes the first of the next round.
At the end of the competition, return the results of all the rounds in the form of array of arrays:

input = [9, 5, 4, 7, 6, 3, 8, 2];

With an even length:
tourney(input) === [
  [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
  [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2 
  [9, 8],                    // results of 9 vs 7 and 6 vs 8
  [9]                        // results of 9 vs 8
];
With an odd length: 

input = [9, 5, 4, 7, 6, 3, 8];
tourney(input) === [
  [9, 5, 4, 7, 6, 3, 8], 
  [8, 9, 7, 6],      ^    // 8 is now first because it was last in the former round
  [9, 7],
  [9]
];
*/

//***SOLUTION***

function tourney(array) {
  let solution = [array]
  while(solution[solution.length - 1].length > 1){
    let current = [];
    solution[solution.length - 1].forEach((el, ind, arr) => solution[solution.length - 1].length % 2 != 0 && !arr[ind + 1] ? current.unshift(el) 
    : ind % 2 == 0 ? current.push(Math.max(el, arr[ind + 1])) : false );
    solution.push(current)
  }
  return solution
}


// ***EXPLANATION***

function tourney(array) {
  let solution = [array] //make a copy of input (not by reference, so we don't mutate the input)
  while(solution[solution.length - 1].length > 1){ //while the length of the current last element in our copy is greater than 1 (we have more elements, remember that the last sub-array 
                                                   //should store just one element, the winner
    let current = []; //store here current row (at each iteration its length will be [previous row.length] / 2 (even scenario) OR ([previous row.length / 2] + 1 (odd scenario)
   solution[solution.length - 1].forEach((el, ind, arr) => solution[solution.length - 1].length % 2 != 0 && !arr[ind + 1] ? current.unshift(el)
                                                           // odd scenario like [2, 3, 1] undefined
                                                           //                   |__|  |__| <- we cannot compare here, so last simply becomes first in current row 
    : ind % 2 == 0 ? current.push(Math.max(el, arr[ind + 1])) : false );
  //|________________________________________________________|
  //            we want to compare only even indexes with their next element => [1, 2, 3, 4, 5, 6] (we don't want to compare 2 with 3 or 3 with 4!)
  //                                                                             ^--^  ^--^  ^--^
  //                                                                             |     |     | => get the biggest element from [elements at even indexes] vs [next element]
    solution.push(current) //and push it to our current row
  }
  //when we reach our base case for the above while...loop (that is, our last row stores just one element, aka the winner):
  return solution //return our solution
}

tourney([9, 5, 4, 7, 6, 3, 8]) // [ [ 9, 5, 4, 7, 6, 3, 8 ], [ 8, 9, 7, 6 ], [ 9, 7 ], [ 9 ] ]

/*
The above execution visually: 
                        
    [ 9, 5, 4, 7, 6, 3, 8 ], 
      ^--^  ^--^  ^--^  ^- last element, goes first in new row
      |        |  |     | //get bigger elements of each pair
   V--|--------|--|-----|
 [ 8, 9,       7, 6 ], 
   ^--^        ^--^
     |           | 
   [ 9,          7 ], 
     ^-----------^
           |
         [ 9 ] ]
*/



