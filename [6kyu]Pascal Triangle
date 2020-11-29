/*
link: https://www.codewars.com/kata/52945ce49bb38560fe0001d9

***DESCRIPTION***
Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle up to that depth.
The triangle should be returned as a nested array.

***EXAMPLES***

pascal(5) // should return [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

Visually, pascal(4) will return:

              [1]
            [1   1]
          [1   2   1]
        [1   3   3   1]

*/

//***SOLUTION***

function pascal(depth) {
  let arr = [[1]]
  while(depth > 1){
    let previous = arr[arr.length - 1];
    let current = []
for(let i = 0; i < previous.length + 1; i++){
    current.push((previous[i - 1] || 0) + (previous[i] || 0))
}
    arr.push(current)
    depth--
  }
  return arr
}

///***EXPLANATION*** 

/*
function pascal(depth) {
  let arr = [[1]] //depth cannot be smaller than 0 (all inputs are valid)
  while(depth > 1){ //we use depth as a condition for our while loop
    let previous = arr[arr.length - 1]; // keep track of the previous element
    let current = [] // define an array that will store current row
for(let i = 0; i < previous.length + 1; i++){
    //the next element is the sum of the two elements above it
    //at the beginning of each line we actully have 0
    
             0 [1] 0 <-- //note that we consider zeroes as well, that's why the beginning and end of each row-array is 1
              \/  \/ 
            0 [1   1] 0 // consider elements' indices: to form next take the above element from left (current index - 1) and sum with above element (which has the same current index)
            \/  \/  \/
          0 [1   2   1] 0
           \/  \/  \/ \/ 
        0 [1   3   3   1] 0
        
    current.push((previous[i - 1] || 0) + (previous[i] || 0)) //at the beginning and the end of each row arr[ind - 1] is undefined; use the OR operator to fall back to zeroes; same
                                                              // logic for last element (the above element -being the row shorter- doesn't exist in the array: it's a zero
                  |___________________|   |________________|
                  push previous OR 0     push current OR 0
}
    arr.push(current)
    depth--
  }
  return arr
}

***WHAT DID I LEARN***
> It helped me to better visualize a 2D array, and appreciate it's compactness; we can image how the data from a server, or a user, could grow exponentially. 
  An Array could be one of our choices to store and easily access that data. It's indeed a very powerful and useful Data Structure.  
> Manage scenarios where an element could be missing
*/
