const student = {
    name : "MD_Rasel",
    Id : '2024000010048',
    Batch : '19',
    CGPA : '3.19'
}

// Use Destructuring method in an Object

const {name, Id : Roll, CGPA} = student;

console.log(name);
console.log(Roll);
console.log(CGPA);

// Function using destructure

function number(x, y){
    return [x*3 , y*4];
}

const [first, second] = number(10, 20);

console.log(first , second);
// console.log(second);
