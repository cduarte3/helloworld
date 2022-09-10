const path = require("path");
// the js equialent to including libraries in C++ and C

console.log(__filename);
console.log(__dirname);
// include 2 _ in the names, should be __
// global variables __filename and __dirname

console.log("Current directory is " + path.dirname(__filename));
// path.dirname, .dirname is a function

setTimeout(() => {
    console.log("Hello after 1 second.");
}, 1000);

/*
    () => {
      console.log("Hello after 1 second.");
    }

    ^^ this section is all a function.
    - Anonymous function
    - Is an unnamed function
    - Callback function
    - The function is a parameter of another function
    - ^ this is a callback function
*/

var cb = () =>{
    console.log("Hello after 1 second.");
};
setTimeout(cb, 1000);

// setTimeout(cb(), 1000);
// cb is right, cb() is wrong
// cb() will assume function type not variable type
// console.log('\x1b[33m%s\x1b[0m', "Hello after 1 second.");  
// ^ will use colour yellow when printing the logged result (testing purposes)

var count = 1;  // global counter
var maxCount = 3;   // global maximum
var myCountInterval = setInterval(()=>{
    // template literal
    console.log(`Hello World. after ${count++} second(s).`);
    checkMaximum();
}, 1000) 

var checkMaximum = function(){
    if (count > maxCount){
        clearInterval(myCountInterval);
    }
}

var x = 100;
x += 8;
console.log("Hello World.", x);
console.log("Hello World.", +x);
console.log(`Hello World. ${++x}`);



const message = require('./modules/message.js');
message.writeMessage("Hello World.");
message.readMessage();
// call function from the modules js file which has been exported here
// exported here and then included as a required