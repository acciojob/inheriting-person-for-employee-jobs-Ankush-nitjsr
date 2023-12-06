// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.greet = function() {
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee extends (name, age, jobTitle) {
	super(this, name, age);
	this.jobTitle = jobTitle;
};

Person.prototype = Object.create(Employee.prototype);

Employee.prototype.jonGreet = function)() {
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
