// js030_spread_operator.js

/////////////////////////////////
//[1]배열에서의 Spread Operator

//1. 배열 복사(Array Copy)
let arr1 = [1, 2, 3]; //주소가 저장, 참조 데이터
let arr2 = arr1; //얇은 복사(shallow copy) -> 주소가 복사되기 때문에 서로 영향을 줌
console.log(`arr1 = ${arr1}`); //arr1 = 1,2,3
console.log(`arr2 = ${arr2}`); //arr2 = 1,2,3

arr2.push(4);
console.log(`arr1 = ${arr1}`); //arr1 = 1,2,3,4
console.log(`arr2 = ${arr2}`); //arr2 = 1,2,3,4

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; //깊은 복사(deep copy)
console.log(`arr3 = ${arr3}`); //arr3 = 1,2,3
console.log(`arr4 = ${arr4}`); //arr4 = 1,2,3

arr3.push(4);
console.log(`arr3 = ${arr3}`); //arr3 = 1,2,3,4
console.log(`arr4 = ${arr4}`); //arr4 = 1,2,3

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5); //[10, 20,  1,  2, 3,  4, 40, 50]

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr7); //[ 1, 5, 6, [ 7, 8 ] ]

//2. 배열 병합(Array Concatenation)
