// /*0.0이상 1.0미만   -> 1~45*/
// let ran = Math.round(Math.random() * 100);
// console.log(ran);

let list = [];
for (let i = 1; i <= 45; i++) {
  list.push(i);
}

let res = [];
for (let i = 0; i < 6; i++) {
  let index = Math.floor(Math.random() * list.length);
  let num = list[index];
  list.splice(index, 1);
  res.push(num);
}
console.log(res);

let div = document.querySelector("div");
