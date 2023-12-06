// complete this js code
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee, inheriting from Person
function Employee(name, age, jobTitle) {
    // Call the Person constructor to initialize inherited properties
    Person.call(this, name, age);

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
