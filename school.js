///school.js
//BASE CLASS AKA PARENT CLASS, we inherit from Person
class Person{
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
    }
}
class Student extends Person { //Student is_a Person, and inherits constructor, name, skills
    learn(skill) {
        this.skills.push(skill);
    }
}
class Teacher extends Person{ //Teach is_a Person, and inherits constructor, name, skills
    teach(student, skill_index) {
        student.learn(this.skills[skill_index]);
    }
}
class School {
    // COMPOSITION - has_a relationship between Objects.
    // a school is COMPOSED of students and teachers
    constructor(teachers, students) {
        this.teachers = teachers; //school has teachers
        this.students = students; // school has students
    }
}
//TESTS
let s = new School(
    [
        new Teacher("Bob", ["code", "draw"]),
        new Teacher("Carol", ["accounting", "statistics"]),
    ],
    [
        new Student("Ted", ["cooking"]),
        new Student("Alice", ["draw"]),
    ]
);
let alice = s.students[1];
let bob = s.teachers[0];
bob.teach(alice, 0);
console.log(alice.skills[1] === "code");

//WHat does a school have?
// - students
// - teachers

//What does a school do?
// - motivate
// - direct/guide (provide a pathway)
// - teach/educate

// what do students have?
// knowledge/ skills / creativity
// what do students do?
// - learn

//what do teachers have?
// experience, knowledge, maturity, critiques, patients(sp?), perspective
//what  do teachers do?
// - teach