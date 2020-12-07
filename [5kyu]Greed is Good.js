/*
link: https://www.codewars.com/kata/5270d0d18625160ada0000e4

***DESCRIPTION***

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. 
You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, 
but not both in the same roll.
Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

*/

//***SOLUTION***

function score(dice) {
   let copy = Array.from(dice);
   let total = 0;
   
   let repeat = copy.find(el => dice.filter(it => it == el).length >= 3);
   if(repeat){
     repeat == 1 ? total += 1000 : total += repeat * 100
     if(copy.filter(it => it == repeat).length > 3){
       if(repeat == 1 || repeat == 5){
         repeat == 1 ? total += (copy.filter(it => it == 1).length - 3) * 100 : repeat == 5 ? (copy.filter(it => it == 5).length - 3) * 50 : false
       }
     }
     copy = copy.filter(it => it != repeat)
   }
   copy.forEach(el => el == 1 ? total += 100 : el == 5 ? total += 50 : total)
   return total
  }
  
  //***EXPLANATION***
  
function score(dice) {
   let copy = Array.from(dice); //make copy of input (do not mutate original)
   let total = 0; //store here the total score
   let repeat = copy.find(el => dice.filter(it => it == el).length >= 3); //find the element that repeats three times (if any)
   if(repeat){ //if we have any element that repeats x3:
     //does it equal to 1? In that case, add 1000 to the total (check above table of points); if not, just multiply the number by 100
     repeat == 1 ? total += 1000 : total += repeat * 100 
     //we may have a scenario like  1 1 1 3 1; in the above table we see the total of points we should output:   1100: 1000 (for three 1s) + 100 (for the other 1)
     //so if we do have an element that repeats more than three times, and if it's a 1 or a 5, we need to calculate that too; all the other numbers are ignored 
     //(of, for instance, 44454 we calculate only 444)
      if(copy.filter(it => it == repeat).length > 3){ //if indeed we have an element that repeats more than three times:
       if(repeat == 1 || repeat == 5){
         //find out if the element is a one or a five, and add corresponding value to total
         repeat == 1 ? total += (copy.filter(it => it == 1).length - 3) * 100 : repeat == 5 ? (copy.filter(it => it == 5).length - 3) * 50 : false
                               //^ filter the repeating element from input; substract 3 (we have already calculated that) and multiply the result by corresponding points 
                               //(we could have an input like 555(500 points) +  55(50 * 2) = 600
       }
     }
     copy = copy.filter(it => it != repeat) //now that we have calculated all the points we need from repeating elements, we check for a last scenario like 5 5 5 5 1 or 4 4 4 1 1,
                                            //where repeating elements are mixed with elements the are counted individually (namely, 1 and 5) 
   }
   copy.forEach(el => el == 1 ? total += 100 : el == 5 ? total += 50 : total) //we traverse the remaining elements: if we found a one or a five, we update counter
   return total
  }
  
  /*
  ***WHAT DID I LEARN***
> To me this was a fun tricky kata; you had to check for a general pattern (a number repeating x3), but with quite a lot of exceptions (1 repating x3 is worth 1000 points, extra ones
have to be counted etc). The order it's really important here; if you do not think about it carefully you might bump into unexpected behaviour...


  */
  
