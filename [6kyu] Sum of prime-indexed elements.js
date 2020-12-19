/*
link: https://www.codewars.com/kata/56dbb6603e5dd6543c00098d/train/javascript

***DESCRIPTION***
Return the sum of the elements occupying prime indices

***EXAMPLE***

[1,2,3,4,5,6] => 13
[3, 8, 9, 1, 6, 8, 12, 7] => 25
//     ^  ^     ^      ^ 
 
*/

//***SOLUTION***

  function total(arr){
  return arr.reduce((a, b, i) => {
    if(i < 2) return a
    for(let x = 2; x < i; x++){
      if(i % x == 0) return a
    }
    return a += b
  }, 0)
};


//***EXPLANATION***

function total(arr){
  return arr.reduce((a, b, i) => {
    if(i < 2) return a // we are not interested in indices below 2 (0 and 1 are not prime numbers)
    for(let x = 2; x < i; x++){ //loop to check if current index has another divisor other than 1 and itself
      if(i % x == 0) return a //if it does (therefore it's not prime), break the loop and return the current accumulator
    }
    return a += b //update counter and return it
  }, 0)
};
