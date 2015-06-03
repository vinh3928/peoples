var people = require("./people.js");
var array = [{name: "A", age: 20}, {name: "B", age: 30}, {}, {name:"", age: 10}]
console.log(people.removedBadPeople(array))
console.log(people.sumAgesValid(array))
console.log(people.sumAgesAll(array))
