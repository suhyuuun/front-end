//js018_for_self.js
/*1~10 짝수와 홀수의 합을 구해서 출력하는 프로그램을 구현하라
[출력결과]
짝수: ?
홀수: ?
*/
let even = 2,
  odd = 1,
  sum1 = 0,
  sum2 = 0;
for (; even <= 10, odd <= 10; even += 2, odd += 2) {
  sum1 += even;
  sum2 += odd;
}
console.log(`짝수: ${sum1} 홀수: ${sum2}`);

/*let odd=0; 
let even=0;
for(let i=1;i<=10;i++){
  if(i%2==1){
    odd +=i;
  }else{
    even +=i;
  }
}
console.log(`짝수 : ${even} 홀수 : ${odd}`)*/