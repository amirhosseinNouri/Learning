var userInput;
var username;
userInput = 3;
userInput = 'Amir';
if (typeof userInput === 'string') {
    username = userInput;
}
function generateError(message, errorCode) {
    console.log('generate error');
    throw new Error(message);
}
generateError('error', 202);
