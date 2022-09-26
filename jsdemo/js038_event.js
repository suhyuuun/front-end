/*
[문서 객체에 이벤트를 적용하는 방법]
요소선택.이벤트종류 = function(){실행할 문장};
btn.onclick=process;
function process(){};
*/

let chk = true;
let btn = document.getElementsByTagName("button")[0];
btn.onclick = process;

function process() {
  let divNode = document.getElementsByTagName("div")[0];
  if (chk) {
    divNode.style.backgroundColor = "blue";
    chk = false;
  } else {
    divNode.style.backgroundColor = "red";
    chk = true;
  }
}
