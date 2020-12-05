/*

***DESCRIPTION***

Math geeks and computer nerds love to anthropomorphize numbers and assign emotions and personalities to them. Thus there is defined the concept of a "happy" number. 
A happy number is defined as an integer in which the following sequence ends with the number 1.
    1)Start with the number itself.
    2)Calculate the sum of the square of each individual digit.
    If the sum is equal to 1, then the number is happy. If the sum is not equal to 1, then repeat steps 1 and 2. 
    A number is considered unhappy once the same number occurs multiple times in a sequence because this means there is a loop and it will never reach 1.

For example, the number 7 is a "happy" number: 7*2 = 49 --> 4*2 + 9*2 = 97 --> 9*2 + 7*2 = 130 --> 1*2 + 3*2 + 0*2 = 10 --> 1*2 + 0*2 = 1
On the other hand, the number 6 is not a happy number as the sequence that is generated is the following: 6, 36, 45, 41, 17, 50, 25, 29, 85, 89, 145, 42, 20, 4, 16, 37, 58, 89
                                                                                                                                                                                                                                                                                                          
 Your task is to write a program which will print a list of all happy numbers between 1 and x (both inclusive), where:

2 <= x <= 10000

*/


//***SOLUTION***

//sumSquare will give us the sum of the sum of the square of each individual digit of a number

function sumSquare(n){
  return [...n+''].reduce((a, b) => a + Math.pow(b, 2), 0)
}

//Solution one, with recursion (to slow when x > 9000)

function happyNumbers(x){
  if(x == 1) return [1]
  let solution = happyNumbers(x - 1);
  let cache = [];
  let copy = x;
  while(sumSquare(copy) != 1 && !cache.includes(sumSquare(copy))){
  cache.push(sumSquare(copy));
  copy = sumSquare(copy);
};
  if(sumSquare(copy) == 1) solution.push(x);
  return solution
}

//Solution two (replaced recursion with a while loop)

function happyNumbers(x){
  let solution = [];
  let i = 1;
  //we want the happy numbers from the lowest to higher, therefore counter i is initialized as 1 to be, later, increased till it reaches x
  while(i <= x){
   let cache = []; //here we store the returned values of sumSquare (check above)
  let copy = i; //we make a copy of i;  we'll mutate the copy to find out if current number (i) it's a happy number; if it is, we need to push the current i to the solution, not the copy
  //While current number passed to sumSquare is not 1, and it's not present in cache (that'd mean a loop, check above description for input 6):
  while(sumSquare(copy) != 1 && !cache.includes(sumSquare(copy))){
  cache.push(sumSquare(copy)); //push result of calling sumSquare on copy
  copy = sumSquare(copy); //update copy (again, watch 7 mutate: 7 => 49
  
  //For example, visualize the process of finding out wheter 7 is a happy number or not: 
  //7*2 = 49 --> 4*2 + 9*2 = 97 --> 9*2 + 7*2 = 130 --> 1*2 + 3*2 + 0*2 = 10 --> 1*2 + 0*2 = 1
  //^------^ ----------------^-------------------^-------------------------^-----------------^ here sumSquare returns 1, therefore our number is happy; but wait,
  // our copy has gone through 5 steps before we've found out that: the value we're interested in is the original (stored in i), 7 in this case: that's our happy number
};
  //At this point i may not be a happy number; our while loop above stops when copy, passed to sumSquare, returns 1; from the example above, the loop stopped with copy == 10
  //It might as well have stops mutating because it was already found in cache
  //So we check a last time if the current number is a happy
  if(sumSquare(copy) == 1) solution.push(i); //if it is, we push it to solution
    i++
  }
  return solution
}


/*
***WHAT DID I LEARN***
> Replace a while loop with recursion, and the other way around (as recursion is not efficient enough) 

*/
