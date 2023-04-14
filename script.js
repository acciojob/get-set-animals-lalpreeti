//complete this code
class Person {
  constructor(name, age) {
    this.name1 = name;
    this.age1 = age;
  }

  get name() {
    return this.name1;
  }

  set age(age) {
    this.age = age1;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name1} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name1} is teaching`);
  }
}


const person=new Person("John",25);
console.log(person.name);
person.age=30;

const student=new Student("Jane",20);
console.log(student.name);
student.study();

const teacher=new teacher("Bob",35);
console.log(teacher.name);
teacher.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
