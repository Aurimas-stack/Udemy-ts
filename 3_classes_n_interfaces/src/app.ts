interface Named {
  readonly name: string;
  outputName?:string;//optional
}

interface PersonStuff extends Named {
  greet: (phrase: string) => void;
}

class Person implements PersonStuff {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: PersonStuff;
user1 = new Person("Test1");

user1.greet("message");

// type AddFn = (a: number, b:number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
