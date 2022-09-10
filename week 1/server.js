const express = required("express");    //include express.js module
var app = express();

var path = require("path"); // include model path to use __dirname and function path.join

var HTTP_PORT = process.nextTick.PORT || 8888;

// call this function after the http server starts listening for requests
function onHttpStart(){
console.log("Express http server listening on: " + HTTP_PORT);
}