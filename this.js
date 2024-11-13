const cel = {
    'Will': 50,
    'Matt': 40,
    'Dora': 30,
}

function fetchAge(name, callback) {
    callback(cel[name]);
}

function Celebrity(name) {
    this.name = name;

    // most easy way to store age with context, we can using arrow function. *recommended
    fetchAge(this.name, (age) => {
        this.age = age;
    })

    // if we using anonymous function to store data with context 'this' we need to bind context like this.
//    fetchAge(this.name, function(age) {
//        this.age = age;
//    }.bind(this));

    // or if we dont want using bind, we need to do this way.
//    const that = this;
//    fetchAge(this.name, function(age) {
//        that.age = age;
//    })

}

const celeb = new Celebrity("Dora");
const { name, age } = celeb; 
console.log("name: ", name);
console.log("age: ", age);
