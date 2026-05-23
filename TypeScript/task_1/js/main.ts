interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Levis",
  lastName: "Dumont",
  location: "Lile",
  fullTimeEmployee: false,
  numberOfReports: 96,
};

console.log(director1);

//task3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher("Levis", "Dumont"));

//task4
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
const student = new StudentClass("Levis", "Dumont");

console.log(student.displayName());
console.log(student.workOnHomework());