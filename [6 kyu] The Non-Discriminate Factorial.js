/*

***DESCRIPTION**

Write a factorial that work for both positive an negative integers

***EXAMPLES**

factorial(3) => 6
factorial(5) => -120

*/
function factorial(n){
    if(n == 0) return 1
    return n * (n > 0 ? factorial(n - 1) : factorial(n + 1))
}
