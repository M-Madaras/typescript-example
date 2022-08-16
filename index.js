// define the variables value/identifier
var firstname = "Mason";
var age = 25;
var active = true;
// let names: string[] = [1,2,3,4] // gives us a error
var names = ["bobby,lilly,jennifer"];
// enum
var studentTypes;
(function (studentTypes) {
    studentTypes[studentTypes["pending"] = 0] = "pending";
    studentTypes[studentTypes["active"] = 1] = "active";
    studentTypes[studentTypes["almostdone"] = 2] = "almostdone";
    studentTypes[studentTypes["graduated"] = 3] = "graduated";
    studentTypes[studentTypes["tas"] = 4] = "tas";
    studentTypes[studentTypes["teachers"] = 5] = "teachers"; // 5
})(studentTypes || (studentTypes = {}));
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
function sum(arr) {
    return arr.reduce(function (total, num) { return total + num; });
    // arr.reduce( (previousValue: number, currentValue: number) => {return previousValue + currentValue})
}
var numbers = [1, 2, 3, 4, 5, 6];
// console.log(sum(numbers))
var complexItem = { name: "mason" };
complexItem = { name: "Mason", hasDog: false };
// complexItem.name = "Todd"
// complexItem = "It's a String"
// complexItem = 22
// console.log("complexItem",complexItem)
var bloodType;
(function (bloodType) {
    bloodType[bloodType["aPostive"] = 0] = "aPostive";
    bloodType[bloodType["bPostive"] = 1] = "bPostive";
    bloodType[bloodType["oNegative"] = 2] = "oNegative";
    bloodType[bloodType["oPositive"] = 3] = "oPositive";
})(bloodType || (bloodType = {}));
var me = {
    name: "Bobby",
    "age": 30,
    // bloodType: bloodType.oNegative,
    height: 6 * 12
};
