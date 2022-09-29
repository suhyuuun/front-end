//////////////////////////////////////////////
//슬라이딩 구현

setInterval(function () {
  let tg = document.querySelector(".slide");
  tg.style.top = "-100%";
  //대상의 top의 값이 -100%으로 0.6초동안 transition이 발생
  tg.style.transition = "0.6s";

  setTimeout(function () {
    console.log(tg.querySelectorAll("li").length);
    let first = tg.querySelectorAll("li")[0];
    console.log(first);
    tg.appendChild(first);
    //대상의 top값이 0으로 변경
    tg.style.top = "0";
    //transition 없애기
    tg.style.transition = "none";
  }, 600); //0.6초
}, 3000); //3초

//////////////////////////////////////////////
//공지사항 및 갤러리 구현
function chgTab(i1, i2) {
  //i1 : class를 넣을 li순번
  //i2 : class를 뺄 li순번

  let tm = document.querySelectorAll(".tm>li");
  let tc = document.querySelectorAll(".tc>li");

  //클래스 넣기
  tm[i1].classList.add("on");
  tc[i1].classList.add("on");

  //on클래스 빼기
  tm[i2].classList.remove("on");
  tc[i2].classList.remove("on");
}

////////////////////////////////////////////////
//팝업창 닫기
function popup(sts) {
  let pop = document.querySelector(".pop");
  pop.style.display = sts;
}
