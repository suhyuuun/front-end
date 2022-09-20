//js017_switch.js

/*
[switch문]
선택문의 switch문은 변수에 저장된 값과 switch문에 있는 경우(case)의 값을 검사하여, 변수와
경우의 값에서 일치하는 값이 있을 때 그에 해당하는 실행문을 실행한다.

switch(식){
    case 값1 : 실행문1; break;
    case 값2 : 실행문2; break;
    case 값3 : 실행문3; break;
    default : 실행문;
}
*/

console.log(parseInt(85 / 10));

let jumsu = 100;
switch (parseInt(jumsu / 10)) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
}
/*
code ='a100'이면 '채소류', code = 'b200'이면 '육류' code = 'c300'이면 '생선류' 출력 
*/
let code = "b200";
switch (code) {
  case "a100":
    console.log("채소류");
    break;
  case "b200":
    console.log("육류");
    break;
  case "c300":
    console.log("생선류");
}

/*
switch-case문을 이용해서 년도에 해당하는 띠를 구하는 프로그램을 구현하시오.
1. 12가지 띠 : 원숭이, 닭, 개, 돼지, 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양
2. 띠 구하는 공식 : year%12의 결과가
0 - 원숭이 1 - 닭 2 - 개 3 - 돼지 4 - 쥐 5 - 소 
6 - 호랑이 7 - 토끼 8 - 용 9 - 뱀 10 - 말 11 - 양
*/
let year = "2012";
switch (year % 12) {
  case 0:
    console.log(`${year}년도의 태생은 원숭이띠입니다.`);
    break;
  case 1:
    console.log(`${year}년도의 태생은 닭띠입니다.`);
    break;
  case 2:
    console.log(`${year}년도의 태생은 개띠입니다.`);
    break;
  case 3:
    console.log(`${year}년도의 태생은 돼지띠입니다.`);
    break;
  case 4:
    console.log(`${year}년도의 태생은 쥐띠입니다.`);
    break;
  case 5:
    console.log(`${year}년도의 태생은 소띠입니다.`);
    break;
  case 6:
    console.log(`${year}년도의 태생은 호랑이띠입니다.`);
    break;
  case 7:
    console.log(`${year}년도의 태생은 토끼띠입니다.`);
    break;
  case 8:
    console.log(`${year}년도의 태생은 용띠입니다.`);
    break;
  case 9:
    console.log(`${year}년도의 태생은 뱀띠입니다.`);
    break;
  case 10:
    console.log(`${year}년도의 태생은 말띠입니다.`);
    break;
  case 11:
    console.log(`${year}년도의 태생은 양띠입니다.`);
}
