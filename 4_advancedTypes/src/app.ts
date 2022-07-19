//INTERSECTION TYPES
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Test1",
  privileges: ["create-something"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }

  return n1 + n2;
}

//TYPE GUARDS
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(e: UnknownEmployee) {
  console.log("Name: " + e.name);
  if ("privileges" in e) {
    console.log("Privileges: " + e.privileges);
  }
  if ("startDate" in e) {
    console.log("Start Date: " + e.startDate);
  }
}

printEmployeeInformation(e1);

//MORE TYPE GUARDS
class Car {
  drive() {
    console.log("Driving....");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck....");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   if ("loadCargo" in vehicle) {
  //     vehicle.loadCargo(1000);
  //   }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

// DISCRIMINATED UNIONS
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 5000 });

// TYPE CASTING
// const input = <HTMLInputElement>document.getElementById("msg")!;
// const input = document.getElementById("msg")! as HTMLInputElement;
const input = document.getElementById("msg");
if (input) {
  (input as HTMLInputElement).value = "MESSAGE";
}

// INDEX PROPERTIES
interface ErrorContainer {
  [property: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not valid email!",
  1: "TEST", //WORKS for :string, but not vice-versa
  username: "Must start with capital letter",
};

// FUNCTION OVERLOADS
function add2(n1: number, n2: number): number;
function add2(n1: string, n2: string): string;
function add2(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }

  return n1 + n2;
}
const result = add2("e1", "e2");
result.split(" ");

// OPTIONAL CHAINING
const fetchedUserData = {
  id: "e2",
  name: "test1",
  job: { title: "title1", description: "description1" },
};
console.log(fetchedUserData?.job?.title);

// NULISH COALESCING
const userInput = null;
const storedData = userInput ?? "DEFAULT"; // ?? <-- null or undefined
console.log(storedData);
