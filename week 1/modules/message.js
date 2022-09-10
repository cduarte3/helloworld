var localFunction = function(){
    console.log("This is in local function.");
}

var localMessage = "Initial message";
// export a variable
// exports.x=10

// export a function
module.exports.writeMessage = function(msg){
    localMessage = msg;
}

exports.readMessage = function(){
    console.log(`${localMessage} from ${__filename}`);
}