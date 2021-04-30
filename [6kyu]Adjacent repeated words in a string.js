/*
link: https://www.codewars.com/kata/5245a9138ca049e9a10007b8

***DESCRIPTION***

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

"dog cat"                  -->  0
"dog DOG cat"              -->  1
"apple dog cat"            -->  0
"pineapple apple dog cat"  -->  0
"apple     apple dog cat"  -->  1
"apple dog apple dog cat"  -->  0
"dog dog DOG dog dog dog"  -->  1
"dog dog dog dog cat cat"  -->  2
"cat cat dog dog cat cat"  -->  3

*/

//***SOLUTION***

function countAdjacentPairs(searchString) {
   if(searchString === '') return 0   
  const cleaned = searchString.toLowerCase().split(' ');
  let count = 0;
  let i = 0; 
  let j = 1; 
  let currentOccurence;
  while(j < cleaned.length){
    if(cleaned[i] === cleaned[j] && cleaned[j] !== currentOccurence){
      count++
      currentOccurence = cleaned[j]
      j++
      continue
    } 
    i = j
    j++
  }

  return count
}
