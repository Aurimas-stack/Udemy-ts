abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
    // console.log(this.fiscalYear) will not work, Department.fiscalYear will work
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT department ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Pass new value.");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(this.instance) {
        return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("ID :" + this.id);
  }

  addEmployee(name: string) {
    if (name === "ADMIN") {
      return;
    }
    this.employees.push(name); //because employees is protected
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["ADMIN1"]);

it.addEmployee("TEST1");
it.addEmployee("TEST2");

it.describe();

it.printEmployeeInformation();

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee("Employee1");

// const accountingCopy = { name: "Copy", describe: accounting.describe };
// accountingCopy.describe();
