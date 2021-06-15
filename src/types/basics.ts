function add(n1: number, n2: number, showResult: boolean) {
  let response: number = null;
  showResult ? console.log("result") : (response = n1 + n2);
  return response;
}

const number1 = 5;
const number2 = 2.8;
const printResult = false;

const result = add(number1, number2, printResult);
console.log(result);
