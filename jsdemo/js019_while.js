//js019_while.js

/*
while (조건식){
    실행문;
}
*/
//while문 위에서  또는 실행문에서 초기식 및 증감식 작성

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("====================");

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

/*while(){
  console.log('test');
}*/

while (true) {
  console.log("test");
}
// while문은 조건식 생략 불가, 무한루프를 돌리고싶으면 조건식 자리에 true 또는 1을 넣는다.

/*
do{
   실행문;
}while(조건식);  do~while은 한번이라도 실행문을 실행함 / 세미콜론 꼭 마지막에 사용해야함
*/

for (let i = 3; i <= 1; i++) {
  console.log(i);
}

console.log("====================");

let input = "n";
do {
  console.log("고객님 주문하시겠습니까?(y/n)");
} while (input == "y");
