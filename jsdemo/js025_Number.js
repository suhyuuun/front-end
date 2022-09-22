//js025_Number.js

let data = 10;
let fData = Number(data);
let nObj = new Number(data);
console.log(`data = ${typeof data}`); //number , primitive type
console.log(`fData = ${typeof fData}`); //number
console.log(`nObj = ${typeof nObj}`); //object

//.toString() : number, Number -> stirng
//.toString()으로 기본형도 객체도 문자열값으로 변경가능
console.log(typeof nObj.toString()); //string
console.log(typeof data.toString()); //string

console.log(data + fData); //number + number = 20
console.log(data + nObj); //number + object = 20

//Number(number타입의 객체) -> number(기본타입)
//valueOf() : object -> primitive
console.log(typeof nObj.valueOf()); //number
console.log(typeof new String(`javascript`)); //object
console.log(typeof new String(`javascript`).valueOf()); //string

console.log(parseInt("10")); //10
//let val = "10.0";
// let val = "10.3";
// let val = "A";
//slet val = "10A";
let val = "A10";

console.log(val + val); //10.010.0 10.310.3 10A10A A10A10

//Number(), parseInt()
console.log(Number(val) + Number(val)); //20 20.6           NaN    NaN   NaN
console.log(parseInt(val) + parseInt(val)); //20 20         NaN    20    NaN
console.log(parseFloat(val) + parseFloat(val)); //20 20.6   NaN    20    NaN

console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NaN); //NaN
