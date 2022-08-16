let firstname: string = "Mason"
let age: number = 25
let active: Boolean = true

// let names: string[] = [1,2,3,4] // gives us a error
let names: string[] = ["bobby,lilly,jennifer"]

// enum
enum studentTypes {
    pending,  // 0
    active,   // 1
    almostdone,  // 2
    graduated,   // 3
    tas,         // 4
    teachers     // 5

}


let mystatus = studentTypes.graduated

switch (Number(mystatus)) {
    case Number(studentTypes.active):
        break;
    case Number(studentTypes.graduated):
        console.log("Student is graduated")
        break;
    default:
        console.log("😒")
}

// console.log(studentTypes)


// console.log("my status is", mystatus);
// if (mystatus == studentTypes.graduated) {
//     console.log('The Student is graduated')
// }

// console.log(names)
// console.log(`my first name is ${firstname}`)

// // string or numbers or both can be return
// let code: string | number = 11
// code = 'AA11'
// // code = false // error not a string or number

// console.log(`my Entry code is: ${code}`)

function sum(arr: number[]) {
     return arr.reduce((total: number, num: number) => total + num)
    // arr.reduce( (previousValue: number, currentValue: number) => {return previousValue + currentValue})
}

let numbers: number[] = [1, 2, 3, 4, 5, 6]

console.log(sum(numbers))