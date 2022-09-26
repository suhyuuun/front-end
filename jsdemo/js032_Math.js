// js032_Math.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math

//최대값
console.log(Math.max(1, 2, 3, 4, 5)); //5

//최소값
console.log(Math.min(1, 2, 3, 4, 5)); //1

//절대값
console.log(Math.abs(-10)); //10

//반올림 - 자릿수 지정할 수 없음
console.log(Math.round(25.33333333)); //25

//올림
console.log(Math.ceil(23.344)); //24

//버림
console.log(Math.floor(23.56)); //23

//난수 (0.0이상 1.0이하)
console.log(Math.random()); //실행할때마다 바뀜

//반올림
console.log((25.523).toFixed(2)); //25.52
console.log((25.527).toFixed(2)); //25.53 소수점 2자리까지 살리기(반올림)

//정적 프로퍼티 -> new를 사용하지 않음
