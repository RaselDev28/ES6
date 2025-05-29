const difference = (first , second) => first - second;
const multiply = (x , y, z) => x*y*z;

const getAge = person => person.age;
const person = {name : "Rasel" , age: 23};
const age = getAge(person);
console.log(age);

const getResult = (x, y, z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum+mult;
    return result;
}

const total = getResult(12, 15, 25);
console.log(total);

const getPI= () => Math.PI;
console.log(getPI());