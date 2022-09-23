// js026_String.js

let data = "It`s alright";
console.log(data);

//length :  문자열의 길이
console.log(data.length);

/*
특정 범위 데이터를 리턴해주는 3가지 메소드
1. substring(start, end);  -> end : 미만
2. substr(start, length); 
3. slice(start, end);
 */

data = "Apple, Banana, Kiwi";
console.log(`data.substring : ${data.substring(7, 13)}`); //data.substring : Banana -> 7인덱스부터 13인덱스 미만
//substirng()은 음수값을 지원하지 않음
console.log(`data.substring : ${data.substring(-12, -6)}`); //string에서만 음수값 지원?
console.log(data); //Apple,Banana, Kiwi

console.log(`data.substr : ${data.substr(7, 6)}`);
console.log(`data.substr : ${data.substr(-12, 6)}`);
console.log(`data.slice : ${data.slice(7, 13)}`);
console.log(`data.slice : ${data.slice(-12, -6)}`);

//replace('찾을 문자열|RegExp','바꿀 문자열')
//i:대소문자 구분없음, g: 모든 문자열
console.log(`replace: ${data.replace("Banana", "Grape")}`);
console.log(data); //String은 한번 저장된 문자열이 바뀌지 않음, 불변

//정규표현식 (/문자열/,'바꿀 문자열')
data = "Mr Blue has a blue house and a blue car";
//Mr Blue has a red house and a blue car
console.log(data.replace(/blue/, "red")); //대소문자 구분하여 첫번째 문자열 바꿈

data = "Mr Blue has a blue house and a blue car";
//Mr Blue has a red house and a red car
console.log(data.replace(/blue/g, "red")); //대소문자 구분하여 모든 문자열 바꿈

data = "Mr Blue has a blue house and a blue car";
//Mr red has a blue house and a blue car
console.log(data.replace(/blue/i, "red")); //대소문자 구분없이 첫번째 문자열 바꿈

data = "Mr Blue has a blue house and a blue car";
//Mr red has a red house and a red car
console.log(data.replace(/blue/gi, "red")); //대소문자 구분없이 모든 문자열 바꿈

data = "Hello World";
console.log(`toUpperCase() : ${data.toUpperCase()}`); //HELLO WORLD
console.log(`toLowerCase() : ${data.toLowerCase()}`); //hello world

let data2 = "javascript";
//Hello Worldjavascript
console.log(`concat() : ${data.concat(data2)}`); //두개의 문자열 나란히 합쳐져서 출력
//Hello World javascript
console.log(`concat() : ${data.concat(" ", data2)}`);
//Hello World_javascript
console.log(`concat() : ${data.concat("_", data2)}`);
//H
console.log(`charAt():${data.charAt(0)}`);
//72 (unicode) / A:65
console.log(`charAt():${data.charCodeAt(0)}`);

data = "a,b,c,d,e";
//split() : 문자열을 나눠준다.
let arr = data.split(",");
console.log(arr);
for (let i of arr) console.log(i);

//match() : 검색데이터와 일치하는 문자열 있으면 문자열 모두를 찾아서 배열로 리턴하고 일치하는 문자열이 없으면 null로 리턴한다.
data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g);
//blue,blue object true
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`);

res = data.match(/red/g);
//null object false
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`);

//search() : 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고 일치하는 문자열이 없으면 -1을 리턴한다.
res = data.search(/blue/g); //g를 붙이든 안붙이든 리턴하는 값은 하나
//14
console.log(`search() : ${res}`);
res = data.search(/red/g);
//-1
console.log(`search() : ${res}`);

//indexOf() : 문자열의 인덱스를 리턴
data = "Mr Blue has a blue house and a blue car";
console.log(data.indexOf("M")); //0
console.log(data.indexOf("B")); //3
console.log(data.indexOf(" ")); //2
console.log(data.indexOf("blue")); //14

//arr.indexOf(searchElement[, fromIndex]) -> fromIndex : 검색을 시작할 색인
//두번째 blue의 인덱스값을 얻고 싶을때
let position = data.indexOf("blue");
console.log(position); //14
console.log(data.indexOf("blue", position + 1)); //31

data = "Mr Blue has a blue house and a blue car";
let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf("blue", pos);
  if (pos != -1) console.log(pos);
} while (pos != -1);

data = "Mr Blue has a blue house and a blue car";
for (let i = 0; i < data.length; i += 1) {
  i = data.indexOf("blue", i);
  if (i == -1) break;
  console.log(i);
}

//repeat()
let text = "korea";
console.log(text.repeat(10)); //문자열이 10번 실행됨

text = "*";
console.log(text.repeat(10));

let text2 = "  korea  data  ";
console.log(text2.length); //15
console.log(text2.trim().length); //11 양끝쪽에 있는 공백을 세지않음, 문자사이에 있는 공백은 셈
