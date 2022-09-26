//<input type="button" value="login" id="btn" />

let btn = document.querySelector("#btn");
btn.onclick = () => {
  let idNode = document.querySelector("#my_id");
  let passNode = document.querySelector("#my_pass");

  if (idNode.value == "") {
    alert("아이디를 입력하세요");
    return false;
  }

  if (passNode.value == "") {
    alert("비밀번호를 입력하세요");
    return false;
  }
  //document.log_f.aciton = "js039_submit.html";
  //강제적으로 sumbit() 이벤트 발생시킨다.
  document.log_f.submit();
};
//버튼이 여러개일 경우 따로따로 하나씩 가져와서 설정
