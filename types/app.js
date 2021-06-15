function add(n1, n2) {
    return n1 + n2;
}
// void if no return, undefined if return nothing
function printResult(num) {
    console.log("Result is " + num);
}
function addAndHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(2, 12));
var combineValues;
combineValues = add;
// Error due to type missmatch
// combineValues = printResult
console.log(combineValues(2, 4));
addAndHandler(10, 20, function (result) {
    console.log(result);
});
// Unknown and Never Type
var userInput;
var userName;
userInput = 5;
userInput = "max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError("An error occurs", 500);
