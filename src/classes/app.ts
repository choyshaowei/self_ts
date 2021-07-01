// Class Root Declaration
class Department {
  // Shortcut in constructor
  // private id: number;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: number, private name: string) {
    // Shortcut in constructor
    // this.id = id;
    // this.name = name;
  }

  describe() {
    console.log(`Departments - ${this.id}->${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Abstract Class
abstract class SampleAbstract {
  constructor(protected readonly id: number, protected name: string) {}
  abstract describe(this: SampleAbstract): void;
}

class ITAbstract extends SampleAbstract {
  data: string[];
  constructor(id: number, data: string[]) {
    super(id, "IT");
    this.data = data;
  }
  describe() {
    console.log("IT Department - ID: " + this.data);
  }
}

const abstractTest = new ITAbstract(Math.random(), ['hello']);
abstractTest.describe();

//Class Extensions
class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  printAdminInformation() {
    console.log(this.admins.length);
    console.log(this.admins);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("No Value");
    }
    this.addReport(value);
  }
  constructor(id: number, private reports: string[]) {
    super(id, "Account");
    this.lastReport = this.reports[0];
  }

  addEmployee(name: string) {
    console.log(this.employees);
    if (this.employees.length > 0) {
      this.employees.forEach((element) => {
        if (element === name) {
          throw new Error("Duplicate Employee");
        }
        this.employees.push(name);
      });
    } else {
      this.employees.push(name);
    }
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}

// Constructing Department
// const worker = new Department(Math.random(), "Worker");
// worker.addEmployee("Test1");
// worker.addEmployee("Test2");
// worker.describe();
// worker.printEmployeeInformation();

// const infomation = new ITDepartment(Math.random(), ["MaxAdmin"]);
// infomation.addEmployee("Admin 1");
// infomation.addEmployee("Admin 2");
// infomation.describe();
// infomation.printAdminInformation();

// const accounting = new AccountingDepartment(Math.random(), []);
// accounting.addReport("Hell");
// //Setters
// accounting.mostRecentReport = "hello";
// //Getters
// console.log(accounting.mostRecentReport);
// accounting.printReport();
// accounting.addEmployee("Max");
// accounting.describe();
// accounting.printEmployeeInformation();
