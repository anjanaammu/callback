//callback
function greet(name){
    console.log(`Hello, ${name}!`);
    
}
function sayHello(callback){
    const name="Anjana";
    callback(name)//GREET is called as callback function
}
sayHello(greet)


