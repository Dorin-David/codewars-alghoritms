/*
link: https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

***INSTRUCTIONS***

Validate a srtring of various types of braces; a string is considered valid if all braces are matched with the correct brace.

***EXAMPLES***

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

//***SOLUTION***
function validBraces(braces){
 let hash = {')':'(', ']':'[', '}':'{'};
 let stack = [];
 for(let i = 0; i < braces.length; i++){
   if(braces[i] == '(' || braces[i] == '{' || braces[i] == '[') {stack.push(braces[i]); continue}
   if(hash[braces[i]] == stack.slice(-1)[0] ) {stack.pop(); continue}
   if(hash[braces[i]] != stack.slice(-1)[0] ) {return false}
 }
  return stack.length == braces.length  ? false : true
}

/*
***EXPLANATION***
function validBraces(braces){
 let hash = {')':'(', ']':'[', '}':'{'};  // map the opposite closing braces
 let stack = [];
 for(let i = 0; i < braces.length; i++){
   if(braces[i] == '(' || braces[i] == '{' || braces[i] == '[') {stack.push(braces[i]); continue} // we're interested in the opening braces; every time we find one, we push it to our
                                                                                                     stack and restart the loop
   if(hash[braces[i]] == stack.slice(-1)[0] ) {stack.pop(); continue}                            
                                                                                                 // if we encounter a closing bracket, first of all we figure out which one we're dealing
                                                                                                    with (parentheses, brackets or curly braces); here is where our hash map is useful; after
                                                                                                    we've figure out that, we check if the top element of our stack (remember LIFO -Last In First Out- rule),
                                                                                                    which is always an opening, matches the current element (always a closing element); if they match, 
                                                                                                    restart the loop
                                                                                                   
   if(hash[braces[i]] != stack.slice(-1)[0] ) {return false}                                      //If at any moment the closing element has no match in our stack 
                                                                                                    the input is invalid: we return false
 }
  return stack.length == braces.length  ? false : true                                        //here we check for a last condition, where the input contains ONLY opening braces; 
                                                                                                if we didn't so our above logic would just keep pushing them to the stack; therefore,
                                                                                                if length of stack equals length of input we have only opening braces and our input is invalid
}


***WHAT DID I LEARN***
> Implement a Stack, a common and very useful Data Structure

***DOCUMENTATION***
> At my first attempt, I got stuck; then, after a week or something, when watching a course on Data Structures the solution simply came to my mind and I've implemented it.
You can find the full course (created by Wiliam Fiset, a Google engineer) here: https://www.youtube.com/watch?v=RBSGKlAvoiM&t=12901s&ab_channel=freeCodeCamp.org
> If you're interested in better understanding stacks, you can find them here (same course)
Part 1: https://www.youtube.com/watch?v=L3ud3rXpIxA&ab_channel=WilliamFiset
Part 2: https://www.youtube.com/watch?v=RAMqDLI6_1c&ab_channel=WilliamFiset

*/

//The above kata was created as a variation of this one: https://www.codewars.com/kata/valid-parentheses
//Since they are pretty much linked and the logic of the solution is very similar, I'll post that one too

/*
***DESCRIPTION***
Write a function that takes a string of parentheses and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

*/


//***SOLUTION***

function validParentheses(parens){
  let a = 0, b = 0;
  for(let i = 0; i < parens.length; i++){
    parens[i] == '(' ? a++ : b++
    if(b > a) return false
  }
  return a == b
}

//***EXPLANATION***
/*
As I said the solution is quite similar; having just two possible elements, we don't need a stack: a counter is enough.  

function validParentheses(parens){
  let a = 0, b = 0; //initialize counter
  for(let i = 0; i < parens.length; i++){
    //if current element is an opening parentheses, update its counter, otherwise update the closing parentheses' counter 
    parens[i] == '(' ? a++ : b++
    //if at any point, before we've traversed the whole input, closing parentheses are more than opening, the input is invalid
    if(b > a) return false
  }
  //now make sure we have an equal amount of opening and closing parentheses (we may encounter a scenario where we end up having more opening parentheses)
  return a == b
}
*/

