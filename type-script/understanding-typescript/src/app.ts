type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(e: UnknownEmployee) {
  console.log(e.name);
  if ('privileges' in e) {
    console.log(e.privileges);
  }
  if ('startDate' in e) {
    console.log(e.startDate);
  }
}

const e1: ElevatedEmployee = {
  name: 'Amir',
  privileges: [''],
  startDate: new Date(),
};

printEmployeeInformation(e1);
