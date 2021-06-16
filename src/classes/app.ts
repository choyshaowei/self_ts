class Department {
  // Shortcut in constructor
  // private id: number;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: number, private name: string) {
    this.id = id;
    this.name = name;
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

// Constructing Department
const accounting = new Department(Math.random(), "Account");
accounting.addEmployee("Max");
accounting.addEmployee("Menu");
accounting.describe();
accounting.printEmployeeInformation();

const worker = new Department(Math.random(), "Worker");
worker.addEmployee("Test1");
worker.addEmployee("Test2");
worker.describe();
worker.printEmployeeInformation();
