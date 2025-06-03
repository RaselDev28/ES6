const student = {
    name: 'Rasel',
    Id: '2024000010048',
    Section: 19,
    isGoodStudent: true
}

const keys = Object.keys(student);
console.log(keys);
// [ 'name', 'Id', 'Section', 'isGoodStudent' ]



const values = Object.values(student);
console.log(values);
// [ 'Rasel', '2024000010048', 19, true ]


const entries= Object.entries(student);
console.log(entries);
// Two Dimentional Array / Array of Array
// [
//   [ 'name', 'Rasel' ],
//   [ 'Id', '2024000010048' ],
//   [ 'Section', 19 ],
//   [ 'isGoodStudent', true ]
// ]

// Delete property
// delete student.isGoodStudent
// console.log(student);

const {isGoodStudent, ...goodStudent} = student;
// console.log(goodStudent);

// Freeze
Object.freeze(student);


