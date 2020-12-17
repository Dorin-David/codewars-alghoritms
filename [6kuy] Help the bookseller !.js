/*
link: https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

***DESCRIPTION***


    A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. 
    The 1st character of a code is a capital letter which defines the book category. In the bookseller's stocklist each code c is followed by a space 
    and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
    For example an extract of a stocklist could be:

    L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
    or
    L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

    You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

    M = {"A", "B", "C", "W"} 
    or
    M = ["A", "B", "C", "W"] or ...

    and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.
    For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

      (A : 20) - (B : 114) - (C : 50) - (W : 0)

    where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' 
    since there are no code beginning with W. If L or M are empty return string is "".
*/

//***SOLUTION***

function stockList(listOfArt, listOfCat){
  if(listOfArt.join('') == '' || listOfCat.join('') == '') return ''
  let result = []
  for(let i = 0; i < listOfCat.length; i++){
    let counter = 0;
    listOfArt.forEach(el => {
      if(new RegExp('^' + listOfCat[i]).test(el)) counter += +el.split(' ')[1]
    });
    result.push(`(${listOfCat[i]} : ${counter})`);
    
  }
  return result.join(' - ')
}


//***EXPLANATION***


function stockList(listOfArt, listOfCat){
  if(listOfArt.join('') == '' || listOfCat.join('') == '') return '' //handle invalid input scenario (could have written !listOfArr.length, as 0 is false in a boolean context)
  let result = []
  for(let i = 0; i < listOfCat.length; i++){ //loop over the categories that are passed as second argument (like ['A', 'B'])
    let counter = 0;
    listOfArt.forEach(el => { //for each letter inside the second argument, traverse the first argument; if any of its elements begins with a letter in our second argument array:
      if(new RegExp('^' + listOfCat[i]).test(el)) counter += +el.split(' ')[1] //retrieve its value (the number of books available) and update our counter
    });
    result.push(`(${listOfCat[i]} : ${counter})`); // each result must look like: ([letter that stands for category] : [number of books of that category])
    
  }
  return result.join(' - ') //we join our solution with hypens 
}
