document.querySelector(".red").onclick = (e) => {
  alert("red");
  //red의 부모는 body인데 event가 설정되어있지 않으므로 .stopPropgation을 사용할 이유가 없음
};

document.querySelector(".green").onclick = (e) => {
  alert("green");
  e.stopPropagation();
};

document.querySelector(".blue").onclick = (e) => {
  alert("blue");
  console.log(e);
  e.stopPropagation();
  //return false;  //dom에서는 사용불가, jQuery에서는 사용가능
};

document.querySelector("a").onclick = (e) => {
  alert("안녕하세요");
  //e.preventDefault(); //페이지 이동차단
  return false;
};

/*
[1] Event Propagation(이벤트 전파)
    1) 캡처링(captruing phase) : 부모요소에서 Target요소로 이벤트 전파
    2) 버블링(bubbling phase) : Target요소에서 부모요소로 이벤트 전파
 
[2] 이벤트 차단
    stopPropagtion()

[3] stopPropagation()와 preventDefault()비교
    stopPropagation() : 이벤트 전파 차단 return false(jQuery)
    preventDefault() : 디폴트 이벤트 차단 return false(javascript, jQuery)
*/
