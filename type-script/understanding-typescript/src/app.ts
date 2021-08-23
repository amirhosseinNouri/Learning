class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

const tech = new Department('Tech');
console.log(tech);
tech.printName();
