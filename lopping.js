// Use for of in array or String

const numbers = [1, 2, 5, 55, 65];

for (const number of numbers) {
    // console.log(number);
}

const names = 'Mohamd bin ikhtiar uddin Bokhtiar Khilji';

for (const name of names) {
    // console.log(name);
}

// Dont usable for of loop in Object

// Use for in on object
const student = {
    name: 'Rasel',
    Id: '2024000010048',
    Section: 19,
    isGoodStudent: true
}

for (const data in student) {
    const value = student[data];
    // console.log(data, value)
}

const keys = Object.keys(student);
// console.log(keys);
for (const key of keys){
    const values= student[key];
    console.log(key, values)
}