// console.log("hello javascript");
// console.log("test javascript");

//대입연산자
let a = 3;
let b = 4;
let sum = 0;

sum = a + b;
console.log(`sum=${sum}`);

let data = 0;
data = data + a;
data += a; //연산자 사이를 띄어주거나 순서를 바꾸면 안됨
console.log(`data=${data}`);

//연산자 우선순위
//단항연산자 > 산술연산자 > 비교 > 논리 > 조건 > 대입

let x = 5;
let y = 8;
let z = 10;
let result = x > y ? x++ : y++;
console.log(`result=${result}, x=${x}, y=${y}`);
