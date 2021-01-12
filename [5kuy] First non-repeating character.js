/*
link: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

***DESCRIPTION***
Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.

***EXAMPLES***

firstNonRepeatingLetter('stress') => t
firstNonRepeatingLetter('moonmen') => e

*/

//SOLUTION

function firstNonRepeatingLetter(s) {
 let unique = s[s.toLowerCase().indexOf(s.toLowerCase().split('').find(item => s.match(new RegExp(item, 'g' + 'i')).length == 1))]
 return unique ? unique : ''
}
