/*
link: https://www.codewars.com/kata/563cb92e0996a4ac0b000042/train/javascript
***DESCRIPTION***
#Task# Raj once wanted to code a program to make a plus sign using the numbers but he didn't have any idea to do so. 
Using n as a parameter in the function pattern complete the code and solve the pattern so that Raj fells happy.
###Rules/Note:###

    You are assured that n>1
    There are white spaces on top and bottom left corner (take help of test cases)

***EXAMPLES***
 
 pattern(6)
 
     1
     2
     3
     4
     5
12345654321
     5
     4
     3
     2
     1
    
 (output = "     1\n     2\n     3\n     4\n     5\n12345654321\n     5\n     4\n     3\n     2\n     1\n")



*/

//***SOLUTION***

function pattern(n){
  let output = ""; 
  let i = 1; 
  while(output.length < n){ 
    if(i > 9) i = 0; 
    output += i;
    i++
  }
  return output.slice(0, -1).split('').map(el => ' '.repeat(output.length - 1) + el + '\n').join('') 
    + `${output + output.slice(0, -1).split('').reverse().join('')}\n` 
    + output.slice(0, -1).split('').reverse().map(el => ' '.repeat(output.length - 1) + el + '\n').join('')
}


//***EXPLANATION***


function pattern(n){
  let output = ""; //this string is the base of our algorithm
  let i = 1; //we start building each pattern from 1
  while(output.length < n){ //we set a simple while loop
    if(i > 9) i = 0; //  keep concatenating the ascending index; when it becomes greater than 9 we reset it to 0
    output += i;
    i++
  }
  /*
  at this point for pattern(6) our output variable will look like: '123456'
  At this point it's worth to take again a look at the final output:
  
     1
     2
     3
     4
     5 //notice how the first part of the pattern is the *[output]* variable with the last number truncated ('123456' => '12345')
12345654321
|____||___|
        ^
        |
  ^--- our output variable
        |---- again, our *[output]* variable with the last number truncated; we can also think of it as 'first vertical line of the pattern... reversed'; 
     5 // (the above pattern we've just commented)
     4
     3
     2
     1
     
||||| <-- each bar is an empty space; note how, to have the vertical lines aligned with the center, the total length of the space is [*[output]*.length - 1] (the new line character \n is not counted )    
  
  Notes: 
    1. Each line length = [*[output]*.lenght]
    2. Final vertical length = [*[output]*.length * 2] - 1
    
   Once the pattern is understood the solution's code is pretty straight forward
  
  */
  
  
  return output.slice(0, -1).split('').map(el => ' '.repeat(output.length - 1) + el + '\n').join('') // get the *[output]* minus last char (truncate last char), split it and add the necessary space and the new line (\n) (*)
    + `${output + output.slice(0, -1).split('').reverse().join('')}\n` //here we have our horizontal patter which is just [*[output]*] + [*[output]* - last char] 
    + output.slice(0, -1).split('').reverse().map(el => ' '.repeat(output.length - 1) + el + '\n').join('') // * same pattern, just reversed 
}
