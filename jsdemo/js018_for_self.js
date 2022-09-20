//js018_for_self.js

let even = 2,
  odd = 1,
  sum1 = 0,
  sum2 = 0;
for (; even <= 10, odd <= 10; even += 2, odd += 2) {
  sum1 += even;
  sum2 += odd;
}
console.log(`짝수: ${sum1} 홀수: ${sum2}`);
