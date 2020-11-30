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
