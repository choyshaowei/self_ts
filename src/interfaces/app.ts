// type AddFn = (a: number, b: number) => number;
// Interface in function
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(1, 2));

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  constructor(n: string = Math.random().toString()) {
    n ? (this.name = n) : (this.name = undefined);
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log("Hi");
    }
  }
}

let user1 = new Person("Max");
user1.greet("Hello");
