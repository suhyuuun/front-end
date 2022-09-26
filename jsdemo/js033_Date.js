//js033_Date.js

let date = new Date();
//2022-09-26T01:09:59.610Z
//Mon Sep 26 2022 10:16:43 GMT+0900 (한국 표준시) -> 웹브라우저
console.log(date);

console.log(date.getFullYear()); //년도
console.log(date.getMonth() + 1); //월, 월을 나타낼때 0부터 카운트 하기 때문에 +1을 꼭 해줘야함(어떤 프로그램이든 동일)
console.log(date.getDate()); //일
console.log(date.getDay()); //요일 0 -> 일요일, 6 -> 토요일
