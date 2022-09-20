//js019_while.js

/*
while (조건식){
    실행문;
}
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("====================");

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

/*
do{
   실행문;
}while(조건식);  세미콜론 꼭 마지막에 사용해야함
*/

for (let i = 3; i <= 1; i++) {
  console.log(i);
}

console.log("====================");

let input = "n";
do {
  console.log("고객님 주문하시겠습니까?(y/n)");
} while (input == "y");
