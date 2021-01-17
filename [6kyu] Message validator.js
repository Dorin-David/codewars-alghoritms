/*
link: https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc

***DESCRIPTION***

In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, 
and then compare the numbers with the number of characters in the following substring. For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi 
and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

***EXAMPLES***

isAValidMessage("4code13hellocodewars") => true
isAValidMessage("3hey5hello2hi5") => false

Notes:
    -Messages are composed of only letters and digits
    -Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
    -Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
    -If the message is an empty string, you should return true
*/

//***SOLUTION***

function isAValidMessage(message){
  if(message == '') return true
  let validate = message.toLowerCase().match(/\d+[a-z]+/g) ;
  if(validate == null) return false
  return validate.join('').length == message.length 
&& validate.every(el => el.replace(/\d+/, '').length == el.replace(/[a-z]+/, ''))
}

//***EXPLANATION*** 

function isAValidMessage(message){
  if(message == '') return true //case where string is empty
  let validate = message.toLowerCase().match(/\d+[a-z]+/g); //get all the substrings that are a combination of numbers and letters
  if(validate == null) return false //it there isn't any, return false
  return validate.join('').length == message.length //make sure that we have ONLY combinations of numbers and letters (exclude inputs with a number as last element)
&& validate.every(el => el.replace(/\d+/, '').length == el.replace(/[a-z]+/, '')) //finally, make sure that every substring of letters' length equals the number that precedes it) 
}
