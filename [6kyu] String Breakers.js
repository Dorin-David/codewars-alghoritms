/*

***DESCRIPTION***

'I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. 
If there are leftover characters, include those as well.'

***EXAMPLE***

N = 5;
String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

*/

//***SOLUTION***

function stringBreakers(n, string){
  let copy = string.replace(/\s/g, '');
  let solution = '';
  for(let i = 0; i < copy.length; i += n){
    solution += copy.slice(i, (i + n)) + '\n';
  }
  return solution.trimRight()
}
