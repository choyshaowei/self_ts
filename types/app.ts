function add(n1: number, n2: number) {
  return n1 + n2;
}

// void if no return, undefined if return nothing
function printResult(num: number): void {
  console.log("Result is " + num);
}

function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(2, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// Error due to type missmatch
// combineValues = printResult

console.log(combineValues(2, 4));

addAndHandler(10, 20, (result) => {
  console.log(result);
});

// Unknown and Never Type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("An error occurs", 500);
