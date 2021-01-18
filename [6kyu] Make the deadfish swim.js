/*
link: https://www.codewars.com/kata/51e0007c1f9378fa810002a9

***DESCRIPTION***

Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored.

***EXAMPLES***

  parse("iiisxxxdoso") => [ 8, 64 ]
*/


//***SOLUTION*** 

function parse(data){
  return data.match(/[idso]/g).reduce((a, b) => {
    if(b == 'i') return (a[0]++, a)
    if(b == 'd') return (a[0]--, a)
    if(b == 's') return (a[0] = Math.pow(a[0], 2), a)
    if(b == 'o') return (a[1].push(a[0]), a)
  }, [0, []])[1]
}
