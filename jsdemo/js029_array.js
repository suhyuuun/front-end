// js029_array.js

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); //['Banana', 'Orange', 'Apple', 'Mango']
let data = fruits.toString();
console.log(`${data}`); //Banana,Orange,Apple,Mango
console.log(`${typeof data}`); //string

console.log(typeof fruits.join()); //string
console.log(fruits.join()); //Banana,Orange,Apple,Mango -> 기본은 쉼표
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango
console.log(fruits.join("_")); //Banana_Orange_Apple_Mango

//배열의 끝에 요소 추가
fruits[4] = "kiwi";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]
console.log(fruits.push("Melon")); //6 -> 배열의 길이를 리턴
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi', 'Melon' ]

//배열의 끝에 요소를 제거, 메모리에도 남아있지 않음
console.log(fruits.pop()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//배열의 앞에 요소 추가
console.log(fruits.unshift("Melon")); //6 -> 배열의 길이를 리턴
console.log(fruits); //[ 'Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//배열의 앞에 요소를 제거
console.log(fruits.shift()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//특정 위치의 요소 제거(자리는 확보하고 있음)
delete fruits[3];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'kiwi' ]

fruits[3] = "Mango";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

console.log(fruits.slice(1, 3)); //[ 'Orange', 'Apple' ]
console.log(fruits); //앞에서 slice를 사용했어도 원래의 값 그래도 유지

console.log(fruits.slice(-4, -2)); //[ 'Orange', 'Apple' ]
console.log(fruits);

console.log(fruits.slice(1)); //[ 'Orange', 'Apple', 'Mango', 'kiwi' ]

//오름차순 정렬
console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Mango', 'Orange', 'kiwi' ]
console.log(fruits); //[ 'Apple', 'Banana', 'Mango', 'Orange', 'kiwi' ] -> 원래의 배열값도 변경됨 / 원배열이 정렬됨

//내림차순 정렬
console.log(fruits.sort().reverse()); //[ 'kiwi', 'Orange', 'Mango', 'Banana', 'Apple' ] -> 오름차순으로 배열을 정렬한 뒤 .reverse를 사용하여 거꾸로 배열을 저장한다.

//javascript에서 sort()는 Tim Sort 알고리즘을 사용한다.
//Tim Sort는 Insertion sort와 Merge Sort을 결합하여 만든 정렬이다.
//Tim Sort 알고리즘 : https://d2.naver.com/helloworld/0315536
let point = [40, 100, 1, 5, 10];
console.log(point.sort()); //[ 1, 10, 100, 40, 5 ]

//오름차순
//[1, 5, 10, 40, 100]
console.log(
  point.sort(function (a, b) {
    // console.log(`a : ${a}, b : ${b}, a-b : ${a - b}`);
    return a - b;
  })
);
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//내림차순
//[ 100, 40, 10, 5, 1 ]
console.log(
  point.sort(function (a, b) {
    // console.log(`a : ${a}, b : ${b}, a-b : ${a - b}`);
    return b - a;
  })
);

let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length); //9
console.log(zData); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//.flat();
let arr = [1, 3, [[[4, 5]]]];
console.log(arr.flat()); //[ 1, 3, [ [ 4, 5 ] ] ] -> 대괄호가 1개가 제거됨
console.log(arr); //[ 1, 3, [ [ [Array] ] ] ] / .flat을 했어도 원래값 그대로 가지고 옴
console.log(arr.flat(1)); //[ 1, 3, [ [ 4, 5 ] ] ] -> 대괄호가 1개가 제거됨
console.log(arr.flat(2)); // [ 1, 3, [ 4, 5 ] ] -> 대괄호 2개가 제거됨
console.log(arr.flat(3)); //[ 1, 3, 4, 5 ] -> 대괄호 3개가 제거됨

let arr2 = [1, 3, [[[4, 5]]], [7, 8], [[9, 10], 12]];
console.log(arr2.flat());
console.log(arr2);
console.log(arr2.flat(1));
console.log(arr2.flat(2));
console.log(arr2.flat(3));
