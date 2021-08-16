let userInput: unknown;
let username: string;

userInput = 3;
userInput = 'Amir';
if (typeof userInput === 'string') {
  username = userInput;
}

function generateError(message: string, errorCode?: number): never {
  console.log('generate error');
  throw new Error(message);
}

generateError('error', 202);
