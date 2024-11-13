const person = {
    name: "James",
    age: 10,
}

console.log(person.name);
console.log(person.age);

person.name = "John";
person["age"] = 20;

console.log(person.name);
console.log(person.age);

delete person.name;

console.log(person.name);
console.log(person.age);

delete person.age;

console.log(person.name);
console.log(person.age);
