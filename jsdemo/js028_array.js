//js028.array.js

let scores = [100, 90, 100];
console.log(scores); //[ 100, 90, 100 ] Array(3)

console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //100
console.log(scores[3]); //undefined
console.log(scores.length); //3
//java : 같은 데이터타입으로 된 것들만 묶을 수 있음 cf. javascript는 다 묶을 수 있음

let person = ["John", "Doe", 26, true];
/*
John string
Doe string
26 number
true boolean
*/
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}

let student = ["홍길동", [100, 90, 20]]; //배열에 객체를 넣어주는 것도 가능
/*
홍길동 string
[ 100, 90, 20 ] object
*/
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}

let car = new Array(); //car= []
console.log(car);
let cars = new Array("Sasb", "Volvo", "BMW"); //cars= ['Sasb','Volvo','BMW']
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}

let color = [];
console.log(color.length); //0
color[0] = "red";
console.log(color.length); //1
color.push("green");
console.log(color.length); //2
color.push(759);
console.log(color.length); //3
color[8] = "blue";
console.log(color.length); //9
console.log(color); //[ 'red', 'green', 759, <5 empty items>, 'blue' ] / browser :[ 'red', 'green', 759, empty x 5, 'blue' ]
console.log(color[4]); //undefined
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}

//배열의 요소 3개가 생긴다. / 3개의 크기를 가진 배열을 생성
let point = new Array(3);
console.log(`point length : ${point.length}`); //3

//2개 이상이 작성되었을 때는 요소로 작용됨
let shape = new Array(10, 20);
console.log(`shape length : ${shape.length}`); //2
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`);
}

shape[2] = 50; //추가
console.log(shape[1]); // 요소 가져오기
console.log(shape.length); //갯수 조회

/*
for()
for ~ in : index
for ~ of : element
 */

//forEach() : 배열 전용 메소드
//배열.forEach(function(element[, index], index){수행할 문장}); ->[]대괄호로 표현할때는 생략가능
shape.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});
//화살표 함수(arrow function)
shape.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});
//문자열은 forEach()를 제공하지 않으므로 사용할 수 없다.
//TypeError: choice.forEach is not a function
// let choice = "javascript";
// choice.forEach(function (element, index) {
//   console.log(`${index} : ${element}`);
// });

//배열명.map(callback);
//.map은 요소에 있는 개수를 리턴해준다.
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});
console.log(`res = ${res}`); //8,18,32,50

//Math.sqrt : 요소의 제곱근
const sqt = numbers.map(Math.sqrt);
console.log(`sqt = ${sqt}`); //2,3,4,5
console.log(`============================`);
//reduce(); ->
function getSum(total, num) {
  //total : 누적 , num : 요소
  return total + num;
}
const sum = numbers.reduce(getSum);
console.log(`sum : ${sum}`);

//filter(); -> true인 값만 리턴
const ages = [32, 33, 16, 40];
const per = ages.filter(function (element, index) {
  return element >= 18; //typeof filter : boolean
});

console.log(`per : ${per}`);
//*map, reduce, filter* 매우 중요
