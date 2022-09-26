//button을 input으로 설정시 submit 없으나 button value로 사용시 있

//doucument.log_f.onsubmit = function() {}
document.log_f.onsubmit = () => {
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
};
