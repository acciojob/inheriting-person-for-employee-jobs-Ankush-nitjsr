// complete this js code

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee, inheriting from Person
function Employee(name, age, jobTitle) {
    this.name = name;
	this.age = age;

    // Add properties specific to Employee
    this.jobTitle = jobTitle;
}

// Inherit from Person by setting the prototype of Employee
Employee.prototype = Object.create(Person.prototype);

// Method added to the Employee prototype
Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
