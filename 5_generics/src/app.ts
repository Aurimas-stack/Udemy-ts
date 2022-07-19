// const names: Array<string> = ["name1", "name2"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

// GENERIC Fn
function merge<T, U>(ojbA: T, ojbB: U) {
  return Object.assign(ojbA, ojbB);
}
const mergedObj = merge({ name: "Max" }, { age: 30 });

// TYPE CONSTRAINTS
function merge2<T extends object, U extends object>(ojbA: T, ojbB: U) {
  return Object.assign(ojbA, ojbB);
}
//const mergedObj2 = merge2({name: "Max", hobbies: ["hobby"]}, 30);
const mergedObj3 = merge2({ name: "Max", hobbies: ["hobby"] }, { age: 30 });

// Another Generic Fn
interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(el: T): [T, string] {
  let descriptionText = "Got no value";
  if (el.length > 0) {
    descriptionText = "Got" + el.length + "elements";
  }
  return [el, descriptionText];
}
console.log(countAndPrint("MESSAGE"));

// KEYOF CONSTRAINT
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

// GENERIC CLASSES
class DataStorage<T> {
  // better for primitive values ---> T extends string | number | boolean
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}
const textStorage = new DataStorage<string>();
textStorage.addItem("name1");
textStorage.addItem("name2");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
const objStorage = new DataStorage<object>();
const nameObj = { name: "name1" };
objStorage.addItem({ name: "name1" });
objStorage.addItem({ name: "name2" });
objStorage.removeItem({ name: "name1" }); //doesnt work
objStorage.removeItem(nameObj); // works
console.log(objStorage.getItems());

// GENERIC UTILITY TYPES
//https://www.typescriptlang.org/docs/handbook/utility-types.html

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; //Partial makes properties optional
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names : Readonly<string[]>= ["name1", "name2"];
//names.push("name3");
