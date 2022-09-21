//js022_for_of.js

//for ~ of : element을 가져옴
let color = ["red", "green", "blue"];
for (let element of color) {
  console.log(element);
}

let subject = "javascript";
for (let idx in subject) {
  console.log(idx);
}

for (let element of subject) {
  console.log(element);
}

console.log(`=========================`);
let obj = { a: 1, b: 2, c: 3 };
for (let value of obj) {
  console.log(value); //TypeError: obj is not iterable
}

/**
 for ~ of문은 반복 가능한 객체(Array, String, Map, Set, arguments(인수))를 반복하는 객체
 즉, iterable속성을 가진 객체만 가능 
 */
