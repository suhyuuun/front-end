//js021_for_in.js

let color = ["red", "green", "blue"]; //배열안에 있는 각각의 값은 element
console.log(color[0]); //red
console.log(color[1]); //green
console.log(color[2]); //blue
console.log(color[3]); //undefined -> 없는 값

//length : 배열에 저장되어있는 요소의 개수 리턴, length 키워드
console.log(color.length); //3

for (let index = 0; index <= 2; index++) {
  console.log(color[index]);
}

//배열에 'black'요소 추가, 자바스크립트에서만 사용가능
color[3] = "black";
console.log(color.length); //4

for (let index = 0; index < color.length; index++) {
  console.log(color[index]);
} //배열의 개수는 인덱스 번호보다 1이 더 큼

//객체 리터널 {property : value, property : value}
//java : element를 가져옴 for(String element : city){}
//java script : index를 가져옴
let city = ["서울", "부산", "대전"];
for (let idx in city) {
  console.log(idx);
  console.log(city[idx]);
}

let obj = { a: 1, b: 2, c: 3 };
console.log(obj); //{ a: 1, b: 2, c: 3 }

console.log(obj.a); //객체를 가지고 올때는 obj.이름
console.log(obj.b);
console.log(obj.c);
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Grammar_and_Types#%EB%A6%AC%ED%84%B0%EB%9F%B4
for (let prop in obj) {
  //console.log(prop);
  //console.log(obj[prop]);
  console.log(`${prop} : ${obj[prop]}`); //a : 1 **
  console.log(`${prop} : ${obj.prop}`); //a : undefind -> 객체안에 prop이라는 property를 찾는 것
}
