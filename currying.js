///Currying:currying is a technique wher a function with multiple arguments is brought down in to a series of function ,each taking a single arguments
function multiply(a){
    return function(b){
        return a*b
    }
}
const multiplyBy2=multiply(2)//partially applied function
console.log(multiplyBy2(7));



//memoization:it is a technique to optimise function perfomance by catching and reusing previously computed result.
//promise:it leads your code continue running while it waits for something to finish ,like loading  data. 
//When the task is done it gives you the result(succescc/faileur)without making your code wait .