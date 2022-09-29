//첫번째 배너를 제외하고 숨김
let wrapList = document.querySelectorAll("#roll_banner_wrap dd");
// console.log(wrapList);

wrapList.forEach((element, index) => {
  element.style.display = "none";
});

wrapList[0].style.display = "block";

//첫번째 버튼의 <a>를 저장
let onBtn = document.querySelector("#roll_banner_wrap dt a");

//1~4버튼을 클릭할때
let bannerList = document.querySelectorAll("#roll_banner_wrap dt a");
bannerList.forEach((element, index) => {
  element.onclick = function () {
    //ⓐ<dd>모두 감춤
    let bannerSub = document.querySelectorAll("#roll_banner_wrap dd");
    console.log(bannerSub.length);
    bannerSub.forEach((element) => {
      element.style.display = "none";
    });

    //ⓑ onBtn에 하위 요소 <img>에 'src'속성을 비활성화 이미지로 변경
    let srcOverOut = onBtn.querySelector("img").getAttribute("src");
    // images/pop_btn_1_over.gif
    onBtn
      .querySelector("img")
      .setAttribute("src", srcOverOut.replace("over.gif", "out.gif"));
    srcOverOut.replace("over.gif", "out.gif");

    //ⓒ 클릭한 버튼에 해당하는 <dd>배너 요소만 보이기
    bannerSub[index].style.display = "block";

    //ⓓ 클릭한 <a>에 하위 <img>에 'src' 속성에 있는 값을 활성화 이미지로 변경
    let srcOutOver = element.querySelector("img").getAttribute("src");
    element
      .querySelector("img")
      .setAttribute("src", srcOutOver.replace("out.gif", "over.gif"));

    //ⓔ클릭 이벤트가 발생한 버튼 <a> 변수 onBtn에 할당
    onBtn = element;

    //<a>에 링크를 차단
    return false;
  };
});
