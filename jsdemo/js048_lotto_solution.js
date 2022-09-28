//1. 6개의 난수를 구하고 중복 체크
let lotto = [];
for (let i = 0; i <= 5; i++) {
  /*0.0이상 1.0미만*/
  /*0.0이상 45.0미만 */
  let ran = Math.random() * 45;
  /*1이상 45이하 */
  ran = Math.floor(ran) + 1;
  console.log(ran);
  lotto.push(ran);

  for (j = 0; j < i; j++) {
    if (lotto[j] == lotto[i]) {
      i--;
      break;
    }
  }
}
//2. 정렬

lotto.sort((a, b) => {
  return a - b;
});
//3. 출력
// console.log(lotto);

let divList = document.querySelectorAll("div.wrap div");

divList.forEach((element, idx) => {
  element.innerText = lotto[idx];
});
