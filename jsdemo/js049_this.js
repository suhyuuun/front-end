//호출한 객체가 없을 경우에는 기본적으로 Window객체이다.
console.log(this);

let memeber = {
  name: "홍길동",
  show: function () {
    console.log(this);
  },
};

//{name: '홍길동', show: ƒ}
memeber.show();
////////////////////////////////////////////
let memeber2 = {
  name: "홍길동",
  show: () => {
    console.log(this);
  },
};

//Window
memeber2.show();
//////////////////////////////////////////////
