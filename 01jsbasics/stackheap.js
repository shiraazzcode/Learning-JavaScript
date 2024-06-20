//Memory in javascript
//stack and heap memory

//stack - used in primitive data type - returns copy of the variable or data. change will be in capied value
//eg
// let name = "Sheraz";

// let othername = name;
// othername = "mehdi";
// console.log(name); // sheraz
// console.log(othername); //mehdi


//Heap - used in non primitive - returns the reference of the original value. change will be in original value.
//eg
let student = {
    id: "1177",
    email: "student41@email.com"
}

let student2 = student;
student2.id = "1122";
console.log(student2.id); //1122
console.log(student.id); //1122
