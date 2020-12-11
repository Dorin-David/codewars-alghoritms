/*
This problem was written by Deep Xavier on edabit.
Link: https://edabit.com/challenge/2HZ8DqCaZxLHN6cP6

***DESCRIPTION***

Write a function that, given the start and end values, returns an array containing all the numbers inclusive to that range. See examples below.

***EXAMPLES***

reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5] (ascending, because start < end)
reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]
reversibleInclusiveList(10, 20) ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
reversibleInclusiveList(24, 17) ➞[24, 23, 22, 21, 20, 19, 18, 17] (descending, because start > end)

Notes
    The sort order of the resulting array is dependent of the input values.
    All inputs provided in the test scenarios are valid.
    If start is greater than end, return a descendingly sorted array, otherwise, ascendingly sorted.
*/

//***SOLUTION***

function reversibleInclusiveList(start, end) {
	  let difference = start < end ? end - start : start - end;
    let minValue = Math.min(start, end);
	  if(difference == 0) return [minValue];
    let solution = start < end ? reversibleInclusiveList(start + 1, end) : reversibleInclusiveList(start, end + 1);
    start > end ? solution.push(minValue) : solution.unshift(minValue)
	  return solution
}

/*
***WHAT DID I LEARN***

> Recursion is a topic that scared me for a while. It took me some time to figure out how it works: it's worth it. With small inputs, 
  like in this case, I personally love the elegance of recursion. I've been writing a recursive solution now and then, but usually 
  the base case concerned a single input, while here I had to deal with two scenarios and decide accordingly. A very fun and instructive problem
*/
