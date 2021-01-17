/*
link: https://www.codewars.com/kata/5571f712ddf00b54420000ee/train/javascript

***DESCRIPTION***

Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a 
dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: 
Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

Notes:

    If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
    If a float is passed into the function, its value should be be rounded down, and the resulting dictionary should never contain fractions of a coin.

***EXAMPLES***

loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}

*/


//***SOLUTION***

function looseChange(cents){
  let values = { Pennies: 1, Nickels: 5, Dimes: 10, Quarters: 25 }
  let solution = {};
  Object.keys(values).reverse().reduce((a, b) => {
     solution[b] = 0;
    while(a - values[b] >= 0){
      solution[b]++;
      a -= values[b];
    }
    return a
  }, Math.floor(cents));
  return solution
}

//***EXPLANATION***


function looseChange(cents){
  let values = { Pennies: 1, Nickels: 5, Dimes: 10, Quarters: 25 } //hash with values
  let solution = {}; //an empty object; we will return it as our solution
  Object.keys(values).reverse().reduce((a, b) => { //get the keys from values; reversed (we're first interested in the biggest value, namely quarters)
     solution[b] = 0; //create key in our solution objet 
    while(a - values[b] >= 0){ //while the current amount, rounded, has still elements of the current amount
      solution[b]++; //increase counter in solution object
      a -= values[b]; //update current amount; EX: a == 67; how many quarters can we fit inside it? 2; update counter (Quarter: 2); update current amount => 67 - (2 * 25) = 17
    }
    return a 
  }, Math.floor(cents));
  return solution 
}

