/*********************************************************************************
* BTI325 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* 
* Name: Christian Duarte Student ID: 158207208 Date: September 10th 2022
*
* Online (Cyclic) URL: 
* https://different-threads-cow.cyclic.app/
*
********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();


// setup a 'route' to listen on the default URL path
app.get("/", (req, res) => {
    res.send("Christian, Duarte - 158217208");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);