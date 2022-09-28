// // 약관 동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert("약관에 동의해야 합니다.");
    return false;
  }
};

//this -> 이벤트가 발생된 기준

//전체선택
document.frm.allCheck.onclick = function () {
  //  console.log(this.checked); //현재 이벤트가 발생된 객체를 부를 때 this라고 함

  // document.frm.subject1.checked = this.checked;
  //  document.frm.subject2.checked = this.checked;
  //  document.frm.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll(".checkgroup");
  console.log(checkgroup.length);

  //Arrow Function : this는 상위객체는 document.frm.allCheck을 의미함
  // checkgroup.forEach((element) => {
  //   // <input type="checkbox" name="allCheck" id="allCheck" />;
  //   console.log(this);
  //   element.checked = this.checked;
  // });

  ///////////////////////////////////////////////////////////
  let myThis = this; //document.frm.allCheck

  //Anonymas forEach(funciton.1): this는 window 객체를 의미함
  // checkgroup.forEach(function (element) {
  //   console.log(this);
  //   element.checked = myThis.checked;
  // });

  ///////////////////////////////////////////////////////////
  //Array.from() : NodeList를  Array로 변경
  //console.log(`${checkgroup}`);

  // let myArray = Array.from(checkgroup);
  // console.log(myArray);

  // myArray.map(function (element) {
  //   console.log(this);
  //   element.checked = myThis.checked;
  // });

  ///////////////////////////////////////////////////////////
  //ES6 Spread Operator : NodeList를  Array로 변경
  let iArray = [...checkgroup];
  iArray.map(function (element) {
    //     console.log(this);
    element.checked = myThis.checked;
  });
};
