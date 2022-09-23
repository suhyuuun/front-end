/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

*/
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];

  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, '71.67' ],
  [ '이영희', 100, 35, 75, 210, '70.00' ]]
  최고점: 71.67
*/
let data = [
  ["홍길동", 90, 85, 40],
  ["이영희", 100, 35, 75],
];
let listData = [];
let average1;
let average2;

function getSum(total, num) {
  return total + num;
}
for (let i = 0; i < data.length; i++) {
  let j = data[i];
  let k = data[i].slice(1);
  let l = k.reduce(getSum);
  let m = (l / 3).toFixed(2);
  listData.push(m);
}
average1 = listData[0];
average2 = listData[1];
let arr1 = [...data[0], average1];
let arr2 = [...data[1], average2];
console.log(arr1);
console.log(arr2);
