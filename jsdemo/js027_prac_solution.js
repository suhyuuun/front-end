/*
[문제1]
[데이터]
http://www.daum.net
ftp://ftp.microsoft.com

[출력결과]
protocal: http, domain: www.daum.net
protocal: ftp, domain: ftp.microsoft.com
*/

//[출력결과]를 참고하여 separator함수를 구현하세요.
function separator(data) {
  let arr = data.split("://");
  console.log(`protocal: ${arr[0]} , domain: ${arr[1]}`);
}
separator("http://www.daum.net");
separator("ftp://ftp.microsoft.com");

/*
[문제2]
[데이터]
let person1 = { name: '홍길동', phone: '010-1234-5678' };
let person2 = { name: '진여구', phone: '010-253-2253' };
[출력결과]
이름: 홍길동
연락처: 010-****-5678
이름: 진여구
연락처: 010-***-2253
*/

let person1 = { name: "홍길동", phone: "010-1234-5678" };
let person2 = { name: "진여구", phone: "010-253-2253" };
//출력결과를 참고하여 display()함수를 구현하세요
function display(customer) {
  let start = customer.phone.indexOf("-");
  let end = customer.phone.lastIndexOf("-");
  console.log(`이름 : ${customer.name}`);
  let searchWord = customer.phone.substring(start + 1, end);
  let phoneStar = "*".repeat(searchWord.length);
  console.log(`연락처 : ${customer.phone.replace(searchWord, phoneStar)}`);
}
display(person1);
display(person2);
