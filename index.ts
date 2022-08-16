// define the variables value/identifier
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


// let mystatus = studentTypes.graduated

// switch (Number(mystatus)) {
//     case Number(studentTypes.active):
//         break;
//     case Number(studentTypes.graduated):
//         console.log("Student is graduated")
//         break;
//     default:
//         console.log("😒")
// }

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

// console.log(sum(numbers))
let complexItem: any = { name: "mason"}

complexItem = { name: "Mason", hasDog: false}
// complexItem.name = "Todd"
// complexItem = "It's a String"
// complexItem = 22

// console.log("complexItem",complexItem)

enum bloodType {
    aPostive =20,
    bPostive =30,
    oNegative =40,
    oPositive =80,
} 

interface human {
    name: string,
    age: number,
    bloodType?: bloodType
    height: number,
} 


const me : human = {
    name: "Bobby",
    "age": 30,
    // bloodType: bloodType.oNegative,
    height: 6 * 12

}

console.log({me})