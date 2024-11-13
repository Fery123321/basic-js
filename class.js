// before ecmascript 6, how to make class is using constructor function.

// this is how to make simple object.
const person = {
    firstname: "James",
    lastname: "Bond",
    sayHello: function(name) {
        console.log("Hello,", name);
        return "sayHello";
    },
    sayBye: (name) => {
        console.log("Goodbye,", name);
        return "sayBye";
    },
}
console.log(person.sayHello("Doe"));
console.log(person.sayBye("John"));

// this is how to make object with class with constructor function.

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.sayHello = (name) => {
        console.log("Hello,", name);
        return name;
    }
    this.sayBye = function(name) {
        console.log("Goodbye,", name);
        return "sayBye";
    }
}

const person2 = new Person("John", "Doe");
console.log(person2.sayHello(person.lastname));
console.log(person2.sayBye(person.firstname));


// if we are using constructor function as class, we can use .call method to do inheritance.
function Employee(firstname) {
    this.firstname = firstname;
    this.sayHi = function(name) {
        return "Hi..., im employee";
    }
}

function Manager(firstname) {
    Employee.call(this, firstname);
    this.sayHi = function(name) {
        return "Hi..., im manager";
    }
}

const emp = new Employee("Kacl");
const man = new Manager("Brutus");
console.log(emp.firstname);
console.log(emp.sayHi("Brutus"));
console.log(man.firstname);
console.log(man.sayHi("Kacl"));

// we can create function or attribute with Prototype
function Animal(name) {
    this.name = name;
}

function Mammals(name) {
    this.name = name;
}

Animal.prototype.setAge = function(age) {
    this.age = age;
    return "Animal age updated"
}

Mammals.prototype.setAge = function(age) {
    this.age = age;
    return "Mammals age updated"
}

// if we want to do inheritance with prototype, u can do this and make sure u do this before u make any prototype function, but now inheritance with prototype is no recommended anymore cause of ambiguity.
//Mammals.prototype = Object.create(Animal.prototype);

const dog = new Animal("Dog");
const cat = new Mammals("Cat");
console.log(dog.name);
console.log(cat.name);
console.log(dog.age);
console.log(cat.age);
console.log(dog.setAge(5));
console.log(cat.setAge(3));
console.log(dog.age);
console.log(cat.age);


// after ecmascript 6 release, we can use class syntax to make class.
class Person3 {
    constructor(firstname) {
        this.firstname = firstname;

        // if we want to make method we can do this, but this not recommend cause of this way will add method to the instance object.
        // this.sayHi = function(name) {
        //    return "Hi...";
        // }
    }

    // if we want to make method in class, this way is recommended because this way will add method to the prototype not the instance object.
    sayHi(name) {
        return "Hi..., "+name;
    }
}

const person3 = new Person3("Lulu");
console.log(person3.firstname);
console.log(person3.sayHi("Lala"));


// if we want to inherite class to another class we can use extends.
class Employee3 {
    constructor(firstname) {
        this.firstname = firstname;
    }

    sayHi(name) {
        console.log("sayHi employee triggered");
        return "Hi, "+ name + ", im employee.";
    }
}

class Manager3 extends Employee3 {
    // if u want to make method or property private, u can using #.
    #password = 100;
    constructor(firstname) {
        super(firstname);
    }

    sayHi(name) {
        //if we want to call parent method we can use super.method.
        super.sayHi(name);
        console.log("sayHi manager triggered");
        return "Hi, "+ name + ", im manager.";
    }
}

const mr1 = new Employee3("mr1");
const mr2 = new Manager3("mr2");
console.log(mr1.firstname);
console.log(mr2.firstname);
console.log(mr1.sayHi(mr2.firstname));
console.log(mr2.sayHi(mr1.firstname));
console.log(mr2.password);
console.log(typeof mr2);
console.log(mr2 instanceof Employee3);
console.log(mr2 instanceof Manager3);
console.log(mr1 instanceof Employee3);
console.log(mr1 instanceof Manager3);



// static class
class Config {
    static one = "one";
    static two = "two";

    static onePlusTwo() {
        return 1+2;
    }
}

console.log(Config.one) // call static class this way
console.log(Config.onePlusTwo());

const config = new Config()
console.log(config.one) // not like this
