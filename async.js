//ASYNC- turn a function into one that handles promises,allow it to use "Await" inside.
//AWAIT-poses the function until a promise is done,so you can work with the result directly.
function waitOneSecond(){
    return new Promise(resolve=> setTimeout(resolve,2000))
}
async function example(){
    console.log("Before waiting");
    await waitOneSecond()
    console.log("After waiting");
    
    
}
example()