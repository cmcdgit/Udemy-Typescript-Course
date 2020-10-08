let userInput: unknown;   //more restrictive than any
// let userInput: any;
let userName: string;

if (typeof userInput === "string") {      //check typeof when using unknown so code will compile
  userName = userInput;
}
  
userInput = 5;
userInput = 'Ciaran';

function generateError(message: string, code: number) : never {    //: never is added here to be explicit 
  throw { message: message, errorCode: code };
}

// a function with an infinite loop returns 'never' type also

// generateError("An error occurred!", 500);
const result = generateError("An error occurred!", 500);
console.log(result);   //this won't be reached as 'throw' crashes the program 

